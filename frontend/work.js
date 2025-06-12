document.addEventListener('DOMContentLoaded', function () {
    // Initialize ScrollReveal
    const sr = ScrollReveal({
        reset: false,
        distance: '40px',
        duration: 800,
        delay: 100,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        mobile: true
    });

    // Hero section
    sr.reveal('.work-hero h1', {
        origin: 'top',
        distance: '60px'
    });
    sr.reveal('.work-hero p', {
        origin: 'bottom',
        delay: 200
    });
    sr.reveal('.work-hero .btn', {
        origin: 'bottom',
        delay: 400
    });

    // Program sections
    const programSections = ['#education', '#medical', '#environment', '#livelihood'];

    programSections.forEach((section, index) => {
        // Text content
        sr.reveal(`${section} h2`, {
            origin: 'top',
            distance: '30px',
            delay: 100 + (index * 50)
        });

        // Left column
        sr.reveal(`${section} .col-lg-6:not(.order-lg-2)`, {
            origin: 'left',
            distance: '50px',
            delay: 200 + (index * 50)
        });

        // Right column (or ordered column)
        sr.reveal(`${section} .col-lg-6.order-lg-2, ${section} .col-lg-6:not(:first-child):not(.order-lg-1)`, {
            origin: 'right',
            distance: '50px',
            delay: 300 + (index * 50)
        });
    });

    document.addEventListener('DOMContentLoaded', function () {
        document.body.classList.add('loading');

        // Show loading spinner
        const spinner = document.getElementById('loading-spinner');
        if (spinner) spinner.style.display = 'block';

        // When everything is loaded
        window.addEventListener('load', function () {
            document.body.classList.remove('loading');
            if (spinner) spinner.style.display = 'none';

            // Initialize animations after everything is loaded
            initAnimations();
        });

        function initAnimations() {
            // Your ScrollReveal initialization code here
        }
    });

    // Carousels
    sr.reveal('.carousel', {
        origin: 'bottom',
        distance: '40px',
        delay: 200
    });

    // Footer
    sr.reveal('footer > .container > .row > div', {
        interval: 100,
        origin: 'bottom'
    });

    // Lazy loading for images
    const lazyImages = document.querySelectorAll('.lazy');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for older browsers
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.classList.add('loaded');
        });
    }
});