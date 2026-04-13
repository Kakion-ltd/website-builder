/* ===================================================
   SUMMERVILLE CONTRACTORS LTD — SHARED COMPONENTS
   Injects nav + footer into every page.
   =================================================== */

(function () {
  // Determine path prefix based on current page depth
  const path = window.location.pathname;
  const isSubdir = /\/(services|projects)\//.test(path);
  const base = isSubdir ? '../' : '';

  // Mark active nav link
  function isActive(href) {
    const full = base + href;
    if (href === 'index.html' || href === '') {
      return path.endsWith('index.html') || path.endsWith('/') || path === '';
    }
    return path.includes(href.replace(base, ''));
  }

  // ── NAV ──────────────────────────────────────────
  const services = [
    ['New Builds',         'services/new-builds.html'],
    ['Extensions',         'services/house-extensions.html'],
    ['Renovations',        'services/renovations.html'],
    ['Attic Conversions',  'services/attic-conversions.html'],
    ['Roofing',            'services/roofing.html'],
    ['Carpentry',          'services/carpentry.html'],
    ['Velux Installation', 'services/velux-installation.html'],
  ];

  const dropdownLinks = services
    .map(([label, href]) => `<a href="${base}${href}">${label}</a>`)
    .join('');

  const mobileServiceLinks = services
    .map(([label, href]) => `<a href="${base}${href}">${label}</a>`)
    .join('');

  const navHTML = `
    <nav id="nav-root">
      <div class="container nav-inner">
        <a href="${base}index.html" class="nav-logo">
          <img src="${base}brand_assets/summerville-logo-dark.png" alt="Summerville Contractors Ltd" width="400" height="191" fetchpriority="high" decoding="async" />
        </a>

        <ul class="nav-links">
          <li><a href="${base}index.html" class="${isActive('index.html') ? 'active' : ''}">Home</a></li>
          <li><a href="${base}about.html" class="${isActive('about.html') ? 'active' : ''}">About</a></li>
          <li class="has-dropdown">
            <a href="${base}services.html" class="${isActive('services') ? 'active' : ''}">Services</a>
            <div class="nav-dropdown">${dropdownLinks}</div>
          </li>
          <li><a href="${base}projects.html" class="${isActive('projects.html') ? 'active' : ''}">Projects</a></li>
          <li><a href="${base}contact.html" class="${isActive('contact.html') ? 'active' : ''}">Contact</a></li>
        </ul>

        <div class="nav-actions">
          <a href="${base}contact.html" class="btn btn-primary nav-quote-btn">Contact Us</a>
          <a href="${base}contact.html" class="nav-contact-btn">Contact Us</a>
        </div>

        <button class="nav-hamburger" id="hamburger" aria-label="Open menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>

    <div class="nav-mobile" id="mobile-menu">
      <a href="${base}index.html">Home</a>
      <a href="${base}about.html">About</a>
      <div class="mobile-services-row">
        <a href="${base}services.html">Services</a>
        <button class="mobile-services-toggle" id="mobile-services-toggle" aria-label="Toggle services menu">
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
        </button>
      </div>
      <div class="mobile-sub" id="mobile-services-sub">${mobileServiceLinks}</div>
      <a href="${base}projects.html">Projects</a>
      <a href="${base}contact.html">Contact</a>
    </div>
  `;

  // ── FOOTER ───────────────────────────────────────
  const footerHTML = `
    <footer id="footer-root">
      <div class="container">
        <div class="footer-main">
          <div class="footer-logo">
            <img src="${base}brand_assets/summerville-logo-white.png" alt="Summerville Contractors Ltd" width="400" height="191" loading="lazy" decoding="async" />
            <p class="footer-tagline">Premium residential construction, extensions &amp; renovations across Dublin and surrounding counties.</p>
          </div>
          <div>
            <p class="footer-heading">Company</p>
            <div class="footer-links">
              <a href="${base}index.html">Home</a>
              <a href="${base}about.html">About Us</a>
              <a href="${base}services.html">Services</a>
              <a href="${base}projects.html">Projects</a>
              <a href="${base}contact.html">Contact</a>
            </div>
          </div>
          <div>
            <p class="footer-heading">Services</p>
            <div class="footer-links">
              <a href="${base}services/new-builds.html">New Builds</a>
              <a href="${base}services/house-extensions.html">Extensions</a>
              <a href="${base}services/renovations.html">Renovations</a>
              <a href="${base}services/attic-conversions.html">Attic Conversions</a>
              <a href="${base}services/roofing.html">Roofing</a>
              <a href="${base}services/carpentry.html">Carpentry</a>
              <a href="${base}services/velux-installation.html">Velux Installation</a>
            </div>
          </div>
          <div>
            <p class="footer-heading">Contact</p>
            <div class="footer-contact-line">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.4)" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              <a href="tel:+353862832495">+353 86 283 2495</a>
            </div>
            <div class="footer-contact-line">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.4)" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              <a href="mailto:info@summervillecontractors.ie">info@summervillecontractors.ie</a>
            </div>
            <div class="footer-contact-line">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="rgba(255,255,255,0.4)" stroke-width="1.8"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              <p>Dublin &amp; Surrounding Counties, Ireland</p>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© 2026 Summerville Contractors Ltd. All rights reserved. VAT Registered in Ireland.</p>
        </div>
      </div>
    </footer>
  `;

  // ── INJECT ───────────────────────────────────────
  const navEl = document.getElementById('nav-placeholder');
  const footerEl = document.getElementById('footer-placeholder');
  if (navEl) navEl.outerHTML = navHTML;
  if (footerEl) footerEl.outerHTML = footerHTML;

  // ── HAMBURGER TOGGLE ─────────────────────────────
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('#hamburger');
    if (btn) {
      document.getElementById('mobile-menu').classList.toggle('open');
      btn.classList.toggle('open');
    }
    const svcToggle = e.target.closest('#mobile-services-toggle');
    if (svcToggle) {
      const sub = document.getElementById('mobile-services-sub');
      const isOpen = sub.classList.toggle('open');
      svcToggle.classList.toggle('open', isOpen);
    }
  });

  // ── STICKY NAV SHADOW ────────────────────────────
  window.addEventListener('scroll', function () {
    const nav = document.getElementById('nav-root');
    if (nav) {
      nav.style.boxShadow = window.scrollY > 8
        ? '0 1px 24px rgba(13,27,42,0.09)'
        : 'none';
    }
  });

  // ── LOAD ANIMATIONS ──────────────────────────────
  const animScript = document.createElement('script');
  animScript.src = base + 'animations.js';
  document.body.appendChild(animScript);
})();
