// 1 - Tipos
console.log(typeof(2))
console.log(typeof("Batata"))
console.log(typeof(true))
//------------------------------------------------------------------
// 2 - Operadores aritmeticas
console.log(10 + 1);
console.log(10 - 1);
console.log(10 / 2);
console.log(10 * 2);
//------------------------------------------------------------------
// 3 - Concatenacao
console.log("Oi," + "tudo" + " " + "bem ?");
//------------------------------------------------------------------
// 4 - Template Strings
console.log(`A soma de 2 + 2 é: ${2 + 2}`);
//------------------------------------------------------------------
// 5 - Comparacoes
console.log(1 < 2); //True
console.log(1 > 1); //False
console.log(1 >= 1); //True
console.log(3 > 2); //True
console.log(3 == 3); //True
console.log(3 == 2); //False
console.log(3 != 2); //True
//------------------------------------------------------------------
// 6 - Identico
console.log(9 == "9"); //True - Compara apenas valor
console.log(9 === "9"); //False - Compara valor e tipo de dado
console.log(9 != "9"); //False
console.log(9 !== "9"); //True
//------------------------------------------------------------------
// 7 - Operadores Lógicos
// && - AND - True apenas se as duas conducoes forem true
// || - OR - True se uma das condicoes forem true
// ! - NOT - Inverte o resultado da comparacao
console.log(true && true); //True
console.log(true && false); //False
console.log(2 > 1 && 3 > 2); //True
console.log(2 > 1 && 3 < 2); //False
console.log(2 > 1 || 3 < 2); //True
console.log(2 < 1 || 3 < 2); //False
console.log(!true); //False
console.log(!false); //True
console.log(!2 > 1); //False
//------------------------------------------------------------------
// 8 - Empty Values
// undefined e null
console.log(typeof null, typeof undefined);
console.log(null === undefined);
console.log(null == undefined); //True, porque os dois nao possuem valor, porém nao sao identicos porque nao sao do mesmo tipo