// 1 - Variaveis
// let: Permite declarar variáveis que podem ser reatribuídas (mudar de valor).
// const: Declara constantes, ou seja, o valor não pode ser reatribuído (não pode mudar).
let x = 10;
//x = 20; // Ok
const y = 30;
//y = 40; // Erro: não pode reatribuir
//------------------------------------------------------------------
// 2 - Math
console.log(Math.max(1,2,3)); //Imprime o maior
console.log(Math.floor(5.13)); //Arredonda o numero para baixo
console.log(Math.ceil(5.13)); //Arredonda o numero para cima
//------------------------------------------------------------------
// 3 - console
console.log("msg");
console.error("erro");
console.warn("aviso");
//------------------------------------------------------------------
// 4 - Estrutura de controle - IF > ELSE > ELSE IF
//IF = executa se o bloco for verdadeiro
const m = 10
if (m > 5){
  console.log("É maior");
}
const name = "João"
if (name === "João"){
  console.log("É igual João");
}
// ELSE = executa se o bloco o if nao for true
const loggedIn = false
if (loggedIn) {
  console.log("Logado !!!");
} else {
  console.log("Nao está logado !!");
}

const q = 10
const w = 15
if (q > 5 && w > 20) {
  console.log("Sao maiorores");
} else {
  console.log("Nao sao maiores");
}
//ELSE IF = executa o else if, caso o if nao seja true, possibilitando varias validacoes
if (1 > 2) {
  console.log("teste");
} else if (2 > 3) {
  console.log("teste 2");
} else if(3 > 2) {
  console.log("Agora sim");
}

const userName = "Matheus"
const userAge = 22

if(userName === "Jose") {
  console.log("Bem vindo Jose");
} else if(userName === "Matheus" && userAge === 22){
  console.log(`Olá ${userName} voce tem ${userAge} anos`);
} else {
  console.log("nenhuma condicao aceita");
  
}
//------------------------------------------------------------------
// 5 - Estrutura de repeticao - FOR > WHILE > SWITCH
//While
let p = 0
while( p < 5 ) {
  console.log(`repetindo ${p}`);
  p = p + 1
}
//Do While
let o = 10
do {
  console.log(`valor de o: ${o}`);
  o--
} while (o > 1)
//FOR
for(let t = 0; t < 10; t++){
  console.log("repetindo algo...")
}

let r = 10
for (r; r > 0; r--) {
  console.log(`diminuindo ${r}`);
}
// Forcando a saida doe um loop
for (let g = 20; g > 10; g--){
  console.log(`o valor de g é: ${g}`);
  if (g === 12 ){
    console.log("O g é === a 12");
    break
  }
}

//SWITCH
const job = "Advogado"

switch(job){
  case "Programador":
      console.log("Voce é programador");
      break
  case "Advogado":
    console.log("Voce é Advogado");
  case "Engenheiro":
    console.log("Voce é Engenheiro");
    break
  default:
    console.log("Profissao inválida");
    
    
    
}