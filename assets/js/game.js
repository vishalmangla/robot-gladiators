var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack =10;
var playerMoney = 10;

//You can also log multiple values at once like

console.log (playerName, playerHealth, playerAttack);

var enemyName ="Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

console.log (enemyName, enemyHealth, enemyAttack)

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Do you want to fight or SKIP the battle ? Enter 'FIGHT' or 'SKIP' to choose");
    window.alert(promptFight);
    // if player choses to fight, then fight
if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
  
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
  
    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
  
    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if player choses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm if the player really wants to quit
    var confirmSkip = window.confirm("Are you sure you'd like to quit? ");
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip the fight. GoodBye");
        playerMoney = playerMoney -2;
        window.alert(playerMoney);

    }
    //if no (false), ask question again by running fight() agian
    else {
        fight();
    }

    window.alert(playerName + " has chosen to skip the fight!");
  } else {
    window.alert("You need to choose a valid option. Try again!");
  }
}
fight()
