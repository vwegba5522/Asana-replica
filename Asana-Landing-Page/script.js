// JavaScript code to toggle dropdown menu
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('open');
        dropdownMenu.classList.toggle('show');
    });

    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.menu-toggle') && !event.target.closest('.dropdown-menu')) {
            if (dropdownMenu.classList.contains('show')) {
                dropdownMenu.classList.remove('show');
                menuToggle.classList.remove('open');
            }
        }
    }
});
