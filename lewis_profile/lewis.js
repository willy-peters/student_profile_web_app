// profile.js
// Simple scroll-based fade-in and slide-in animations using Intersection Observer

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

// Observe all elements with fade-in or slide-in classes
document.querySelectorAll('.fade-in, .slide-in').forEach(el => {
    observer.observe(el);
});