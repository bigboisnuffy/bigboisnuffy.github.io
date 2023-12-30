window.addEventListener('scroll', function() {
    const element = document.querySelector('.my-element');
    const scrollPosition = window.scrollY;
    element.style.transform = `translateY(${scrollPosition * 0.5}px)`; // Smooth scroll effect
  });