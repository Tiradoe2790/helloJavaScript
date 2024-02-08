// File: Character.js
class Character {
  constructor(name, hitPoints, attackPoints) {
    this.name = name;
    this.hitPoints = hitPoints;
    this.attackPoints = attackPoints;
  }

  status() {
    console.log(`${this.name}: Hit Points - ${this.hitPoints}`);
  }
}

export class Player extends Character {
  constructor(name, hitPoints, attackPoints) {
    super(name, hitPoints, attackPoints);
  }

  playerTurn() {
    return helpers.getRandomInt(1, 6);
  }

  quickFacts() {
    console.log(`${this.name}: Attack Points - ${this.attackPoints}`);
  }
}

export class Enemy extends Character {
  constructor(name, hitPoints, attackPoints) {
    super(name, hitPoints, attackPoints);
  }

  enemyTurn() {
    return helpers.getRandomInt(1, 6);
  }

  quickFacts() {
    console.log(`${this.name}: Attack Points - ${this.attackPoints}`);
  }
}