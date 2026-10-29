// Light/dark toggle in the site header. This runs in <head>, before the page
// is drawn, so a saved choice applies without a flash of the other scheme.
// With no saved choice the page follows the system setting through CSS alone.
(function () {
  var root = document.documentElement;
  var system = window.matchMedia("(prefers-color-scheme: dark)");

  // Storage can be unavailable, e.g. with cookies blocked; the toggle then
  // still works but is forgotten on the next page.
  function load() {
    try {
      return localStorage.getItem("theme");
    } catch (e) {
      return null;
    }
  }

  function save(theme) {
    try {
      if (theme) {
        localStorage.setItem("theme", theme);
      } else {
        localStorage.removeItem("theme");
      }
    } catch (e) {}
  }

  function systemTheme() {
    return system.matches ? "dark" : "light";
  }

  function currentTheme() {
    return root.dataset.theme || systemTheme();
  }

  // Mobile browser bars follow <meta name="theme-color">, one per scheme
  // selected by media query. A saved choice paints both with its scheme's
  // colour; with none, each goes back to its own.
  var barColours = document.querySelectorAll('meta[name="theme-color"]');
  var ownColour = {};
  barColours.forEach(function (meta) {
    ownColour[meta.media.indexOf("dark") === -1 ? "light" : "dark"] = meta.content;
  });

  function paintBars() {
    barColours.forEach(function (meta) {
      var scheme = meta.media.indexOf("dark") === -1 ? "light" : "dark";
      meta.content = ownColour[root.dataset.theme || scheme];
    });
  }

  var saved = load();
  if (saved === "light" || saved === "dark") {
    root.dataset.theme = saved;
  }
  paintBars();
  // Reveals the toggle, which does nothing without this script, and the menu
  // button, which swaps the header links for a menu on phones
  root.classList.add("js");

  document.addEventListener("DOMContentLoaded", function () {
    var button = document.querySelector(".theme-toggle");
    if (!button) {
      return;
    }

    function sync() {
      button.setAttribute("aria-pressed", String(currentTheme() === "dark"));
    }

    button.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      // Switching to the system's own scheme clears the saved choice, so the
      // page goes back to following the system.
      if (next === systemTheme()) {
        delete root.dataset.theme;
        save(null);
      } else {
        root.dataset.theme = next;
        save(next);
      }
      paintBars();
      sync();
    });
    system.addEventListener("change", sync);
    sync();
  });
})();
