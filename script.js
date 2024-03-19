function toggleMenu() {
    var menuItems = document.getElementById("menuItems");
    menuItems.classList.toggle("active");
}

// Function to hide the menu when tapping outside of it
document.addEventListener('click', function(event) {
    var menuItems = document.getElementById("menuItems");
    var menuToggle = document.querySelector('.menu-toggle');
    if (menuItems.classList.contains('active') && !menuToggle.contains(event.target)) {
        menuItems.classList.remove('active');
    }
});

// Function to hide the menu when scrolling
window.addEventListener('scroll', function() {
    var menuItems = document.getElementById("menuItems");
    if (menuItems.classList.contains('active')) {
        menuItems.classList.remove('active');
    }
});