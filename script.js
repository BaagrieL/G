document.addEventListener("DOMContentLoaded", function() {
    var backgroundMusic = document.getElementById("backgroundMusic");
    document.body.addEventListener("click", function() {
        backgroundMusic.play();
    });
});

const message = document.querySelector(".message");
const urso = document.querySelector("#urso");
let heartsShown = false; // Variável de controle para verificar se os corações já foram mostrados
let heartsContainer; // Variável para armazenar o contêiner dos corações
let remainingHearts = 0; // Variável para contar quantos corações ainda estão na tela

document.addEventListener("DOMContentLoaded", function() {
    heartsContainer = document.createElement("div");
    heartsContainer.className = "hearts-container";
    document.body.appendChild(heartsContainer);

    document.body.addEventListener("click", function(event) {
        message.style.display = "none";
        urso.style.display = "none";

        if (!heartsShown) {
            for (var i = 0; i < 100; i++) {
                setTimeout(() => {
                    createHeart(event.clientX, event.clientY);
                }, i * 100); // Atrasa a criação de cada coração para que eles apareçam um após o outro
            }
            heartsShown = true;
        }
    });

    function createHeart(x, y) {
        var heart = document.createElement("div");
        heart.className = "heart";
        // Gere coordenadas X e Y aleatórias dentro dos limites da tela
        var randomX = Math.random() * window.innerWidth;
        var randomY = Math.random() * window.innerHeight;
        heart.style.left = randomX + "px";
        heart.style.top = randomY + "px";
        heartsContainer.appendChild(heart);
        remainingHearts++; // Incrementa o contador de corações

        // Animação de subida do coração
        var heartInterval = setInterval(() => {
            randomY -= 5; // Move o coração para cima
            heart.style.top = randomY + "px";
            if (randomY <= 0) {
                clearInterval(heartInterval); // Para a animação quando o coração atinge o topo da tela
                heart.remove(); // Remove o coração do DOM
                remainingHearts--; // Decrementa o contador de corações
                if (remainingHearts === 0) { // Se não houver mais corações na tela
                    mostrarmensagem(); // Chama a função para mostrar o GIF
                }
            }
        }, 50); // Ajuste a velocidade da animação aqui (quanto menor o valor, mais rápido o movimento)
    }
function resetarPagina() {
    const mensagemAdicional = document.querySelector(".mensagem");
    mensagemAdicional.style.display = "none"; // Oculta a mensagem adicional
    window.location.href = window.location.href; // Redireciona para a própria URL, resetando a página
}

function mostrarMensagemInicial() {
    const mensagemInicial = document.querySelector(".message");
    const mensagemAdicional = document.querySelector(".mensagem");
    urso.style.display = "none"; // Oculta o GIF
    mensagemAdicional.style.display = "none"; // Oculta a mensagem adicional
    mensagemInicial.style.display = "block"; // Exibe a mensagem inicial
}

function mostrarmensagem() {
    urso.style.display = "block"; // Exibe o GIF
    const mensagemAdicional = document.querySelector(".mensagem");
    mensagemAdicional.style.display = "block"; // Exibe a mensagem adicional
    document.body.addEventListener("click", resetarPagina); // Define o evento de clique em qualquer parte da tela para resetar a página
    urso.addEventListener("click", mostrarMensagemInicial); // Define o evento de clique no GIF para mostrar a mensagem inicial
}

document.addEventListener("DOMContentLoaded", mostrarmensagem);



});

                          
