document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const carousel = document.querySelector('.carousel');

    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('menu-open');
        if (nav.classList.contains('menu-open')) {
            carousel.style.marginTop = `${nav.offsetHeight}px`;
        } else {
            carousel.style.marginTop = '20px';
        }
    });

    const contactForm = document.getElementById('contact-form');
    const statusMessage = document.getElementById('status-message');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('service_toyxfff', 'template_y8nnc1k', this)
            .then(function() {
                statusMessage.textContent = 'El envío fue exitoso.';
                statusMessage.className = 'success';
                statusMessage.style.display = 'block'; // Mostrar el mensaje
                contactForm.reset();
            }, function(error) {
                console.error('Error:', error);
                    statusMessage.textContent = 'Falló el envío del correo. Por favor intenta de nuevo más tarde.';
                    statusMessage.className = 'error';
                    statusMessage.style.display = 'block'; // Mostrar el mensaje
            });
    });
    
});

let slideIndex = 0;
showSlides(slideIndex);
setInterval(nextSlide, 3000); // Cambia de imagen cada 3 segundos

function nextSlide() {
    showSlides(slideIndex += 1);
}

function prevSlide() {
    showSlides(slideIndex -= 1);
}

function showSlides(index) {
    const slides = document.getElementsByClassName('carousel-item');
    if (index >= slides.length) { slideIndex = 0; }
    if (index < 0) { slideIndex = slides.length - 1; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex].style.display = 'block';
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = 'none';
        }
    }
}