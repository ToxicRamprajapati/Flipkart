// Select all slides and initialize the current slide index
const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;

// Show the initial slide
slides[currentSlide].classList.add('active');

// Function to show the next slide
function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length; // Wrap around
    slides[currentSlide].classList.add('active');
}

// Automatically change slides every 5 seconds
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);
