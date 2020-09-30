function randomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function computerPlay() {
    const computerNum = randomNum(1, 3);

    if(computerNum == 1) {
        return "Rock";
    } else if(computerNum == 2) {
        return "Paper";
    } else if(computerNum == 3) {
        return "Scissors";
    }
}
//computerPlay();



function playerPlay() {
    let answerPlayer = prompt("Rock, paper or scissors?");
    return answerPlayer;
}
//playerPlay();





let playerPoints = 0;
let computerPoints = 0;


function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock" && computerSelection == "Scissors") {
        playerPoints++;
        return "You win! Rock beats Scissors";
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        playerPoints++;
        return "You win! Paper beats Rock";
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        playerPoints++;
        return "You win! Scissors beats Paper";
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        computerPoints++;
        return "You lose! Paper beats Rock";
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        computerPoints++;
        return "You lose! Scissors beats Paper";
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        computerPoints++;
        return "You lose! Rock beats Scissors";
    } else {
        return "It's a tie!"
    }
}



function game() {
    for (let i = 1; i <= 5; i++) {
        console.log( playRound(playerPlay(), computerPlay() ));
    }
}
game()





function finalScore() {
    if (playerPoints > computerPoints) {
        console.log("PLAYER IS THE WINNER!");
    } else if (computerPoints > playerPoints) {
        console.log("COMPUTER IS THE WINNER!");
    }
}
finalScore()




    