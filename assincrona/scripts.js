// // 1 - setTimeout - estabelece uma acao para ser executada em um certo tempo
// console.log("ainda nao executou");

// // setTimeout( function () {
// //   console.log("executou");
// // }, 1000)

// console.log("ainda nao executou 2");

// //2 - setInterval - estabelece uma acao para ser executada em um certo tempo, porém nao para de ser executada
// console.log("Ainda nao começou");

// // setInterval(function () {
// //   console.log("Intervalo assincrona");
// // }, 2000)

// console.log("Ainda nao começou");

// // 3 - Promises - promessa de um valor que pode chegar em um ponto futuro

// const promessa = Promise.resolve( 5 + 5)
// console.log("Algum código");
// promessa.then(value => {
//   console.log(`A soma é ${value}`); // 10
//   return value
// })
// // usando o mesmo valor da promisso em outro bloco then
// .then((value) => value -1)
// .then((value) => console.log(`O valor de value agora é ${value}`)) // 9
// console.log("Outro código");

// // 4 - falhando uma Promise
// Promise.resolve( 5 * "a")
// .then((n) => {
//   if(Number.isNaN(n)) {
//     throw Error("Valores inválidos")
//   }
// }).catch((err) => console.log(`Ocorreu um erro: ${err}`))

// // 5 - Rejeitando Promise
// function checkNumber(n) {
//   return new Promise((resolve, reject) => {
//     if( n > 10) {
//       resolve("O número é maior que 10")
//     } else {
//       reject(new Error("Número menor que 10"))
//     }
//   })
// }

// const a = checkNumber(20)
// const b = checkNumber(5)
// a.then((n) => console.log(n)).catch((err) => console.log(err.message))
// b.then((n) => console.log(n)).catch((err) => console.log(err.message))

// // 6 - resolvendo varias promise
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(function() {
//     resolve(10)
//   }, 1000)
// })

// const p2 = Promise.resolve(10 + 10)

// const p3 = new Promise((resolve, reject) => {
//   if( 30 > 10) {
//     resolve(30)
//   } else {
//     reject("Erro !!")
//   }
// })

// Promise.all([p1, p2, p3]).then((values) => console.log(values))

// 7 - async function
async function somarComDelay(a, b) {
  return a + b
}

somarComDelay(2,4).then((value) => console.log(`O valor da soma é ${value}`))

// 8 - async await

function resolveDelay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolveu a promise")
    }, 1000)
  })
}

async function chamadaAsync() {
  console.log("Chamando a promise, esperoando o resultado");
  const result = await resolveDelay()
  console.log(`O resultado chegou ${result}`);
}

chamadaAsync()