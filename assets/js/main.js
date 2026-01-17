const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
});

        const slider = document.querySelector('.card-books ul');
        const nextBtn = document.querySelector('.next-btn');
        const prevBtn = document.querySelector('.prev-btn');
        const items = document.querySelectorAll('.card-books ul li');
        const itemWidth = 240; // width + gap
        let currentIndex = 0;

        function updateSlider() {
            const maxIndex = items.length - 1;
            const offset = currentIndex * itemWidth;
            slider.style.transform = `translateX(-${offset}px)`;
        }

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % items.length; // quay vòng
            updateSlider();
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + items.length) % items.length; // quay vòng ngược
            updateSlider();
        });

        function toggleMenu() {
            const menu = document.getElementById("mobileMenu");
            menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
        }