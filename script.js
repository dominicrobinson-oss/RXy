/* =====================================================
   RXy+ — script.js
   Vanilla JS: countdown, dropdowns, mobile menu,
   search toggle, carousel, footer toggles, quick buy
   ===================================================== */

(function () {
  'use strict';

  /* ---- 1. COUNTDOWN TIMER ---- */
  (function initCountdown() {
    const el = document.getElementById('countdown');
    if (!el) return;

    // Target: midnight in 2 days from now (stays relevant on any visit)
    const now = new Date();
    const target = new Date(now);
    target.setHours(24, 0, 0, 0);
    target.setDate(target.getDate() + 1);

    function pad(n) { return String(n).padStart(2, '0'); }

    function tick() {
      const diff = target - Date.now();
      if (diff <= 0) {
        el.textContent = 'Offer ended';
        return;
      }
      const h = Math.floor(diff / 3_600_000);
      const m = Math.floor((diff % 3_600_000) / 60_000);
      const s = Math.floor((diff % 60_000) / 1_000);
      el.textContent = 'Ends in: ' + pad(h) + ':' + pad(m) + ':' + pad(s);
    }

    tick();
    setInterval(tick, 1000);
  })();

  /* ---- ROTATING PROMO MESSAGES ---- */
  (function initPromoRotate() {
    const el = document.getElementById('promoRotate');
    if (!el) return;

    const messages = [
      'Extra 15% off via App',
      'Earn £15 Credit with referrals',
      'Over 210k reviews & 4.4 rated',
      'Free next-day delivery on orders over £75',
    ];
    let idx = 0;

    setInterval(function () {
      el.style.opacity = '0';
      setTimeout(function () {
        idx = (idx + 1) % messages.length;
        el.textContent = messages[idx];
        el.style.opacity = '1';
      }, 300);
    }, 3500);

    el.style.transition = 'opacity 0.3s';
  })();

  /* ---- 2. DROPDOWN MENUS (desktop hover + keyboard) ---- */
  (function initDropdowns() {
    const items = document.querySelectorAll('.nav-item.has-dropdown');

    items.forEach(function (item) {
      const trigger = item.querySelector('.dropdown-trigger');
      if (!trigger) return;

      function open() {
        item.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
      }
      function close() {
        item.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
      }

      // Mouse
      item.addEventListener('mouseenter', open);
      item.addEventListener('mouseleave', close);

      // Click (touch & keyboard activation)
      trigger.addEventListener('click', function (e) {
        e.stopPropagation();
        if (item.classList.contains('open')) { close(); } else {
          // Close siblings
          items.forEach(function (other) {
            if (other !== item) {
              other.classList.remove('open');
              const t = other.querySelector('.dropdown-trigger');
              if (t) t.setAttribute('aria-expanded', 'false');
            }
          });
          open();
        }
      });

      // Keyboard: Escape closes
      item.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') { close(); trigger.focus(); }
      });
    });

    // Close all on outside click
    document.addEventListener('click', function () {
      items.forEach(function (item) {
        item.classList.remove('open');
        const t = item.querySelector('.dropdown-trigger');
        if (t) t.setAttribute('aria-expanded', 'false');
      });
    });
  })();

  /* ---- 3. MOBILE HAMBURGER MENU ---- */
  (function initMobileMenu() {
    const btn  = document.getElementById('hamburgerBtn');
    const menu = document.getElementById('mobileMenu');
    if (!btn || !menu) return;

    btn.addEventListener('click', function () {
      const isOpen = menu.classList.toggle('open');
      btn.classList.toggle('open', isOpen);
      btn.setAttribute('aria-expanded', String(isOpen));
      menu.setAttribute('aria-hidden', String(!isOpen));
    });

    // Close when a link is clicked
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('open');
        btn.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        menu.setAttribute('aria-hidden', 'true');
      });
    });
  })();

  /* ---- SEARCH TOGGLE ---- */
  (function initSearch() {
    const toggleBtn = document.getElementById('searchToggle');
    const box       = document.getElementById('searchBox');
    const input     = document.getElementById('searchInput');
    if (!toggleBtn || !box) return;

    toggleBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      const isOpen = box.classList.toggle('open');
      toggleBtn.setAttribute('aria-expanded', String(isOpen));
      box.setAttribute('aria-hidden', String(!isOpen));
      if (isOpen && input) { input.focus(); }
    });

    document.addEventListener('click', function (e) {
      if (!box.contains(e.target) && e.target !== toggleBtn) {
        box.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
        box.setAttribute('aria-hidden', 'true');
      }
    });

    box.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        box.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
        box.setAttribute('aria-hidden', 'true');
        toggleBtn.focus();
      }
    });
  })();

  /* ---- 4. CAROUSEL ---- */
  (function initCarousel() {
    const track    = document.getElementById('carouselTrack');
    const prevBtn  = document.getElementById('carouselPrev');
    const nextBtn  = document.getElementById('carouselNext');
    if (!track || !prevBtn || !nextBtn) return;

    let currentIndex = 0;

    function getVisibleCount() {
      if (window.innerWidth >= 1024) return 4;
      if (window.innerWidth >= 640)  return 3;
      return 2;
    }

    function getCardWidth() {
      const card = track.querySelector('.activewear-card');
      if (!card) return 0;
      const style = window.getComputedStyle(track);
      const gap   = parseFloat(style.gap) || 16;
      return card.offsetWidth + gap;
    }

    function totalCards() {
      return track.querySelectorAll('.activewear-card').length;
    }

    function maxIndex() {
      return Math.max(0, totalCards() - getVisibleCount());
    }

    function goTo(idx) {
      currentIndex = Math.max(0, Math.min(idx, maxIndex()));
      track.style.transform = 'translateX(-' + (currentIndex * getCardWidth()) + 'px)';
      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex >= maxIndex();
    }

    prevBtn.addEventListener('click', function () { goTo(currentIndex - 1); });
    nextBtn.addEventListener('click', function () { goTo(currentIndex + 1); });

    // Reset on resize
    let resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () { goTo(0); }, 150);
    });

    goTo(0);
  })();

  /* ---- 5. SMOOTH SCROLL ---- */
  (function initSmoothScroll() {
    document.querySelectorAll('.smooth-scroll, a[href^="#"]').forEach(function (el) {
      el.addEventListener('click', function (e) {
        const href = el.getAttribute('href');
        if (!href || href === '#') return;
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        const headerHeight = document.querySelector('.site-header')?.offsetHeight || 70;
        const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 8;
        window.scrollTo({ top: top, behavior: 'smooth' });
      });
    });
  })();

  /* ---- FOOTER COLLAPSIBLE (mobile) ---- */
  (function initFooterToggles() {
    document.querySelectorAll('.footer-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const heading = btn.closest('.footer-col').querySelector('.footer-list');
        if (!heading) return;
        const isOpen = heading.classList.toggle('open');
        btn.classList.toggle('open', isOpen);
        btn.setAttribute('aria-expanded', String(isOpen));
        btn.textContent = isOpen ? '×' : '+';
      });
    });
  })();

  /* ---- QUICK BUY TOAST ---- */
  (function initQuickBuy() {
    const toast = document.getElementById('toast');
    if (!toast) return;

    let toastTimer;

    document.querySelectorAll('.btn-quick').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const name = btn.dataset.product || 'Item';

        // Update cart counter (demo)
        const counter = document.querySelector('.cart-count');
        if (counter) {
          const current = parseInt(counter.textContent, 10) || 0;
          counter.textContent = current + 1;
        }

        // Show toast
        toast.textContent = '✓ ' + name + ' added to basket';
        toast.classList.add('show');

        clearTimeout(toastTimer);
        toastTimer = setTimeout(function () {
          toast.classList.remove('show');
        }, 2800);
      });
    });
  })();

  /* ---- STICKY HEADER SHADOW ---- */
  (function initHeaderShadow() {
    const header = document.querySelector('.site-header');
    if (!header) return;
    window.addEventListener('scroll', function () {
      header.style.boxShadow = window.scrollY > 10
        ? '0 2px 12px rgba(0,0,0,0.1)'
        : '';
    }, { passive: true });
  })();

})();
