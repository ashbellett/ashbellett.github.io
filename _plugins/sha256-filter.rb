# Liquid filter used by _includes/head.html to allow the inline analytics
# snippet in the Content-Security-Policy meta tag by its hash.
require "digest"

module Jekyll
  module Sha256Filter
    def sha256_base64(input)
      Digest::SHA256.base64digest(input.to_s)
    end
  end
end

Liquid::Template.register_filter(Jekyll::Sha256Filter)
