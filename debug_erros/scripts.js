// 1 - strict
"use strict"
// opa = "teste"
const opa = "teste"

// const undefined = 10

// 2 - console.log
let a = 1
let b = 2

if(a == 1) {
  a = b + 2
}
console.log(a);

for (let i = 0; i < b; i++) {
  a += 2
  console.log(a);
}

if( a > 5) {
  a = 25
}
console.log(a);

// 3 - debugger
let c = 1
let d = 2

if( c == 1){
  c = d + 2
}
//debugger

for(let i = 0; i < d; i++) {
  c += 2
}

console.log("Executou o loop");
//debugger

if( c > 5){
  c = 25
}

// 4 - tratamento de dados

function checkNumber(n) {
  const result = Number(n)

  if(Number.isNaN(result)) {
    console.log("Valor incorreto");
    return
  }

  console.log("Valor correto");
  return result
}

checkNumber(5)
checkNumber("10")
checkNumber({})
checkNumber("Teste")

// 5 - try catch
try {
  const soma = x + y
} catch (error) {
  console.log(`Erro no programa ${error}`);
}