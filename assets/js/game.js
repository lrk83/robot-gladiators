var playerName=window.prompt("What is your robot's name?");
var playerHealth=100;
var playerAttack=10;
var playerMoney=10;

//// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName){
    //Alert players that they're staring the round
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");


    if (promptFight==="FIGHT" || promptFight==="fight"){
        //Subtract 'playerAttack' from 'enemyHealth'
        enemyHealth=enemyHealth-playerAttack;

        //Log resulting 'enemyHealth'
        console.log(playerName+" attacked "+enemyName+". "
        +enemyName+" now has "+enemyHealth+" health remaining");

        //check enemy's health
        if (enemyHealth <=0) {
            window.alert(enemyName+'has died!');
        }
        else{
            window.alert(enemyName+ "still has " +enemyHealth +" health left");
        }

        //Subtracct 'enemyAttack' from 'playerHealth'
        playerHealth=playerHealth-enemyAttack;

        //Log resulting 'playerHealth'
        console.log(enemyName+" attacked "+playerName+". "
        +playerName+" now has "+playerHealth+" health remaining");

        // check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        } 
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
    else if (promptFight==="skip" ||promptFight==="SKIP"){
        window.alert(playerName+ " has chosen to skip the fight!");
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        if (confirmSkip){
            window.alert(playerName+" has decided to skip this fight. Goodbye!")
            playerMoney=playerMoney-2;
        }
        else{
            fight();
        }
    }
    else {
        window.alert("You need to choose a valid option. Try again!");
    }
}

for(var i=0; i<enemyNames.length; i++){
    fight(enemyNames[i]);
}
