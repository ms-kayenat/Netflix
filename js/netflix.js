document.addEventListener('DOMContentLoaded', () => {
    const faqAccordions = document.querySelectorAll('.faq-accordion');

    faqAccordions.forEach(accordion => {
        const icon = accordion.querySelector('.faq-icon');
        const body = accordion.querySelector('.faq-body');

        accordion.addEventListener('click', () => {
            // Close all other open accordion sections
            faqAccordions.forEach(item => {
                if (item !== accordion) {
                    item.querySelector('.faq-icon').classList.remove('active');
                    item.querySelector('.faq-body').classList.remove('active');
                }
            });

            // Toggle the clicked accordion section
            icon.classList.toggle('active');
            body.classList.toggle('active');
        });
    });
});
