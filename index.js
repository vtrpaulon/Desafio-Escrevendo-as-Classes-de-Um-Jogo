class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    if (this.tipo === "mago") {
      ataque = "magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "espada";
    } else if (this.tipo === "monge") {
      ataque = "artes marciais";
    } else if (this.tipo === "ninja") {
      ataque = "shuriken";
    } else {
      ataque = "um ataque desconhecido";
    }

    console.log(`o ${this.nome} do tipo ${this.tipo} atacou usando ${ataque}`);
  }
}
const magoMagrelo = new Heroi("magoMagrelo", 30, "mago");
magoMagrelo.atacar();

const ThorPeedo = new Heroi("ThorPeedo", 40, "guerreiro");
ThorPeedo.atacar();

