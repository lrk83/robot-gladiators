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
    while(enemyHealth>0 && playerHealth>0){

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if (promptFight==="skip" ||promptFight==="SKIP"){
        window.alert(playerName+ " has chosen to skip the fight!");
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        if (confirmSkip){
            window.alert(playerName+" has decided to skip this fight. Goodbye!")
            playerMoney=playerMoney-10;
            console.log("playerMoney", playerMoney);
            break;
        }
        else{
            fight();
        }
    }
        //Subtract 'playerAttack' from 'enemyHealth'
        enemyHealth=enemyHealth-playerAttack;

        //Log resulting 'enemyHealth'
        console.log(playerName+" attacked "+enemyName+". "
        +enemyName+" now has "+enemyHealth+" health remaining");

        //check enemy's health
        if (enemyHealth <=0) {
            window.alert(enemyName+'has died!');
            break;
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
            break;
        } 
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }
}

for(var i=0; i<enemyNames.length; i++){
    var pickedEnemyName = enemyNames[i];
    enemyHealth=50;
    fight(pickedEnemyName);
}
