/* ===================================================
   SUMMERVILLE CONTRACTORS LTD — SCROLL ANIMATIONS
   =================================================== */

(function () {

  // ── SCROLL REVEAL ────────────────────────────────
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -56px 0px' }
  );

  function observeReveal() {
    document.querySelectorAll('[data-reveal]').forEach((el) => {
      revealObserver.observe(el);
    });
  }

  // ── STAGGERED CHILDREN ───────────────────────────
  // Add [data-stagger] to a parent to auto-reveal its children with delay
  function initStagger() {
    document.querySelectorAll('[data-stagger]').forEach((parent) => {
      const delay = parseFloat(parent.dataset.stagger) || 0.1;
      Array.from(parent.children).forEach((child, i) => {
        child.setAttribute('data-reveal', '');
        child.style.transitionDelay = `${i * delay}s`;
        revealObserver.observe(child);
      });
    });
  }

  // ── STAT COUNTER ANIMATION ───────────────────────
  function animateCounter(el) {
    const raw    = el.dataset.counter;       // e.g. "350" or "15"
    const suffix = el.dataset.suffix || '';   // e.g. "+" or "★"
    const target = parseFloat(raw);
    const duration = 1600;
    const startTime = performance.now();

    function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

    function tick(now) {
      const elapsed  = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value    = Math.round(easeOutCubic(progress) * target);
      el.textContent = value + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.6 }
  );

  function initCounters() {
    document.querySelectorAll('[data-counter]').forEach((el) => {
      // Store original suffix text before wiping for counter start
      const text = el.textContent.trim();
      const match = text.match(/^([\d.]+)(.*)$/);
      if (match) {
        el.dataset.counter  = match[1];
        el.dataset.suffix   = el.dataset.suffix || match[2];
        el.textContent      = '0' + (el.dataset.suffix || '');
      }
      counterObserver.observe(el);
    });
  }

  // ── STAT ITEM OBSERVER (for CSS pulse animation) ─
  const statObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          statObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  function initStats() {
    document.querySelectorAll('.stat-item').forEach((el) => {
      statObserver.observe(el);
    });
  }

  // ── IMAGE REVEAL ─────────────────────────────────
  function initImageReveal() {
    document.querySelectorAll('.img-reveal').forEach((el) => {
      revealObserver.observe(el);
    });
  }

  // ── RUN EVERYTHING ───────────────────────────────
  function init() {
    initStagger();
    observeReveal();
    initCounters();
    initStats();
    initImageReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
