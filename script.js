const bar = document.querySelector('#mobile');
const navbar = document.querySelector('#navbar');
const body = document.querySelector('body');

bar.addEventListener('click', e => {
    navbar.classList.toggle('active');
    e.stopPropagation(); // Prevent the click event from propagating to the body
});

body.addEventListener('click', e => {
    if (!navbar.contains(e.target)) { // Check if the clicked element is not part of the navbar
        navbar.classList.remove('active');
    }
});
