var playerName=window.prompt("What is your robot's name?");
var playerHealth=100;
var playerAttack=10;

//// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(){
    //Alert players that they're staring the round
    window.alert("Welcome to Robot Gladiators!");

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
};

fight();
