/**
 * presenter.js — Fluid Web-First Executive Presentation Engine
 * Features: Zero scale transforms, natural scrollytelling, IntersectionObserver scroll-spy,
 * keyboard page snapping, native fullscreen, and clean PDF printing.
 */

(function () {
  let pages = [];
  let currentPageIndex = 0;

  function initPlatform() {
    pages = Array.from(document.querySelectorAll('.deck-page, .narrative-stage, .slide'));
    if (!pages.length) return;

    // Ensure all pages are visible in natural vertical flow
    pages.forEach((page) => {
      page.style.display = 'flex';
      page.style.opacity = '1';
    });

    // Remove any transform scaling
    const scaler = document.getElementById('viewport-scaler');
    if (scaler) {
      scaler.style.transform = 'none';
    }

    setupScrollSpy();
    setupHashNavigation();
  }

  // Real-time Scroll-Spy via IntersectionObserver
  function setupScrollSpy() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = pages.indexOf(entry.target);
          if (index !== -1) {
            currentPageIndex = index;
            updateActiveNavigation(entry.target.id, index);
          }
        }
      });
    }, {
      root: null,
      threshold: 0.4
    });

    pages.forEach((page) => observer.observe(page));
  }

  function updateActiveNavigation(activeId, index) {
    // Update Top Navigation Links
    const topLinks = document.querySelectorAll('.chapter-nav-item');
    topLinks.forEach((link) => {
      const target = link.getAttribute('href') || '';
      if (target === `#${activeId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Update Floating Dock Items
    const dockItems = document.querySelectorAll('.dock-item');
    dockItems.forEach((item) => {
      const target = item.getAttribute('href') || '';
      if (target === `#${activeId}`) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Update HUD Indicator if present
    const indicator = document.getElementById('slide-indicator');
    if (indicator) {
      const totalStr = String(pages.length).padStart(2, '0');
      const curStr = String(index + 1).padStart(2, '0');
      indicator.innerText = `PAGE ${curStr} / ${totalStr}`;
    }

    const counter = document.getElementById('slide-progress-counter');
    if (counter) {
      const totalStr = String(pages.length).padStart(2, '0');
      const curStr = String(index + 1).padStart(2, '0');
      counter.innerText = `${curStr} / ${totalStr}`;
    }

    // Update URL hash quietly without jumping
    if (history.replaceState && activeId) {
      history.replaceState(null, '', `#${activeId}`);
    }
  }

  function setupHashNavigation() {
    const hash = window.location.hash;
    if (hash) {
      const targetEl = document.querySelector(hash);
      if (targetEl) {
        setTimeout(() => {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }

  function scrollToPage(index) {
    if (index < 0) index = 0;
    if (index >= pages.length) index = pages.length - 1;
    currentPageIndex = index;
    pages[currentPageIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function nextSlide() {
    if (currentPageIndex < pages.length - 1) {
      scrollToPage(currentPageIndex + 1);
    }
  }

  function prevSlide() {
    if (currentPageIndex > 0) {
      scrollToPage(currentPageIndex - 1);
    }
  }

  function showSlide(index) {
    scrollToPage(index - 1);
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => console.log(err));
    } else {
      document.exitFullscreen();
    }
  }

  function toggleNotes() {
    const modal = document.getElementById('notes-modal');
    if (modal) modal.classList.toggle('open');
  }

  // Keyboard Navigation
  window.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      nextSlide();
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      prevSlide();
    } else if (e.key === 'f' || e.key === 'F') {
      toggleFullscreen();
    } else if (e.key === 'Home') {
      e.preventDefault();
      scrollToPage(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      scrollToPage(pages.length - 1);
    }
  });

  window.addEventListener('DOMContentLoaded', initPlatform);

  // Global exports for inline onclick triggers
  window.nextSlide = nextSlide;
  window.prevSlide = prevSlide;
  window.showSlide = showSlide;
  window.scrollToPage = scrollToPage;
  window.scrollToSlide = scrollToPage;
  window.toggleFullscreen = toggleFullscreen;
  window.toggleNotes = toggleNotes;
})();

