// Инициализация Swiper для галереи
const swiper = new Swiper('.mySwiper', {
    // Настройки Swiper
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // Когда ширина экрана меньше 768px
        768: {
            slidesPerView: 2,
        },
        // Когда ширина экрана меньше 480px
        480: {
            slidesPerView: 1,
        }
    }
});

// Инициализация ScrollReveal для анимации
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
});

// Добавляем анимацию для каждой секции
ScrollReveal().reveal('.header-title, .header-subtitle', { delay: 500, origin: 'top' });
ScrollReveal().reveal('.about-photo-wrapper', { delay: 600, origin: 'left' });
ScrollReveal().reveal('.about-text', { delay: 600, origin: 'right' });
ScrollReveal().reveal('.section-title', { delay: 500, origin: 'top' });
ScrollReveal().reveal('.photo-gallery, .portfolio-section, .contacts', { delay: 200, origin: 'bottom', interval: 200 });
