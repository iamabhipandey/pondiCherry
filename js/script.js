document.addEventListener('DOMContentLoaded', () => {
    // Initial Load
    initApp();
});

async function initApp() {
    try {
        await Promise.all([
            loadComponent('header', 'header-container'),
            loadComponent('landing', 'main-content'),
            loadComponent('footer', 'footer-container')
        ]);

        // Hide Loader and Show App
        setTimeout(() => {
            const loader = document.getElementById('loader');
            const app = document.getElementById('app');

            if (loader) loader.style.opacity = '0';
            if (app) app.style.opacity = '1';

            setTimeout(() => {
                if (loader) loader.remove();
            }, 500);

            // Re-initialize any dynamic scripts (like tooltips or handlers)
            initDynamicBehaviors();
        }, 500);

    } catch (error) {
        console.error('Error initializing app:', error);
        document.getElementById('loader').innerHTML = '<p class="text-danger">Failed to load application components. Please ensure you are running this on a local server (e.g., Live Server).</p>';
    }
}

async function loadComponent(name, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    try {
        const response = await fetch(`components/${name}.html`);
        if (!response.ok) throw new Error(`Failed to load ${name}`);
        const html = await response.text();
        container.innerHTML = html;
    } catch (error) {
        console.error(error);
        container.innerHTML = `<div class="alert alert-danger">Error loading ${name}</div>`;
    }
}

function initDynamicBehaviors() {
    // Header Scroll Effect
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Initialize Tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

    // Search Toggle Logic
    const searchTrigger = document.getElementById('searchTrigger');
    const searchOverlay = document.getElementById('searchOverlay');
    const closeSearchBtn = document.getElementById('closeSearchBtn');
    const closeSearchBtnMobile = document.getElementById('closeSearchBtnMobile');
    const searchSubmitBtn = document.getElementById('searchSubmitBtn');
    const searchInput = document.getElementById('searchInput');

    function openSearch(e) {
        if (e) e.preventDefault();
        if (searchOverlay) {
            searchOverlay.classList.remove('d-none');
            searchOverlay.classList.add('d-flex');
            setTimeout(() => {
                if (searchInput) searchInput.focus();
            }, 100);
        }
    }

    function closeSearch() {
        if (searchOverlay) {
            searchOverlay.classList.remove('d-flex');
            searchOverlay.classList.add('d-none');
        }
    }

    if (searchTrigger) {
        searchTrigger.addEventListener('click', openSearch);
    }

    if (closeSearchBtn) {
        closeSearchBtn.addEventListener('click', closeSearch);
    }

    if (closeSearchBtnMobile) {
        closeSearchBtnMobile.addEventListener('click', closeSearch);
    }

    if (searchSubmitBtn) {
        searchSubmitBtn.addEventListener('click', () => {
            // Perform search logic here if needed
            console.log('Searching for:', searchInput.value);
            closeSearch();
        });
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeSearch();
    });

    // Manually Initialize Hero Carousel (Fix for Dynamic Loading)
    const heroCarouselEl = document.getElementById('heroCarousel');
    if (heroCarouselEl) {
        new bootstrap.Carousel(heroCarouselEl, {
            interval: 3000,
            ride: 'carousel'
        });
    }

    // Initialize Product Swiper (Soldes Slider)
    const productSwiperEl = document.querySelector('.productSwiper');
    if (productSwiperEl) {
        new Swiper('.productSwiper', {
            slidesPerView: 1, // Default mobile
            spaceBetween: 20,
            loop: true, // Infinite loop
            navigation: {
                nextEl: '#soldes-next',
                prevEl: '#soldes-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            },
        });
    }

    // Initialize Product Swiper 2 (Couvre-lits matelassés)
    const productSwiper2El = document.querySelector('.productSwiper2');
    if (productSwiper2El) {
        new Swiper('.productSwiper2', {
            slidesPerView: 1, // Default mobile
            spaceBetween: 20,
            loop: true, // Infinite loop
            navigation: {
                nextEl: '#couvre-next',
                prevEl: '#couvre-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            },
        });
    }

    // Initialize Product Swiper 3 (Vêtements)
    const productSwiper3El = document.querySelector('.productSwiper3');
    if (productSwiper3El) {
        new Swiper('.productSwiper3', {
            slidesPerView: 1, // Default mobile
            spaceBetween: 20,
            loop: true, // Infinite loop
            navigation: {
                nextEl: '#vetements-next',
                prevEl: '#vetements-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            },
        });
    }

    // Initialize Product Swiper 4 (Accessoires)
    const productSwiper4El = document.querySelector('.productSwiper4');
    if (productSwiper4El) {
        new Swiper('.productSwiper4', {
            slidesPerView: 1, // Default mobile
            spaceBetween: 20,
            loop: true, // Infinite loop
            navigation: {
                nextEl: '#accessoires-next',
                prevEl: '#accessoires-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            },
        });
    }

    // Initialize Category Swiper
    const categorySwiperEl = document.querySelector('.categorySwiper');
    if (categorySwiperEl) {
        new Swiper('.categorySwiper', {
            slidesPerView: 1, // Default mobile
            spaceBetween: 20,
            loop: true, // Infinite loop
            navigation: {
                nextEl: '#category-next',
                prevEl: '#category-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 30, // Show 4 items on desktop (or 3 if you prefer larger cards)
                },
            },
        });
    }
}
