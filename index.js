class hero {
  constructor(name, type, health, attack, defense) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
  }
    ataque() {
    return `Nome: ${this.name} atacou usando ${this.attack}`;
    }
}

const hero1 = new hero("Arus", "Guerreiro", 100, 20, 10);
const hero2 = new hero("Jennica", "Maga", 80, 25, 5);
const hero3 = new hero("Topapa", "Monge", 90, 15, 15);
