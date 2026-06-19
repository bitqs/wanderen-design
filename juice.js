/* ============================================================
   WANDEREN — click-anywhere damage-number juice ("打击感")
   The whole site is a juice demo: click any blank area (or anything)
   and a floating damage number pops, ~20% gold CRIT.

   Drop into ANY page:
     <script src="juice.js"></script>          (root)
     <script src="../../juice.js"></script>     (from ui_kits/<x>/)

   Self-initializing, idempotent, and disabled under
   prefers-reduced-motion. Needs Press Start 2P loaded (styles.css)
   for the pixel numerals; falls back to monospace otherwise.
   ============================================================ */
(function () {
  if (window.__wdJuice) return;
  window.__wdJuice = true;
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var COLORS = ["#ffc83d", "#ff4757", "#3de8ff", "#ffffff"];

  if (!document.getElementById("wd-juice-style")) {
    var s = document.createElement("style");
    s.id = "wd-juice-style";
    s.textContent =
      "@keyframes wd-dmg-pop{0%{transform:translate(-50%,-50%) scale(.4);opacity:1}" +
      "25%{transform:translate(-50%,calc(-50% - 28px)) scale(1.25);opacity:1}" +
      "100%{transform:translate(-50%,calc(-50% - 64px)) scale(1);opacity:0}}" +
      ".wd-dmg{position:fixed;z-index:9500;font-family:'Press Start 2P',ui-monospace,monospace;" +
      "font-weight:700;pointer-events:none;will-change:transform,opacity}" +
      ".wd-dmg--on{animation:wd-dmg-pop .7s cubic-bezier(.2,1.4,.5,1) forwards}";
    document.head.appendChild(s);
  }

  function spawn(e) {
    var d = document.createElement("div");
    d.className = "wd-dmg";
    var crit = Math.random() < 0.2;
    d.textContent = crit
      ? "CRIT! " + (Math.floor(Math.random() * 900) + 100)
      : String(Math.floor(Math.random() * 99) + 1);
    d.style.left = (e.clientX + (Math.random() * 24 - 12)) + "px";
    d.style.top = (e.clientY + (Math.random() * 12 - 6)) + "px";
    d.style.fontSize = crit ? "1.3rem" : ".85rem";
    d.style.color = crit ? "#ffc83d" : COLORS[Math.floor(Math.random() * COLORS.length)];
    document.body.appendChild(d);
    // start animation next frame so it always plays
    requestAnimationFrame(function () { d.classList.add("wd-dmg--on"); });
    setTimeout(function () { d.remove(); }, 760);
  }

  window.addEventListener("pointerdown", spawn);
})();
