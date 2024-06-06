document.addEventListener("DOMContentLoaded", function() {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.filter = 'brightness(50%)';
        });

        item.addEventListener('mouseleave', () => {
            item.style.filter = 'brightness(100%)';
        });
    });
});
