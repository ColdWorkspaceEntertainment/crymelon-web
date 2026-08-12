// Sekme Geçiş Mantığı
const navButtons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.section-content');

navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        navButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        sections.forEach(s => s.style.display = 'none');
        document.getElementById(btn.dataset.target).style.display = 'block';
    });
});

// SSS (Akordeon) Etkileşimi
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answerDiv = item.querySelector('.faq-answer');
    const arrow = item.querySelector('.arrow');

    questionBtn.addEventListener('click', () => {
        const isOpen = answerDiv.style.maxHeight;

        // Diğer açık olanları kapat (isteğe bağlı, temiz görünüm için)
        faqItems.forEach(other => {
            other.querySelector('.faq-answer').style.maxHeight = null;
            other.querySelector('.arrow').textContent = '+';
        });

        if (!isOpen) {
            answerDiv.style.maxHeight = answerDiv.scrollHeight + "px";
            arrow.textContent = '-';
        } else {
            answerDiv.style.maxHeight = null;
            arrow.textContent = '+';
        }
    });
});
