// 1 - filter - método em um array para filtrar dados

const arr = [1, 2, 3, 4, 5]
const highNumbers = arr.filter((n) => {
  if(n >= 3) {
    return n
  }
})

console.log(highNumbers);

const users = [
  {name: "Matheus", avaliable: true},
  {name: "Paulo", avaliable: true},
  {name: "Pablo", avaliable: false},
  {name: "Amanda", avaliable: false}
]

const filterUsers = users.filter((user) => {
  if(user.avaliable) {
    console.log(user.name);
  }
})

// 2 - map - método em um array, para percorrer elementos para modificar o array origem
const products = [
  {name: "Camisa", price: 10.99, category: "Roupas"},
  {name: "Chaleira elétrica", price: 150, category: "Eletro"},
  {name: "Fogão", price: 499, category: "Eletro"},
  {name: "Calça jeans", price: 10.99, category: "Roupas"}
]

const flagMap = products.map((product) => {
  if(product.category === "Roupas") {
    product.onSale = true
  }
})
console.log(products);

// 3 - template literals
const userName = "Matheus"
const age = 22
console.log(`O nome do usuário é ${userName} e ele tem ${age}`);

// 4 - destructuring - desestrutura dados complexos em varias variaveis
const frutas = ["Maça", "Mamão", "Banana"]

const [f1, f2, f3] = frutas
console.log(f1, f2, f3);

const productDetails = {
  name: "Mouse",
  price: 100,
  category: "Periférico",
  color: "Branco",
}
// Alterando nome da variavel - name: productName
const {name: productName, price, category, color} = productDetails

console.log(productName, price, category, color);
