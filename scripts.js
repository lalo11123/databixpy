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

