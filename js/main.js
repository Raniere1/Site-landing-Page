//codigo que cria o efeito de neve no header

function createSnow() {
    const header = document.querySelector('header'); // Seleciona o header
    const span = document.createElement('span');
    
    // Configura o ícone (pode usar a imagem que geramos ou um caractere)
    span.classList.add('snow-flake');
    span.style.left = Math.random() * innerWidth + 'px'; // Corrigido: 'px' entre aspas
    
    // Variáveis aleatórias para tamanho e velocidade
    const size = Math.random() * 10 + 5;
    span.style.width = size + 'px';
    span.style.height = size + 'px';
    span.style.animationDuration = Math.random() * 3 + 2 + 's'; // Entre 2s e 5s
    span.style.opacity = Math.random();

    header.appendChild(span);

    // Remove o floco após a animação
    setTimeout(() => {
        span.remove();
    }, 5000);
}

setInterval(createSnow, 100);