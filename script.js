let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1) % 3; // 3 is the number of slides //
    updateSlider();
}

function updateSlider() {
    const slider = document.querySelector('.image-slider');
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Cycle slide every 5 seconds
setInterval(nextSlide, 5000);

// Initial update
updateSlider();