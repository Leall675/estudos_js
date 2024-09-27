// 1 - Criando uma funcao simples
function minhaFuncao() {
  console.log("Testando minha função");
}
//executando a funcao criada
minhaFuncao()

// Funcao em uma variavel
const minhaFuncaoEmVariavel = function () {
  console.log("Funcao em variavel");
}
//executando a funcao em variavel
minhaFuncaoEmVariavel()

// Funcao que recebe parametro
function funcaoComParametro(a, b) {
  console.log(a + b);
}
//executando a funcao com parametro
funcaoComParametro(2,2)

//Return
const a = 10
const b = 20
const c = 30
const d = 40
function soma(n1, n2) {
  return n1 + n2
}
//executando a funcao de soma
//const resultado = soma(a, b)
console.log(soma(c, d));

// Escopo da função
let y = 10

function testandoEscopo() {
  let y = 20
  console.log(`Valor de y dentro da função é: ${y}`); // y = 20
}
testandoEscopo()
console.log(`Valor de y fora da função é: ${y}`); // y = 10

// Escopo aninhado
let m = 10
function escopoAninhado () {
  let m = 20

  if (true) {
    let m = 30

    if (true) {
      let m = 40
      console.log(m);
    }
    console.log(m);
  }
  console.log(m);
}
escopoAninhado()
console.log(m);

// Arrow function
const testArrow = () => {
  console.log("Executando minha arrow function");
}
testArrow()

// Arrow function com parametros
const parOuImpar = (n1) => {
  if(n1 % 2 === 0) {
    console.log(`O número ${n1} é par`);
    return
  }
  console.log("Impar");
  
}
parOuImpar(2)

// Mais sobre arrow function
const raizQuadrada = (x) => {
  return x * x
}
const raizQuadrada2 = (x) => x * x
const helloWorld = () => console.log("Olá mundo !!");

console.log(raizQuadrada(4))
console.log(raizQuadrada2(5))
helloWorld()

// Parametros opcionais
