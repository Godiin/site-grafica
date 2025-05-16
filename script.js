
document.addEventListener("DOMContentLoaded", () => {
// Mostrar botão de voltar ao topo
  window.onscroll = () => {
    const btn = document.getElementById("btnTopo").style.display = window.scrollY > 200 ? "block" : "none";
    if (btn) {
      btn.style.display = window.scrollY > 200 ? "block" : "none";
    }
  };
});
// Voltar suavemente ao topo
function voltarAoTopo() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Animação de imagens do portfólio
document.addEventListener("DOMContentLoaded", () => {
  const imagens = document.querySelectorAll(".imagem-portfolio");
  imagens.forEach((img, i) => {
    setTimeout(() => {
      img.classList.add("visivel");
    }, i * 200);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(entradas => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visible");
      }
    });
  });

  let posicaoAtual = 0;

function moverCarrossel(direcao) {
  const carrossel = document.getElementById("carrossel-imagens");
  const imagens = carrossel.querySelectorAll("img");
  const largura = imagens[0].clientWidth + 16; // incluindo gap
  const total = imagens.length;

  posicaoAtual += direcao;

  // Loop infinito (opcional)
  if (posicaoAtual < 0) posicaoAtual = total - 1;
  if (posicaoAtual >= total) posicaoAtual = 0;

  carrossel.style.transform = `translateX(-${posicaoAtual * largura}px)`;
}

  elementos.forEach(el => observer.observe(el));
});
