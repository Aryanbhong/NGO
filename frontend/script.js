document.addEventListener('DOMContentLoaded', function () {
    // Remove loading class
    document.body.classList.remove('loading');
    document.body.classList.add('loaded');

    // Initialize ScrollReveal with default config
    const sr = ScrollReveal({
        reset: false,
        distance: '40px',
        duration: 800,
        delay: 100,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        mobile: true
    });

    // Common reveal for most elements
    sr.reveal('.sr-animate', {
        origin: 'bottom',
        interval: 100
    });

    // Custom reveals for specific sections
    sr.reveal('.hero-section h1', {
        origin: 'top',
        delay: 300,
        distance: '60px'
    });

    sr.reveal('.hero-section p', {
        origin: 'bottom',
        delay: 400
    });

    sr.reveal('.hero-section .btn', {
        origin: 'bottom',
        delay: 500,
        interval: 200
    });

    // Counter boxes
    sr.reveal('.counter-box', {
        interval: 200,
        origin: 'bottom'
    });

    // Program cards
    sr.reveal('.program-card', {
        interval: 100,
        origin: 'bottom',
        distance: '30px'
    });

    // Testimonials
    sr.reveal('.testimonial-card', {
        interval: 150,
        origin: 'bottom'
    });

    // Footer columns
    sr.reveal('footer > .container > .row > div', {
        interval: 100,
        origin: 'bottom'
    });
});



// Counter Animation
document.addEventListener('DOMContentLoaded', () => {
    // Counter animation
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        }

        // Start counting when element is in viewport
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                updateCount();
                observer.unobserve(counter);
            }
        });

        observer.observe(counter);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Form validation for contact page
if (document.getElementById('contactForm')) {
    document.getElementById('contactForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill all fields');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}



// Donation amount selection
document.querySelectorAll('.donation-option').forEach(option => {
    option.addEventListener('click', function () {
        document.querySelectorAll('.donation-option').forEach(opt => {
            opt.classList.remove('active');
        });
        this.classList.add('active');
        if (this.dataset.amount === 'other') {
            document.querySelector('.custom-amount-container').style.display = 'block';
        } else {
            document.querySelector('.custom-amount-container').style.display = 'none';
        }
    });
});

// Payment method selection
document.querySelectorAll('.payment-method').forEach(method => {
    method.addEventListener('click', function () {

        document.querySelectorAll('.payment-method').forEach(m => {
            m.classList.remove('active');
        })
        this.classList.add('active');
        const radio = this.querySelector('input[type="radio"]');
        radio.checked = true;
    });
});


/*Gallery Filter Script*/

document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.category-filter .btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active', 'btn-primary'));
            filterButtons.forEach(btn => btn.classList.add('btn-outline-primary'));

            // Add active class to clicked button
            this.classList.remove('btn-outline-primary');
            this.classList.add('active', 'btn-primary');

            const filterValue = this.getAttribute('data-filter');

            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});