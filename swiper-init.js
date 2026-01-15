// Initialize Swiper for examples sections
function initExampleSwipers() {
    const exampleSwipers = document.querySelectorAll('.example-swiper');
    
    exampleSwipers.forEach(swiperElement => {
        // Count slides to determine if loop should be enabled
        const slidesCount = swiperElement.querySelectorAll('.swiper-slide').length;
        const enableLoop = slidesCount >= 2; // Enable loop if 2 or more slides
        
        new Swiper(swiperElement, {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            loop: enableLoop,
            loopAdditionalSlides: enableLoop ? 2 : 0,
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            navigation: {
                nextEl: swiperElement.querySelector('.swiper-button-next'),
                prevEl: swiperElement.querySelector('.swiper-button-prev'),
            },
            pagination: {
                el: swiperElement.querySelector('.swiper-pagination'),
                clickable: true,
            },
        });
    });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initExampleSwipers);
} else {
    initExampleSwipers();
}
