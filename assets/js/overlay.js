// Get both modal elements and the CTA button elements
const cityModal = document.getElementById('cityModal');
const infoModal = document.getElementById('infoModal');
const ctaButtons = document.querySelectorAll('.cta-button');

// Open the cityModal when any "Lej Stand" button is clicked
ctaButtons.forEach(btn => {
    btn.addEventListener('click', function(event) {
        // Prevent event propagation to ensure the window click event doesn't interfere
        event.stopPropagation();
        if (btn.getAttribute("data-action") === "switch-to-info-modal") {
            // Switch to the second modal when "Videre" is clicked
            cityModal.style.display = 'none';
            infoModal.style.display = 'flex';
        } else if (btn.getAttribute("data-action") === "open-city-modal") {
            cityModal.style.display = 'flex';
        }
    });
});

// Close the modals when clicking outside the modal content
window.addEventListener('click', function(event) {
    if (event.target === cityModal || event.target === infoModal) {
        cityModal.style.display = 'none';
        infoModal.style.display = 'none';
    }
});