function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('nav ul li a');
    const nav = document.querySelector('nav');

    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
        });
    });
});