const navButtons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.section-content');

navButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Efekt eklemek için küçük bir gecikme
        document.body.style.opacity = 0;
        
        setTimeout(() => {
            const targetId = button.getAttribute('data-target');
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetId) section.classList.add('active');
            });
            document.body.style.opacity = 1;
        }, 200);
    });
});

// Sayfa yüklendiğinde yumuşak geçiş
document.body.style.transition = "opacity 0.5s ease";
