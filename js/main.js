document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Sticky Header
  const header = document.querySelector('.header');
  
  const checkScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
      header.classList.remove('transparent');
    } else {
      header.classList.remove('scrolled');
      if (document.body.classList.contains('home-page')) {
        header.classList.add('transparent');
      }
    }
  };

  window.addEventListener('scroll', checkScroll);
  // Initial check
  checkScroll();

  // Scroll Animations (Intersection Observer)
  const fadeElements = document.querySelectorAll('.fade-in');
  
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  fadeElements.forEach(el => {
    observer.observe(el);
  });

  // Set active link based on current page
  const currentPath = window.location.pathname;
  const navItems = document.querySelectorAll('.nav-links a');
  
  navItems.forEach(link => {
    if (link.getAttribute('href') !== '#' && currentPath.includes(link.getAttribute('href'))) {
      link.classList.add('active');
    }
  });
});
