// Eventos: click, tecla, movimento da tela e do mouse e etc.

// 1 - click
const btn = document.querySelector("#my-button")
btn.addEventListener("click", () => {
  console.log("Clicado");
})

// 2 - removendo eventos
const secondBtn = document.querySelector("#btn")
function imprimirMsg() {
  console.log("Testando");
}
secondBtn.addEventListener("click", imprimirMsg)

const thirdBtn = document.querySelector("#other-btn")
thirdBtn.addEventListener("click", () => {
  console.log("Evento removido");
  secondBtn.removeEventListener("click", imprimirMsg) // evento do secondBtn removido
})

// 3 - argumento especial, geralmente chamado de event ou e
const mytitle = document.querySelector("#my-title")
mytitle.addEventListener("click", (e) => {
  console.log(e);
  console.log(e.offsetX);
  console.log(e.pointerType);
  console.log(e.target);
})

// 4 - propagação
const containerBtn = document.querySelector("#btn-container")
const btnInsideContainer = document.querySelector("#div-btn")

containerBtn.addEventListener("click", () => {
  console.log("Evento 1");
})

btnInsideContainer.addEventListener("click", (e) => {
  e.stopPropagation()
  console.log("Evento 2");
})

// 5 - removendo evento padrao
const a = document.querySelector("a")

a.addEventListener("click", (e) => {
  e.preventDefault()
  console.log("Não alterou a página");
})

// 6 - evento de tecla
// keyup = ativa quando solta a tecla
// keydown = ativa quando a tecla é pressionada

document.addEventListener("keyup", (e) => {
  console.log(`Keyup: ${e.key}`);
})

document.addEventListener("keydown", (e) => {
  console.log(`Keydown: ${e.key}`);
})

// 7 - mais eventos do mouse
// mousedown = pressionou botao do mouse
// mouseup = soltou o botao do mouse
// dblclick = clicou duas vezes

const mouseEvents = document.querySelector("#mouse")

mouseEvents.addEventListener("mousedown", () => {
  console.log("pressionou o botao");
})

mouseEvents.addEventListener("mouseup", (e) => {
  console.log("soltou o botao");
})

mouseEvents.addEventListener("dblclick", (e) => {
  console.log("clicou duas vezes");
})

// 8 - movimento do mouse
// mousemove
addEventListener("mousemove", (e) => {
  // console.log(`Exio Y ${e.y}`);
  // console.log(`Eixo X ${e.x}`);
})

// 9 - eventos por scroll
// scroll
window.addEventListener("scroll", (e) => {
  if(window.scrollY > 200) {
    console.log("passamos de 200px");
  }
})

// 10 - foco - geralmente usado em input
// focos - usado quando acessar do input
// blur - usado quando sair do input
const myInputFocus = document.querySelector("#my-input-focus")
myInputFocus.addEventListener("focus", (e) => {
  console.log("Input acessado");
})

const myInputBlur = document.querySelector("#my-input-blur")
myInputBlur.addEventListener("blur", (e) => {
  console.log("Saindo do input");
})

// 11 - carregamento de página
