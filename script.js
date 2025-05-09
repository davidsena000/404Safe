document.addEventListener('DOMContentLoaded', function() {
    // Elementos do menu hamburguer
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');
    
    // Função para alternar o menu
    function toggleMenu() {
        hamburgerBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
        hamburgerBtn.setAttribute('aria-expanded', hamburgerBtn.classList.contains('active'));
        
        // Alternar ícone entre hamburguer e X
        const icon = hamburgerBtn.querySelector('i');
        if (hamburgerBtn.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-times');
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
        }
    }
    
    // Evento de clique no botão hamburguer
    hamburgerBtn.addEventListener('click', toggleMenu);
    
    // Fechar menu ao clicar em um link
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
    
    // Fechar menu ao pressionar Esc
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            toggleMenu();
        }
    });
});