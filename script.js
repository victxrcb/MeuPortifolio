// Função para trocar entre as páginas
function showPage(pageName) {
    // Esconde todas as páginas
    document.getElementById('home-page').style.display = 'none';
    document.getElementById('skills-page').style.display = 'none';
    document.getElementById('education-page').style.display = 'none';
    document.getElementById('experience-page').style.display = 'none';
    document.getElementById('contact-page').style.display = 'none';
    
    // Mostra a página selecionada
    document.getElementById(pageName + '-page').style.display = 'block';
    
    // Atualiza a classe active no menu
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
    });
    document.getElementById('nav-' + pageName).classList.add('active');
}

// EFEITO DE DIGITAÇÃO - VERSÃO SIMPLES
document.addEventListener('DOMContentLoaded', function() {
    const typingSpan = document.querySelector('.typing-text span');
    
    if (typingSpan) {
        const words = ['Desenvolvedor web', 'Estudante de programação', 'Web Designer'];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        function typeEffect() {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                // Apagando
                typingSpan.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                // Digitando
                typingSpan.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }
            
            // Se terminou de digitar
            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                setTimeout(typeEffect, 2000); // Espera 2 segundos
                return;
            }
            
            // Se terminou de apagar
            if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(typeEffect, 500); // Pequena pausa
                return;
            }
            
            // Velocidade da digitação
            const speed = isDeleting ? 100 : 200;
            setTimeout(typeEffect, speed);
        }
        
        // Inicia o efeito
        typeEffect();
    }
});