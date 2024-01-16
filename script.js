// Automatic image slider
let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1) % 3; // 3 is the number of slides
    updateSlider();
}

function updateSlider() {
    const slider = document.querySelector('.image-slider');
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Function to pause the slider on each image
function pauseSlider() {
    setTimeout(nextSlide, 4000); // 4000 milliseconds (4 seconds) pause
}

// Change slide every 4 seconds (adjust the interval as needed)
setInterval(pauseSlider, 4000);

// Initial update
updateSlider();
