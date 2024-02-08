class Character {
  constructor(name, hitPoints, attackPoints) {
    this.name = name;
    this.hitPoints = hitPoints;
    this.attackPoints = attackPoints;
  }

  getStatus() {
    return `Name: ${this.name}, HP: ${this.hitPoints}, Attack: ${this.attackPoints}`;
  }
}

class Player extends Character {
  playerTurn() {
    return Math.floor(Math.random() * 20) + 1;
  }
}

class Enemy extends Character {
  enemyTurn() {
    return Math.floor(Math.random() * 20) + 1;
  }
}

const players = [
  new Player('Aqua', 1000, 3000),
  new Player('Riku', 1000, 2500),
  new Player('Luke Skywalker', 1000, 5000),
  new Player('Yoda', 2000, 10000)
];

const enemies = [
  new Enemy('Sephiroth', 5000, 6000),
  new Enemy('Ansem', 7000, 8000),
  new Enemy('Darth Vader', 10000, 9000),
  new Enemy('Darth Sidious', 8000, 10000)
];

const chooseCharacter = (text, characters) => {
  return new Promise((resolve, reject) => {
    const choice = prompt(`${text}\n\n${characters.map((character, index) => `${index + 1}. ${character.name}`).join('\n')}`);
    const character = characters[choice - 1];
    if (character) {
      resolve(character);
    } else {
      reject(new Error("Invalid choice! Please try again."));
    }
  });
};

const calculateDamage = (attackPoints, roll) => {
  return attackPoints * roll;
};

const battleTime = (player, enemy) => {
  const battleInfo = document.getElementById('battle-info');
  battleInfo.innerHTML = '--- Battle Begins ---<br>';
  battleInfo.innerHTML += `${player.name} rolls for battle...<br>`;
  battleInfo.innerHTML += `${enemy.name} rolls for battle...<br>`;

  while (player.hitPoints > 0 && enemy.hitPoints > 0) {
    // Player's turn
    const playerRoll = player.playerTurn();
    const playerDamage = calculateDamage(player.attackPoints, playerRoll);
    battleInfo.innerHTML += `${player.name} rolls a ${playerRoll} and deals ${playerDamage} damage!<br>`;
    enemy.hitPoints -= playerDamage;

    // Check if the enemy is defeated
    if (enemy.hitPoints <= 0) {
      battleInfo.innerHTML += `Congratulations! ${player.name} defeated ${enemy.name}!<br>`;
      break;
    }

    // Enemy's turn
    const enemyRoll = enemy.enemyTurn();
    const enemyDamage = calculateDamage(enemy.attackPoints, enemyRoll);
    battleInfo.innerHTML += `${enemy.name} rolls a ${enemyRoll} and deals ${enemyDamage} damage!<br>`;
    player.hitPoints -= enemyDamage;

    // Check if the player is defeated
    if (player.hitPoints <= 0) {
      battleInfo.innerHTML += `Game Over! ${player.name} was defeated by ${enemy.name}!<br>`;
      break;
    }

    // Print the current status
    battleInfo.innerHTML += `Player: ${player.name} -- HP Left: ${player.hitPoints}<br>`;
    battleInfo.innerHTML += `Enemy: ${enemy.name} -- HP Left: ${enemy.hitPoints}<br>`;
  }

  battleInfo.innerHTML += '--- Battle Ends ---<br>';

  // Determine the winner based on remaining hit points
  if (player.hitPoints > enemy.hitPoints) {
    battleInfo.innerHTML += `Congratulations! ${player.name} wins the battle!<br>`;
  } else if (player.hitPoints < enemy.hitPoints) {
    battleInfo.innerHTML += `Game Over! ${player.name} was defeated by ${enemy.name}!<br>`;
  } else {
    battleInfo.innerHTML += "It's a tie!<br>";
  }
};

const startBattle = async () => {
  try {
    const player = await chooseCharacter("Choose your player:", players);
    const enemy = await chooseCharacter("Choose your enemy:", enemies);
    battleTime(player, enemy);
  } catch (error) {
    alert(error.message);
  }
};

// main.js
const playerSelect = document.getElementById("player-select");
const enemySelect = document.getElementById("enemy-select");
const startBattleBtn = document.getElementById("start-battle-btn");

const playerPropertiesDiv = document.getElementById("player-properties");
const enemyPropertiesDiv = document.getElementById("enemy-properties");

const battleLogDiv = document.getElementById("battle-log");

const characters = [
  {
    name: "Aqua",
    properties: "Aqua's properties"
  },
  {
    name: "Riku",
    properties: "Riku's properties"
  },
  {
    name: "Luke Skywalker",
    properties: "Luke Skywalker's properties"
  },
  {
    name: "Yoda",
    properties: "Yoda's properties"
  },
  {
    name: "Sephiroth",
    properties: "Sephiroth's properties"
  },
  {
    name: "Ansem",
    properties: "Ansem's properties"
  },
  {
    name: "Darth Vader",
    properties: "Darth Vader's properties"
  },
  {
    name: "Darth Sidious",
    properties: "Darth Sidious's properties"
  }
];

// Function to update the properties div with the selected character's properties
function updateProperties(selectedIndex, propertiesDiv) {
  propertiesDiv.textContent = characters[selectedIndex].properties;
}

// Event listener for player select change
playerSelect.addEventListener("change", function() {
  updateProperties(playerSelect.value, playerPropertiesDiv);
});

// Event listener for enemy select change
enemySelect.addEventListener("change", function() {
  updateProperties(enemySelect.value, enemyPropertiesDiv);
});

function addBattleLogEvent(eventText) {
  const logEvent = document.createElement("p");
  logEvent.textContent = eventText;
  battleLogDiv.appendChild(logEvent);
}

startBattleBtn.addEventListener("click", function() {
  // Perform battle logic...

  // Example battle event
  const playerAttack = "Player attacks the enemy!";
  addBattleLogEvent(playerAttack);

  // More battle events...

  const enemyDefeated = "Enemy defeated!";
  addBattleLogEvent(enemyDefeated);

  // ...
});

document.getElementById('start-battle').addEventListener('click', startBattle);






























 









  

// Uncomment the following lines to call the greeting function
 greeting('');

// Uncomment the following lines to call the charSelect function
 charSelect();

// Uncomment the following lines to call the battleTime function
 battleTime();

// Uncomment the following lines to call the turns function
 turns();

// Uncomment the following lines to log player and enemy information
 console.log(playerAqua);
 console.log(playerRiku);
 console.log(playerLuke);
 console.log(playerYoda);
 console.log(enemySephiroth);
 console.log(enemyAnsem);
 console.log(enemyVader);
 console.log(enemySidious);


