// Starts PostHog, whose library (array.js from PostHog's CDN) runs just before
// this script. The Content Security Policy blocks inline scripts, so the
// settings come from this script tag's data attributes instead of PostHog's
// usual inline snippet.
(function () {
  var settings = document.currentScript.dataset;

  // The library is missing if it was blocked, e.g. by a content blocker.
  if (!window.posthog) {
    return;
  }

  window.posthog.init(settings.token, {
    api_host: settings.apiHost,
    // array.js is always PostHog's latest release. Its defaults are pinned to
    // this date's so a new release does not change what is collected.
    defaults: "2026-08-30",
    // No cookies or browser storage, so no consent banner. PostHog's servers
    // tell visitors apart with a daily hash of IP address and browser, which
    // must be switched on in the project's settings, or events are dropped.
    // Session replay does not work in this mode.
    cookieless_mode: "always"
  });
})();
