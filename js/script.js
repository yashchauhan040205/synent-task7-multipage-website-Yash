/**
 * FitZone Gym - Main Script
 * Handles: Sticky Navigation, Mobile Menu, Active Page Highlight, Scroll Reveal, Form Submission
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. Sticky Navigation Scroll Effect
  // ==========================================
  const header = document.querySelector('header');
  
  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  // Initial check on load
  handleScroll();


  // ==========================================
  // 2. Mobile Menu Toggle
  // ==========================================
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }


  // ==========================================
  // 3. Active Link Highlight
  // ==========================================
  const navItems = document.querySelectorAll('.nav-links a');
  let currentPath = window.location.pathname.split('/').pop();
  
  // Default to index.html if empty (e.g. root website path)
  if (currentPath === '') {
    currentPath = 'index.html';
  }

  navItems.forEach(item => {
    const itemHref = item.getAttribute('href');
    if (itemHref === currentPath || (currentPath.includes('index') && itemHref === 'index.html')) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });


  // ==========================================
  // 4. Scroll Reveal Animations (Intersection Observer)
  // ==========================================
  const revealElements = document.querySelectorAll('.reveal');
  
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Once animated, stop tracking it
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(element => {
      revealObserver.observe(element);
    });
  } else {
    // Fallback if observer not supported
    revealElements.forEach(element => element.classList.add('active'));
  }


  // ==========================================
  // 5. Contact Form Submission Validation
  // ==========================================
  const contactForm = document.getElementById('fitzone-contact-form');
  const formFeedback = document.getElementById('form-feedback');

  if (contactForm && formFeedback) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Retrieve fields
      const fullName = document.getElementById('fullname').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const message = document.getElementById('message').value.trim();

      // Simple validation checks
      if (!fullName || !email || !phone || !message) {
        showFeedback('Please fill out all fields.', 'error');
        return;
      }

      if (!validateEmail(email)) {
        showFeedback('Please enter a valid email address.', 'error');
        return;
      }

      if (!validatePhone(phone)) {
        showFeedback('Please enter a valid phone number (at least 7 digits).', 'error');
        return;
      }

      // Success Mock Action
      showFeedback('Thank you, ' + fullName + '! Your message has been sent successfully. We will get back to you soon!', 'success');
      contactForm.reset();
    });
  }

  // Email Validation Utility
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  // Phone Validation Utility (Very simple length check)
  function validatePhone(phone) {
    const cleanPhone = phone.replace(/\D/g, '');
    return cleanPhone.length >= 7;
  }

  // Show Feedback Message Utility
  function showFeedback(message, type) {
    formFeedback.textContent = message;
    formFeedback.className = 'form-feedback ' + type;
    
    // Auto scroll to feedback
    formFeedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

});
