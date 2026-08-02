document.addEventListener('DOMContentLoaded', () => {

    // FAQ Accordion Interatividade
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement;
            const isActive = accordionItem.classList.contains('active');

            // Fecha todos os outros itens
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
                const icon = item.querySelector('.accordion-header i');
                if (icon) icon.className = 'fa-solid fa-chevron-down';
            });

            // Alterna o item atual
            if (!isActive) {
                accordionItem.classList.add('active');
                const icon = header.querySelector('i');
                if (icon) icon.className = 'fa-solid fa-chevron-up';
            }
        });
    });

    // Rastreamento de cliques no Checkout para o Meta Pixel
    const checkoutButtons = document.querySelectorAll('.track-checkout');
    
    checkoutButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Dispara o evento InitiateCheckout no Meta Pixel
            if (typeof fbq !== 'undefined') {
                fbq('track', 'InitiateCheckout');
            }
        });
    });

    // Animação suave para scroll (se houver links internos)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});