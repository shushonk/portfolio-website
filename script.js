// Loading Screen
window.addEventListener('load', () => {
  const loading = document.getElementById('loading');
  setTimeout(() => {
    loading.classList.add('hidden');
  }, 1000);
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const targetPosition = targetElement.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Counter Animation
function animateCounter(el, target) {
  let count = 0;
  const increment = target / 100;
  const duration = 1500; // ms
  const stepTime = duration / 100;
  
  const timer = setInterval(() => {
    count += increment;
    if (count >= target) {
      el.innerText = target + "+";
      clearInterval(timer);
    } else {
      el.innerText = Math.floor(count) + "+";
    }
  }, stepTime);
}

// Intersection Observer for counter animation
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".stat h3");
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        counters.forEach(counter => {
          animateCounter(counter, parseInt(counter.dataset.target));
        });
        obs.disconnect();
      }
    });
  }, { threshold: 0.5 });

  observer.observe(document.querySelector(".stats"));
});

// Contact Form Handling
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
  }
});

function handleFormSubmit(e) {
  e.preventDefault();
  
  const form = e.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  const formMessage = form.querySelector('.form-message');
  
  // Show loading state
  submitBtn.classList.add('loading');
  
  // Simulate form submission (replace with actual form submission)
  setTimeout(() => {
    submitBtn.classList.remove('loading');
    
    // Show success message
    formMessage.textContent = 'Thank you! Your message has been sent successfully.';
    formMessage.classList.remove('error');
    formMessage.classList.add('success');
    
    // Reset form
    form.reset();
    
    // Hide message after 5 seconds
    setTimeout(() => {
      formMessage.classList.remove('success');
    }, 5000);
  }, 2000);
}

// Back to top button
const backToTopBtn = document.querySelector('.back-to-top');
if (backToTopBtn) {
  backToTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Show/hide back to top button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTopBtn.style.opacity = '1';
      backToTopBtn.style.visibility = 'visible';
    } else {
      backToTopBtn.style.opacity = '0';
      backToTopBtn.style.visibility = 'hidden';
    }
  });
}

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar ul');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.navbar ul li a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// Add animation to elements when they come into view
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
  const elementsToAnimate = document.querySelectorAll('.project-card, .about-text, .contact-info');
  elementsToAnimate.forEach(el => {
    observer.observe(el);
  });
});