// KivuStack Ltd — interaction layer. No dependencies, no network requests.
(function () {
  "use strict";

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer = window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  var raf = window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (fn) { return setTimeout(fn, 16); };

  /* ---------------- Navigation ---------------- */
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");

  function setExpanded(expanded) {
    if (!toggle || !nav) return;
    toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    nav.classList.toggle("is-open", expanded);
    document.body.style.overflow = expanded ? "hidden" : "";
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setExpanded(!nav.classList.contains("is-open"));
    });

    nav.addEventListener("click", function (e) {
      if (e.target.closest("a") && window.innerWidth <= 860) {
        setExpanded(false);
        toggle.focus();
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        setExpanded(false);
        toggle.focus();
      }
    });

    document.addEventListener("click", function (e) {
      if (!nav.classList.contains("is-open")) return;
      if (nav.contains(e.target) || toggle.contains(e.target)) return;
      setExpanded(false);
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 860 && nav.classList.contains("is-open")) {
        setExpanded(false);
      }
    });
  }

  /* ---------------- Scroll: progress bar, header state, hero parallax ---------------- */
  var progress = document.querySelector(".scroll-progress");
  var header = document.querySelector(".site-header");
  var heroVisual = document.querySelector(".hero-visual");
  var scrollQueued = false;

  function onScrollFrame() {
    var y = window.pageYOffset || document.documentElement.scrollTop || 0;
    var max = document.documentElement.scrollHeight - window.innerHeight;

    if (progress) {
      progress.style.transform = "scaleX(" + (max > 0 ? Math.min(y / max, 1).toFixed(4) : 0) + ")";
    }
    if (header) {
      header.classList.toggle("is-scrolled", y > 8);
    }
    if (heroVisual && !reduceMotion) {
      var shift = Math.min(y, 900) * 0.045;
      heroVisual.style.transform = "translate3d(0," + shift.toFixed(2) + "px,0)";
    }
    scrollQueued = false;
  }

  window.addEventListener("scroll", function () {
    if (scrollQueued) return;
    scrollQueued = true;
    raf(onScrollFrame);
  }, { passive: true });
  onScrollFrame();

  /* ---------------- Reveal on scroll + child stagger ---------------- */
  var reveals = document.querySelectorAll(".reveal");

  function indexChildren(el) {
    var kids = el.children;
    for (var i = 0; i < kids.length && i < 12; i++) {
      kids[i].style.setProperty("--i", i);
    }
  }

  reveals.forEach(function (el) {
    if (el.classList.contains("grid") || el.classList.contains("split") || el.classList.contains("principles")) {
      indexChildren(el);
    }
  });

  if ("IntersectionObserver" in window && !reduceMotion) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -24px 0px" });

    reveals.forEach(function (el) { revealObserver.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------------- Active section link ---------------- */
  if (nav && "IntersectionObserver" in window) {
    var links = Array.prototype.slice.call(nav.querySelectorAll('a[href^="#"]'));
    var sections = links.map(function (a) {
      try { return document.querySelector(a.getAttribute("href")); } catch (_) { return null; }
    }).filter(Boolean);

    if (sections.length) {
      var sectionObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var id = entry.target.id;
            links.forEach(function (l) {
              l.classList.toggle("is-active", l.getAttribute("href") === "#" + id);
            });
          }
        });
      }, { rootMargin: "-40% 0px -50% 0px", threshold: 0 });

      sections.forEach(function (s) { sectionObserver.observe(s); });
    }
  }

  /* ---------------- Tactile ripple on buttons ---------------- */
  if (!reduceMotion) {
    document.addEventListener("pointerdown", function (e) {
      var btn = e.target.closest ? e.target.closest(".btn") : null;
      if (!btn) return;
      var rect = btn.getBoundingClientRect();
      var size = Math.max(rect.width, rect.height) * 2;
      var ripple = document.createElement("span");
      ripple.className = "ripple";
      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = (e.clientX - rect.left - size / 2) + "px";
      ripple.style.top = (e.clientY - rect.top - size / 2) + "px";
      btn.appendChild(ripple);
      window.setTimeout(function () { ripple.remove(); }, 680);
    }, { passive: true });
  }

  /* ---------------- Pointer light: cards + hero ---------------- */
  if (finePointer && !reduceMotion) {
    var pointerEvent = null;
    var pointerQueued = false;
    var heroSection = document.querySelector(".hero");

    document.addEventListener("pointermove", function (e) {
      pointerEvent = e;
      if (pointerQueued) return;
      pointerQueued = true;
      raf(function () {
        pointerQueued = false;
        var ev = pointerEvent;
        if (!ev) return;
        var target = ev.target;

        var card = target.closest ? target.closest(".card-hover") : null;
        if (card) {
          var cr = card.getBoundingClientRect();
          card.style.setProperty("--mx", (ev.clientX - cr.left) + "px");
          card.style.setProperty("--my", (ev.clientY - cr.top) + "px");
        }

        if (heroSection && heroSection.contains(target)) {
          var hr = heroSection.getBoundingClientRect();
          heroSection.style.setProperty("--hx", ((ev.clientX - hr.left) / hr.width * 100).toFixed(1) + "%");
          heroSection.style.setProperty("--hy", ((ev.clientY - hr.top) / hr.height * 100).toFixed(1) + "%");
        }
      });
    }, { passive: true });
  }
})();
