// 1 - métodos
const animal = {
  nome: "Bob",
  latir: function() {
    console.log("Au Au");
  }
}
console.log(animal.nome);
animal.latir()

// 2 - ainda sobre métodos
const pessoa = {
  nome: "Matheus",
  getNome: function() {
    return this.nome
  },

  setNome: function(novoNome) {
    return this.nome = novoNome
  }
}
console.log(pessoa.nome);
console.log(pessoa.getNome());
pessoa.setNome("Amanda")
console.log(pessoa.getNome());

// 3 - prototype - é uma especie de heranca, onde objetos pais herdam prorpiedades e metodos aos filhos
// fallback
const text = "asd"
console.log(Object.getPrototypeOf(text));
const bool = true
console.log(Object.getPrototypeOf(bool));

// 4 - classes básicas
const cachorro = {
  raca: null,
  patas: 4
}
const pastorAlemao = Object.create(cachorro)
pastorAlemao.raca = "Pastor Alemao"
console.log(pastorAlemao);
console.log(pastorAlemao.patas);
const bulldog = Object.create(cachorro)
bulldog.raca = "Bulldog"
console.log(bulldog);

// 5 - funcoes como classe
function Cachorro(nome, raca) {
  this.nome = nome
  this.raca = raca
}
const husky = new Cachorro("Ozzy", "Husky")
console.log(husky);

// 6 - classes es6
class CachorroClasse {
  constructor(nome, raca) {
    this.nome = nome
    this.raca = raca
  }
}
const jeff = new CachorroClasse("Jeff", "Viralata")
console.log(jeff);

// 7 - mais sobre classes
class Caminhao {
  constructor(eixos, cor) {
    this.eixos = eixos
    this.cor = cor
  }
  descreverCaminhao() {
    console.log(`Este caminhao tem ${this.eixos} e é da cor ${this.cor}`);
  }
}
const scania = new Caminhao(6, "azul")
console.log(scania);
scania.descreverCaminhao()

// 8 - symbol
class Aviao {
  constructor(marca, turbinas) {
    this.marca = marca
    this.turbinas = turbinas
  }
}

const asas = Symbol()
Aviao.prototype[asas] = 2
const boeing = new Aviao("Boeing", 10)
console.log(boeing);

// 9 - Getters e Setters
class Post {
  constructor(titulo, descricao, tags){
    this.titulo = titulo
    this.descricao = descricao
    this.tags = tags
  }
  get exibirTitulo() {
    return `Voce está lendo ${this.titulo}`
  }
  set adicionarTags(tags) {
    const tagsArrays = tags.split(", ")
    this.tags = tagsArrays
  }
}

const myPost = new Post("Algum post", "É um post sobre estudos")
console.log(myPost);
console.log(myPost.exibirTitulo);

myPost.adicionarTags = "programação, javascript e js"

console.log(myPost);

// 10 - herança
class Mamifero {
  constructor(patas){
    this.patas = patas
  }
}

class Lobo extends Mamifero {
  constructor(patas, nome) {
    super(patas,patas)
    this.nome = nome
  }
}

const shark = new Lobo(4, "Shark")
console.log(shark);

// 11 - instanceof

console.log(shark instanceof Lobo);
