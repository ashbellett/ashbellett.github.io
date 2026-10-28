# The katex gem bundles an older KaTeX release and has no setting to change it.
# Point it at the copy vendored in _vendor/katex so the HTML rendered at build
# time matches assets/css/katex.css and assets/css/fonts, which come from the
# same release. _vendor is not published. See README.md for how to upgrade.
require "json"
require "katex"
require "open3"

module Katex
  def self.katex_js_path
    File.expand_path("../_vendor/katex/katex.min.js", __dir__)
  end
end

# ExecJS's own Node runtime starts a new process and reloads KaTeX for every
# formula, which turns a seconds-long build into minutes. Keep one Node process
# for the whole build instead and send it each call as a line of JSON.
module NodeKatexRuntime
  SERVER = <<~JS
    const vm = require("vm");
    const lines = require("readline").createInterface({ input: process.stdin });
    let context;
    lines.on("line", (line) => {
      const request = JSON.parse(line);
      let reply;
      try {
        if (request.source !== undefined) {
          context = vm.createContext({});
          vm.runInContext(request.source, context);
          reply = { ok: null };
        } else {
          const fn = vm.runInContext(request.name, context);
          reply = { ok: fn.apply(null, request.args) };
        }
      } catch (error) {
        reply = { error: String(error) };
      }
      process.stdout.write(JSON.stringify(reply) + "\\n");
    });
  JS

  class Context
    def initialize(source)
      @mutex = Mutex.new
      begin
        @stdin, @stdout, = Open3.popen2("node", "-e", SERVER)
      rescue Errno::ENOENT
        raise ExecJS::RuntimeUnavailable, "Node.js renders the formulae but is not installed. See README.md."
      end
      @stdout.set_encoding(Encoding::UTF_8)
      request(source: source)
    end

    # The interface the katex gem expects of an ExecJS context.
    def call(name, *args)
      request(name: name, args: args)
    end

    private

    def request(message)
      @mutex.synchronize do
        @stdin.puts(JSON.generate(message))
        @stdin.flush
        line = @stdout.gets or raise ExecJS::RuntimeError, "Node exited while rendering KaTeX"
        reply = JSON.parse(line)
        raise ExecJS::ProgramError, reply["error"] if reply.key?("error")

        reply["ok"]
      end
    end
  end

  def self.compile(source)
    Context.new(source)
  end
end

Katex.execjs_runtime = -> { NodeKatexRuntime }
