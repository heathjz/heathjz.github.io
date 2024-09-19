document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    // Toggle menu when clicking the hamburger icon
    hamburgerMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!hamburgerMenu.contains(event.target) && !navLinks.contains(event.target)) {
            navLinks.classList.remove('active');
        }
    });
});
