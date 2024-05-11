const bar = document.querySelector('#mobile');
const navbar = document.querySelector('#navbar');

const closeBtn = document.querySelector('#close-ham');
bar.addEventListener('click', e => {
    navbar.classList.toggle('active');
    e.stopPropagation(); // Prevent the click event from propagating to the body
});

closeBtn.addEventListener('click', e => {
    if (closeBtn.contains(e.target)) {
        navbar.classList.remove('active');
    }
});
