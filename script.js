// 1. === TELA DE CARREGAMENTO MINIMALISTA ===
// Espera a animação de desenho do logo (cerca de 3.5 segundos) e remove a tela
window.addEventListener('load', function() {
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader && !document.body.classList.contains('loaded')) {
            document.body.classList.add('loaded'); 
        }
    }, 3800); // Tempo sincronizado perfeitamente com o desenho do SVG
});

// Fallback de segurança: libera o site em 6s caso algo trave
setTimeout(() => {
    const preloader = document.getElementById('preloader');
    if (preloader && !document.body.classList.contains('loaded')) {
        document.body.classList.add('loaded'); 
    }
}, 6000);


// 2. === INICIALIZAR EFEITOS DE ROLAGEM AOS ===
AOS.init({
    duration: 1000, 
    once: true,     
    offset: 100     
});


// 3. === EFEITO GLOW DINÂMICO NOS CARTÕES (LED tracking) ===
const glowElements = document.querySelectorAll('.glow-effect');

glowElements.forEach(element => {
    element.addEventListener('mousemove', e => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        element.style.setProperty('--mouse-x', `${x}px`);
        element.style.setProperty('--mouse-y', `${y}px`);
    });
});


// 4. === MENU HAMBURGUER (MOBILE) ===
const menuHamburguer = document.getElementById('menu-hamburguer');
const menu = document.getElementById('menu');
const linksMenu = document.querySelectorAll('.menu ul li a');

if(menuHamburguer && menu) {
    menuHamburguer.addEventListener('click', () => {
        menu.classList.toggle('ativo');
    });

    linksMenu.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('ativo');
        });
    });
}
// 5. === EFEITO GLOW GLOBAL NO MOUSE (CURSOR NEON) ===
// Cria a luz dinamicamente sem precisar mexer no HTML
const cursorGlow = document.createElement('div');
cursorGlow.classList.add('cursor-glow');
document.body.appendChild(cursorGlow);

// Rastreia o movimento do mouse
// Rastreia o movimento do mouse
document.addEventListener('mousemove', (e) => {
    requestAnimationFrame(() => {
        // Agora subtraímos 150 (que é exatamente a metade dos novos 300px)
        cursorGlow.style.transform = `translate(${e.clientX - 150}px, ${e.clientY - 150}px)`;
    });
    
    if (cursorGlow.style.opacity === '0' || cursorGlow.style.opacity === '') {
        cursorGlow.style.opacity = '1';
    }
});

// Esconde a luz quando o mouse sai da janela do site (ex: vai para a barra de abas do navegador)
document.addEventListener('mouseleave', () => {
    cursorGlow.style.opacity = '0';
});