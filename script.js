function scrollSlider(direction, sliderId) {
    const slider = document.getElementById(sliderId);
    const scrollAmount = 250;

    const currentScroll = Math.ceil(slider.scrollLeft);
    const maxScroll = slider.scrollWidth - slider.clientWidth;

    // 오른쪽 끝이면 처음으로 이동
    if (direction > 0 && currentScroll >= maxScroll) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
        slider.scrollBy({
            left: direction * scrollAmount,
            behavior: 'smooth'
        });
    }
}

// 자동 슬라이드
let autoSlideIntervals = {};

function startAutoSlide(sliderId) {
    const slider = document.getElementById(sliderId);

    autoSlideIntervals[sliderId] = setInterval(() => {
        const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

        if (Math.ceil(slider.scrollLeft) >= maxScrollLeft) {
            slider.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            scrollSlider(1, sliderId);
        }
    }, 3000);
}

window.addEventListener('DOMContentLoaded', () => {
    const sliders = [
        { id: 'slider-sindong', file: 'sindong.html' },
        { id: 'slider-yeong', file: 'yeong.html' }
    ];

    sliders.forEach(({ id, file }) => {
        const slider = document.getElementById(id);

        if (slider) {
            slider.addEventListener("mouseenter", () => clearInterval(autoSlideIntervals[id]));
            slider.addEventListener("mouseleave", () => startAutoSlide(id));

            fetch(file)
                .then(res => res.text())
                .then(html => {
                    slider.innerHTML = html;
                    startAutoSlide(id);
                })
                .catch(err => console.error(`${file} 불러오기 실패:`, err));
        }
    });
});
