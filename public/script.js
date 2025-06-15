document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu functionality
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const menuOverlay = document.createElement('div');
  menuOverlay.className = 'menu-overlay';
  document.body.appendChild(menuOverlay);
  
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      menuOverlay.classList.toggle('active');
      
      // Toggle hamburger icon
      const icon = this.querySelector('i');
      if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
    
    // Close menu when clicking on overlay
    menuOverlay.addEventListener('click', function() {
      navMenu.classList.remove('active');
      this.classList.remove('active');
      hamburger.querySelector('i').classList.remove('fa-times');
      hamburger.querySelector('i').classList.add('fa-bars');
    });
    
    // Close menu when clicking on links (for mobile)
    document.querySelectorAll('.nav-menu a').forEach(link => {
      link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
          navMenu.classList.remove('active');
          menuOverlay.classList.remove('active');
          hamburger.querySelector('i').classList.remove('fa-times');
          hamburger.querySelector('i').classList.add('fa-bars');
        }
      });
    });
  }
  
  // Carousel functionality
  const container = document.querySelector('.carousel-container');
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.nav-dot');
  let currentIndex = 0;
  const totalSlides = slides.length;

  function goToSlide(index) {
    container.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
  }

  dots.forEach(dot => {
    dot.addEventListener('click', function() {
      const slideIndex = parseInt(this.getAttribute('data-index'));
      goToSlide(slideIndex);
    });
  });

  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    goToSlide(currentIndex);
  }, 5000);
});

// To gallery pages
// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".more-images-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const target = button.getAttribute("data-target");
      if (target) {
        window.location.href = target;
      } else {
        console.warn("No target found for button");
      }
    });
  });
});


// Fetch places from backend
fetch('/api/places')
  .then(res => res.json())
  .then(data => {
    console.log('Places:', data);
    // You can now dynamically insert these into HTML if needed
  });
