/* This is a Global site behavior script for Sportsmans Warehouse */
document.addEventListener('DOMContentLoaded', () => {
    // Decode the path and clean it up in case of spaces (%20)
    const currentLocation = decodeURIComponent(window.location.pathname.split('/').pop()) || 'index.html';
    const navlinks = document.querySelectorAll('nav a');

    navlinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentLocation) {
            link.style.color = '#ffffff';
            link.style.fontWeight = 'bold';
            link.style.borderBottom = '2px solid #E52420';
        }
    });
    
    console.log("Sportsmans Warehouse global script loaded successfully.");
});

/* 
Search Functionality
MDN Web Docs (2025): DOM manipulation, Event handling, and Element methods. Available at: https://developer.mozilla.org/
W3Schools (2025): JavaScript HTML DOM Filter/Search Elements. Available at: https://www.w3schools.com/
*/

// Select the search input field
const searchInput = document.getElementById('site-search');

// Select all searchable cards or items on the page (supports product, service, or content cards)
const searchableCards = document.querySelectorAll('.destination-card, .product-card, .service-card, .content-card');

// Select the optional "no results" message container if it exists on the page
const noResultsMessage = document.getElementById('noResults');

if (searchInput) {
    // Run the filtering code whenever the user types into the search bar
    searchInput.addEventListener('input', () => {
        // Get the search text, convert it to lowercase, and trim whitespace
        const searchText = searchInput.value.toLowerCase().trim();

        // Track how many items match the user's query
        let matchCount = 0;

        // Loop through every searchable card
        searchableCards.forEach((card) => {
            // Get the text content of the card and convert to lowercase for case-insensitive matching
            const cardText = card.textContent.toLowerCase();

            // Check if the card text contains the search query
            if (cardText.includes(searchText)) {
                card.style.display = ''; // Show the card if it matches
                matchCount++;
            } else {
                card.style.display = 'none'; // Hide the card if it does not match
            }
        });

        // Handle the "no results found" message visibility if the element is present
        if (noResultsMessage) {
            if (matchCount === 0 && searchText !== '') {
                noResultsMessage.style.display = 'block';
            } else {
                noResultsMessage.style.display = 'none';
            }
        }
    });
}