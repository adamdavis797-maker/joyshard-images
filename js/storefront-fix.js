(function () {
  function fixLinks() {
    var map = {
      "/pages/desin": "/pages/design",
      "/order": "/pages/order",
      "/design": "/pages/design",
      "/about": "/pages/about",
      "/faq": "/pages/faq",
      "/shipping": "/pages/shipping-returns",
      "/pages/shipping": "/pages/shipping-returns",
      "/checkout": "/pages/checkout"
    };
    document.querySelectorAll("a.js-ocard").forEach(function (a, i) {
      a.setAttribute("href", i === 0 ? "/pages/design?style=tender" : "/pages/design?style=ai");
    });
    document.querySelectorAll("a[href]").forEach(function (a) {
      try {
        var raw = a.getAttribute("href") || "";
        var u = new URL(raw, location.origin);
        var key = u.pathname.replace(/\/+$/, "") || "/";
        if (map[key] && !a.classList.contains("js-ocard")) {
          a.setAttribute("href", map[key] + u.search + u.hash);
        }
      } catch (e) {}
    });
  }
  function fixCheckout() {
    document.querySelectorAll(".js-ck-line").forEach(function (el) {
      if (/Discount/i.test(el.textContent || "")) el.remove();
    });
  }
  function fixCatalog() {
    document.querySelectorAll("a.themes_box_button").forEach(function (el) {
      el.remove();
    });
  }
  function run() {
    fixCheckout();
    fixLinks();
    fixCatalog();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run);
  else run();
})();
