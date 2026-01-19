// Check if user already accepted cookies
window.addEventListener('DOMContentLoaded', () => {
    // Get elements
    const cookieBanner = document.querySelector('.cookie-banner');
    const acceptButton = document.querySelector('.accept-cookies');
    const closeButton = document.querySelector('.close-button');
    
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    
    if (cookiesAccepted === 'true') {
        cookieBanner.style.display = 'none';
    }
    
    // Handle accept button click
    acceptButton.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieBanner.style.display = 'none';
    });
    
    // Handle close button click
    closeButton.addEventListener('click', () => {
        cookieBanner.style.display = 'none';
    });
});
