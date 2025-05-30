// 슬라이더 좌우 이동
function scrollSlider(direction) {
    const slider = document.getElementById('slider');
    const scrollAmount = 250;
    slider.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

// 자동 슬라이드
let autoSlideInterval = setInterval(() => {
    const slider = document.getElementById('slider');
    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

    if (Math.ceil(slider.scrollLeft) >= maxScrollLeft) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
        scrollSlider(1);
    }
}, 3000);

// 마우스 올리면 멈춤 / 벗어나면 재시작
const sliderElement = document.getElementById('slider');
sliderElement.addEventListener("mouseenter", () => clearInterval(autoSlideInterval));
sliderElement.addEventListener("mouseleave", () => {
    autoSlideInterval = setInterval(() => {
        const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
        if (Math.ceil(slider.scrollLeft) >= maxScrollLeft) {
            slider.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            scrollSlider(1);
        }
    }, 3000);
});

// 외부 카드 목록 불러오기 (sindong.html)
window.addEventListener('DOMContentLoaded', () => {
    fetch('sindong.html')
        .then(res => res.text())
        .then(html => {
            document.getElementById('slider').innerHTML = html;
        })
        .catch(err => console.error('카드 불러오기 실패:', err));
});

