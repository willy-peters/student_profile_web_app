const sections = document.querySelectorAll(".fade");

function revealSections() {
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (position < windowHeight - 100) {
            section.classList.add("show");
        }
    });
}

// Reveal on scroll
window.addEventListener("scroll", revealSections);

// Reveal sections already visible on page load
window.addEventListener("load", revealSections);
