// Enhanced Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const headerOffset = 50; // Adjust for sticky/fixed headers
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});
// Smooth scrolling to contact section when "Contact Us" button is clicked
document.getElementById('contact-btn').addEventListener('click', function () {

    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});
function toggleLoginForm() {
    const loginModal = document.getElementById('login-modal');
    const overlay = document.getElementById('overlay');
    loginModal.classList.toggle('active');
    overlay.classList.toggle('active');
}

function toggleAccountForm() {
    const accountModal = document.getElementById('account-modal');
    const overlay = document.getElementById('overlay');
    accountModal.classList.toggle('active');
    overlay.classList.toggle('active');
}

function togglePasswordForm() {
    const passwordModal = document.getElementById('password-modal');
    const overlay = document.getElementById('overlay');
    passwordModal.classList.toggle('active');
    overlay.classList.toggle('active');
}

function hideAllModals() {
    const loginModal = document.getElementById('login-modal');
    const accountModal = document.getElementById('account-modal');
    const passwordModal = document.getElementById('password-modal');
    const overlay = document.getElementById('overlay');

    loginModal.classList.remove('active');
    accountModal.classList.remove('active');
    passwordModal.classList.remove('active');
    overlay.classList.remove('active');
}

// Function to show the specified modal and overlay
function showModal(modalId) {
    const overlay = document.getElementById("overlay");
    const modal = document.getElementById(modalId);

    overlay.style.display = "block";
    modal.style.display = "block";

    overlay.setAttribute("aria-hidden", "false");
    modal.setAttribute("aria-hidden", "false");
}

// Function to hide all modals and overlay
function hideAllModals() {
    const overlay = document.getElementById("overlay");
    const modals = document.querySelectorAll(".modal");

    overlay.style.display = "none";
    modals.forEach(modal => modal.style.display = "none");

    overlay.setAttribute("aria-hidden", "true");
    modals.forEach(modal => modal.setAttribute("aria-hidden", "true"));
}


const slides = document.querySelectorAll('.slider .slide');
let currentSlide = 0;

// Function to show a specific slide
function showSlide(index) {

    slides.forEach((slide) => slide.classList.remove('active'));

    currentSlide = (index + slides.length) % slides.length;

    slides[currentSlide].classList.add('active');
}

function autoSlide() {
    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 3000);
}

document.querySelector('.prev').addEventListener('click', () => showSlide(currentSlide - 1));
document.querySelector('.next').addEventListener('click', () => showSlide(currentSlide + 1));

showSlide(currentSlide);
autoSlide();
