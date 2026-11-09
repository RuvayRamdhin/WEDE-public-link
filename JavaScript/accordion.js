document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.headerforEach = accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const currentItem = header.parentElement;
            
            // Optional: Toggle active class on the clicked accordion item
            currentItem.classList.toggle('active');
        });
    });
});