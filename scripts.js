// scripts.js

document.addEventListener("DOMContentLoaded", () => {
    const ctaButton = document.querySelector(".cta-button");
    ctaButton.addEventListener("mouseover", () => {
        ctaButton.style.boxShadow = "0 4px 8px rgba(255, 204, 0, 0.5)";
    });

    ctaButton.addEventListener("mouseout", () => {
        ctaButton.style.boxShadow = "none";
    });
});






document.addEventListener("DOMContentLoaded", () => {
    const words = document.querySelectorAll('.animated-word');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.5 });
    
    words.forEach(word => observer.observe(word));
});


