// Menu drawer for phones, opened by the menu button in the site header. The
// drawer is a modal <dialog>, so the browser moves focus into it, closes it
// with Escape and hands focus back to the button. Without this script the
// header shows the links instead.
(function () {
  var button = document.querySelector(".menu-button");
  var menu = document.getElementById("menu");
  if (!button || !menu) {
    return;
  }

  function sync() {
    button.setAttribute("aria-expanded", String(menu.open));
  }

  button.addEventListener("click", function () {
    menu.showModal();
    sync();
  });
  menu.querySelector(".menu-close").addEventListener("click", function () {
    menu.close();
  });
  // The panel fills the dialog, so a click that lands on the dialog itself is
  // on the dimmed backdrop beside it, or on the drawer's scrollbar
  menu.addEventListener("click", function (event) {
    if (event.target === menu) {
      menu.close();
    }
  });
  menu.addEventListener("close", sync);

  // Closes the drawer as the page is left, so the page restored by the Back
  // button does not show it open
  window.addEventListener("pagehide", function () {
    menu.close();
  });

  // Wider screens show the links in the header and hide the menu button. The
  // width is $on-medium in _sass/main.scss.
  window.matchMedia("(min-width: 600px)").addEventListener("change", function (event) {
    if (event.matches) {
      menu.close();
    }
  });
})();
