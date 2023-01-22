// Ativar Links do Menu
const links = document.querySelectorAll(".header-menu a")

function ativarLink(event,index) {
    if (location.href.includes(event.href)) {
        event.classList.add("ativo");
    }
}

links.forEach(ativarLink)

// Ativar itens do orçamento

const parametros = new URLSearchParams(location.search)
function ativarProduto(parametro) {
    const elemento = document.querySelector(`#${parametro}`)
    if (elemento) { elemento.checked = true }
}

parametros.forEach(ativarProduto)

// Perguntas Frequentes

const perguntas = document.querySelectorAll(".perguntas button")

function clickPerguntas(element) {
    let pergunta = element.currentTarget
    let idElement = pergunta.getAttribute("aria-controls")
    let resposta = document.getElementById(idElement)
    const ativaCheck = resposta.classList.contains("ativa")
    pergunta.setAttribute("aria-expanded",ativa)
    resposta.classList.toggle("ativa")
}

function perguntasClick(event) {
    event.addEventListener("click",clickPerguntas)
}

perguntas.forEach(perguntasClick)

// GALERIA DE IMAGENS

const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens")
function trocarImagem(event) {
    if (matchMedia("(min-width:1000px)").matches) {
        galeriaContainer.prepend(event.currentTarget)
    }
}
function eventosGaleria(event) {
    event.addEventListener("click",trocarImagem)
}
galeria.forEach(eventosGaleria)

// ANIMAÇÃO

if (window.SimpleAnime) {
    new SimpleAnime();
}