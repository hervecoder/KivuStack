// KivuStack Ltd — minimal progressive enhancement, no dependencies
(function(){
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");
  if(!toggle || !nav) return;

  function setExpanded(expanded){
    toggle.setAttribute("aria-expanded", expanded ? "true" : "false");
    nav.classList.toggle("is-open", expanded);
    document.body.style.overflow = expanded ? "hidden" : "";
  }

  toggle.addEventListener("click", function(){
    var isOpen = nav.classList.contains("is-open");
    setExpanded(!isOpen);
  });

  // Close on link click (mobile)
  nav.addEventListener("click", function(e){
    if(e.target.closest("a") && window.innerWidth <= 860){
      setExpanded(false);
      toggle.focus();
    }
  });

  // Close on escape
  document.addEventListener("keydown", function(e){
    if(e.key === "Escape" && nav.classList.contains("is-open")){
      setExpanded(false);
      toggle.focus();
    }
  });

  // Close when clicking outside
  document.addEventListener("click", function(e){
    if(!nav.classList.contains("is-open")) return;
    if(nav.contains(e.target) || toggle.contains(e.target)) return;
    setExpanded(false);
  });

  // Close on resize to desktop
  window.addEventListener("resize", function(){
    if(window.innerWidth > 860 && nav.classList.contains("is-open")){
      setExpanded(false);
    }
  });

  // Active link highlight on scroll
  var links = Array.prototype.slice.call(nav.querySelectorAll('a[href^="#"]'));
  var sections = links.map(function(a){
    try { return document.querySelector(a.getAttribute("href")); } catch(_) { return null; }
  }).filter(Boolean);

  if("IntersectionObserver" in window && sections.length){
    var observer = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          var id = entry.target.id;
          links.forEach(function(l){ l.classList.toggle("is-active", l.getAttribute("href") === "#" + id); });
        }
      });
    }, { rootMargin: "-40% 0px -50% 0px", threshold: 0 });

    sections.forEach(function(s){ observer.observe(s); });

    // Reveal animation - respects reduced motion via CSS
    if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
      var reveals = document.querySelectorAll(".reveal");
      var rObserver = new IntersectionObserver(function(entries){
        entries.forEach(function(e){
          if(e.isIntersecting){ e.target.classList.add("is-visible"); rObserver.unobserve(e.target); }
        });
      }, { threshold: 0.12 });
      reveals.forEach(function(el){ rObserver.observe(el); });
    } else {
      document.querySelectorAll(".reveal").forEach(function(el){ el.classList.add("is-visible"); });
    }
  }
})();

