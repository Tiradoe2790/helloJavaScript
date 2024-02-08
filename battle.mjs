


// File: battle.js
import { createInterface } from 'readline';
import { Player, Enemy } from './Character.js';
import * as helpers from './helpers.js';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

const characters = [
  new Player('Aqua', 100, 20),
  new Player('Riku', 120, 18),
  new Player('Luke', 110, 22),
  new Player('Yoda', 90, 25)
];

const enemies = [
  new Enemy('Sephiroth', 150, 25),
  new Enemy('Ansem', 140, 23),
  new Enemy('Vader', 130, 24),
  new Enemy('Sidious', 160, 26)
];

async function chooseCharacter(text, characters) {
  console.log(text);
  characters.forEach((character, index) => {
    console.log(`${index + 1}. ${character.name}`);
  });

  const choice = await new Promise((resolve) => {
    rl.question("Enter the number corresponding to your choice: ", (answer) => {
      resolve(answer);
    });
  });

  const character = characters[choice - 1];
  if (character) {
    return character;
  } else {
    throw new Error("Invalid choice! Please try again.");
  }
}

function battleTime(player, enemy) {
  console.log('--- Battle Begins ---');
  player.quickFacts();
  enemy.quickFacts();

  while (player.hitPoints > 0 && enemy.hitPoints > 0) {
    // Player's turn
    const playerRoll = player.playerTurn();
    const playerDamage = helpers.calculateDamage(player.attackPoints, playerRoll);
    console.log(`${player.name} rolls a ${playerRoll} and deals ${playerDamage} damage!`);
    enemy.hitPoints -= playerDamage;

    // Check if the enemy is defeated
    if (enemy.hitPoints <= 0) {
      console.log(`Congratulations! ${player.name} defeated ${enemy.name}!`);
      break;
    }

    // Enemy's turn
    const enemyRoll = enemy.enemyTurn();
    const enemyDamage = helpers.calculateDamage(enemy.attackPoints, enemyRoll);
    console.log(`${enemy.name} rolls a ${enemyRoll} and deals ${enemyDamage} damage!`);
    player.hitPoints -= enemyDamage;

    // Check if the player is defeated
    if (player.hitPoints <= 0) {
      console.log(`Game Over! ${player.name} was defeated by ${enemy.name}!`);
      break;
    }

    // Print the current status
    player.status();
    enemy.status();
  }

  console.log('--- Battle Ends ---');

  // Determine the winner based on remaining hit points
  if (player.hitPoints > enemy.hitPoints) {
    console.log(`Congratulations! ${player.name} wins the battle!`);
  } else if (player.hitPoints < enemy.hitPoints) {
    console.log(`Game Over! ${player.name} was defeated by ${enemy.name}!`);
  } else {
    console.log('It\'s a tie!');
  }
}

async function startBattle() {
  try {
    const player = await chooseCharacter("Choose your player:", characters);
    const enemy = await chooseCharacter("Choose your enemy:", enemies);

    battleTime(player, enemy);
  } catch (error) {
    console.error(error.message);
  } finally {
    rl.close();
  }
}

startBattle();


