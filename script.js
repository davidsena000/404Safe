document.addEventListener('DOMContentLoaded', function() {
    // Elementos do menu
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');
    const body = document.body;
    
    // Criar overlay
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    document.body.appendChild(overlay);
    
    // Função para alternar o menu
    function toggleMenu() {
        hamburgerBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
        overlay.classList.toggle('active');
        body.classList.toggle('no-scroll');
        
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
    
    // Fechar menu ao clicar em um link ou no overlay
    navItems.forEach(item => {
        item.addEventListener('click', toggleMenu);
    });
    
    overlay.addEventListener('click', toggleMenu);
    
    // Fechar menu ao pressionar Esc
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            toggleMenu();
        }
    });
    
    // Fechar menu ao redimensionar para tamanho maior
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
            toggleMenu();
        }
    });
});