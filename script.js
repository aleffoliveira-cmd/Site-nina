// Aguarda o documento HTML ser completamente carregado
document.addEventListener("DOMContentLoaded", () => {

    // --- 1. LÓGICA DO MENU HAMBÚRGUER ---
    
    const hamburgerButton = document.querySelector(".hamburger-menu");
    const navList = document.querySelector(".nav-list");

    hamburgerButton.addEventListener("click", () => {
        // Alterna a classe 'active' no menu
        navList.classList.toggle("active");

        // Troca o ícone de 'barras' para 'X' e vice-versa
        const icon = hamburgerButton.querySelector("i");
        if (navList.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");
            hamburgerButton.setAttribute("aria-label", "Fechar menu");
        } else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
            hamburgerButton.setAttribute("aria-label", "Abrir menu");
        }
    });

    
    // --- 2. LÓGICA DE ROLAGEM SUAVE (SMOOTH SCROLL) ---
    
    // Seleciona todos os links que apontam para âncoras (#)
    const menuLinks = document.querySelectorAll('.nav-list a[href^="#"], .logo[href^="#"], .cta-button[href^@="#"]');

    menuLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            // Calcula a posição da seção, descontando a altura do header fixo
            const headerOffset = 68; // Altura do seu header
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });

            // (Bônus) Fecha o menu mobile após clicar em um link
            if (navList.classList.contains("active")) {
                navList.classList.remove("active");
                const icon = hamburgerButton.querySelector("i");
                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");
                hamburgerButton.setAttribute("aria-label", "Abrir menu");
            }
        });
    });

});