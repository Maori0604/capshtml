let currentIndex = 0;
const itemWidth = 270; // 250px + 20px margin
const carousel = document.getElementById('carousel');
const totalItems = carousel.children.length;

function updateCarousel() {
    const offset = currentIndex * itemWidth;
    carousel.style.transform = `translateX(-${offset}px)`;
}

function nextSlide() {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
        updateCarousel();
    }
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
}
