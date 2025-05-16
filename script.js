
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

// Simulador de orçamento
function mostrarPreco() {
  const valor = document.getElementById("servico").value;
  document.getElementById("preco").innerText = `Preço: R$${valor},00`;
}

// Confirmação de clique nos botões
function confirmarAcesso(msg) {
  alert(msg);
}