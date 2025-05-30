// app.js

document.addEventListener('DOMContentLoaded', () => {
    // --- Efecto de "aparición" suave al cargar la página ---
    const cvContainer = document.querySelector('.cv-container');
    cvContainer.style.opacity = 0;
    setTimeout(() => {
        cvContainer.style.opacity = 1;
        cvContainer.style.transition = 'opacity 0.8s ease-in-out';
    }, 100);

    // --- Animación de la foto de perfil al pasar el ratón ---
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        profileImg.addEventListener('mouseover', () => {
            profileImg.style.transform = 'scale(1.05)';
            profileImg.style.boxShadow = '0 0 10px rgba(52, 152, 219, 0.8)';
            profileImg.style.transition = 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out';
        });
        profileImg.addEventListener('mouseout', () => {
            profileImg.style.transform = 'scale(1)';
            profileImg.style.boxShadow = 'none';
            profileImg.style.transition = 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out';
        });
    }

    // --- Animación de las barras de habilidades al hacer scroll ---
    const skillBars = document.querySelectorAll('.skill-bar .skill-level');

    function animateSkillsOnScroll(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = '0%';
                entry.target.style.transition = 'width 0.8s ease-out 0.3s';
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 100);
                observer.unobserve(entry.target);
            }
        });
    }

    const skillsObserver = new IntersectionObserver(animateSkillsOnScroll, {
        threshold: 0.5
    });

    skillBars.forEach(skill => {
        skillsObserver.observe(skill.parentElement.parentElement); // Observa el .skill-item
    });

    // --- Animación de los iconos de contacto al pasar el ratón ---
    const contactIcons = document.querySelectorAll('.contact-item .contact-icon');

    contactIcons.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            icon.style.transform = 'scale(1.2)';
            icon.style.color = '#3498db';
            icon.style.transition = 'transform 0.3s ease-in-out, color 0.3s ease-in-out';
        });
        icon.addEventListener('mouseout', () => {
            icon.style.transform = 'scale(1)';
            icon.style.color = 'white';
            icon.style.transition = 'transform 0.3s ease-in-out, color 0.3s ease-in-out';
        });
    });

    // --- Pequeña animación en los logos de redes sociales ---
    const socialIcons = document.querySelectorAll('.social-networks nav a img');

    socialIcons.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            icon.style.transform = 'scale(1.1) translateY(-2px)';
            icon.style.transition = 'transform 0.3s ease-in-out';
        });

        icon.addEventListener('mouseout', () => {
            icon.style.transform = 'scale(1) translateY(0)';
            icon.style.transition = 'transform 0.3s ease-in-out';
        });
    });

});