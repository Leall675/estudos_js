// Arrays é uma lista onde cada valor é separados através de uma virgula

const lista = [1, 2, 3, 4, 5]
const lista2 = ["Matheus", 22]
console.log(typeof(lista));
console.log(lista);
console.log(lista2);

// 2 - Mais sobre arrays
const arr = ["a", "b", "c"]
console.log(arr[0]); // Acessa a primeira posicao da lista
console.log(arr[1]); // Segunda posicao da lista


// 3 - Propriedades
const numbers = [1, 2, 3]
console.log(numbers.length);
console.log(numbers["length"]);

const myName = "Matheus"

console.log(myName.length);

// 4 - Objetos
// Objetos é um bloco de {}

const person = {
  name: "Matheus",
  age: 22,
  job: "Desenvolvedor"
}
console.log(person);
console.log(person.name);
console.log(person.name.length);
console.log(person.age);
console.log(person.job);

// Criando e deletando propriedades
 const car = {
  engine: 2.0,
  brand: "VW",
  model: "Jetta",
  km: 0
 }

console.log(car);
car.doors = 4 
console.log(car);
delete car.km
console.log(car);

// Diferenca entre arrays e objetos
//   Arrays sao utilizados como listas de itens
//   Objetos sao utilizados para descrever um iten
//   Também é possivel ter um array de objetos

// 5 - Loop em Arrays
const users = ["Matheus", "Amanda", "Paulo", "Pablo"]

for(let i = 0; i < users.length; i++){
  console.log(`Listando o usuário: ${users[i]}`);
}

// 6 - push e pop - fim da lista
const array = ["a", "b", "c"]

array.push("d")
array.push("d", "e", "f", "g")
console.log(array);
array.pop()
console.log(array);

const itemRemovido = array.pop()
console.log(itemRemovido);
console.log(array);

// 7 - indexOf e lastIndexOf
const myElements = ["Morango", "Maçã", "Abacate", "Pera", "Abacate"]
console.log(myElements.indexOf("Maçã"));
console.log(myElements.lastIndexOf("Abacate"));

// 8 - Slice - Usado para extrar um array menor de um array maior
const testSlice = ["a", "b", "c", "d", "e", "f"]
const subTestSlice = testSlice.slice(2, 4 + 1)

console.log(testSlice);
console.log(subTestSlice);

// 9 - forEach - é um metodo da estrtura de repeticao for
const nums = [1, 2, 3, 4, 5]
nums.forEach((numero) => {
  console.log(`O numero é ${numero}`);
})

const posts = [
  {title: "Primeiro post", category: "PHP"},
  {title: "Segundo post", category: "Python"},
  {title: "Terceiro post", category: "Javascript"}
]

posts.forEach((post) => {
  console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`);
})

// 10 - includes - Verifica se o array possui o elemento
const brands = ["bmw", "fiat", "VW"]
console.log(brands.includes("bmw")); // True
console.log(brands.includes("fiat")); // False

if (brands.includes("bmw")) {
  console.log("Possui a marca que voce procura");
} else {
  console.log("marca nao encontrada");
}

// 11 - trim - remove tudo que nao é texto em uma string
const trimTest = "  Teste \n  "
console.log(trimTest);
console.log(trimTest.length);

console.log(trimTest.trim().length);

// 12 - split - divide uma string através de um separador em comun em um array
const testSplit = "Olá, meu nome é Matheus, tenho 22 anos" // O separador em comun nessa string é a virgula
console.log(testSplit.split(","));
const fraseSplit = testSplit.split(",")
console.log(fraseSplit);


// 13 - join - transforma um array em uma string, faz o oposto do metodo split
console.log(fraseSplit.join(" "));

const itensParaComprar = ["Mouse", "Teclado", "Monitor"]
console.log(`Precisamos comprar: ${itensParaComprar.join(", ")}.`);

// 14 - repeat - repete um texto n vezes
const testRepeat = "Teste"
console.log(testRepeat.repeat(3));

// 15 - rest operator/ rest parameters - caracterizado pelo simbolo " ... "
const somaInfinita = (...args) => {
  let total = 0

  for(let i = 0; i < args.length; i++){
    total += args[i]
  }
  return total
}
console.log(somaInfinita(1,2,3));
console.log(somaInfinita(10, 10, 10, 10, 10, 10, 10, 10, 10, 10));

// 16 - for...of - estrutura de repeticao semelhante ao for, porém mais simples
const somaInfinita2 = (...args) => {
  let total = 0
  for (num of args) {
    total += num
  }
  return total
}
console.log(somaInfinita2(1,2,3));
console.log(somaInfinita2(10, 10, 10, 10, 10, 10, 10, 10, 10, 20));

// 17 - destructuring em objetos - desestruturam algum dado
const usersDetails = {
  firstname: "Matheus",
  lastName: "Silva",
  job: "desenvolvedor"
}
const {firstname, lastName, job} = usersDetails
console.log(firstname, lastName, job);
// renomear variaveis:
const {firstname : primeiroNome, lastName : ultimoNome} = usersDetails
console.log(primeiroNome);

// 17 - destructuring em arrays - desestruturam algum dado
const myList = ["Carro", "Moto", "Onibus"]
const [veiculoA, VeiculoB, VeiculoC] = myList
console.log(veiculoA, VeiculoB, VeiculoC);

// JSON - é um dado em forma de texto, utilizado para comunicacao entre api e front end
const myJson = '{"name": "Matheus", "age": 31, "skills": ["PHP", "Javascript", "Python"]}'
console.log(myJson);
// Conversao para JSON e para Objeto
const myObject = JSON.parse(myJson)
console.log(myObject);
console.log(myObject.name);

const myNewJson = JSON.stringify(myObject)
console.log(myNewJson);
