// Get the modal and the CTA button elements
const modal = document.getElementById('cityModal');
const ctaButtons = document.querySelectorAll('.cta-button');

// Open the modal when any "Lej Stand" button is clicked
ctaButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        modal.style.display = 'flex';
    });
});

// Close the modal when clicking outside the modal content
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});