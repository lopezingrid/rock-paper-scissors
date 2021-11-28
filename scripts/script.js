let playerScore = 0;
let computerScore = 0;

//computer chooses randomly between rock, paper and scissors.
function computerPlay (min, max) {
    min = 0;
    max = 2;
    let number = Math.floor(Math.random() * (max - min + 1)) + min;

    let rock = "ROCK";
    //rock = rock.toLowerCase();
    let paper = "PAPER";
    //paper = paper.toLowerCase();
    let scissors = "SCISSORS";
    //scissors = scissors.toLowerCase();

    if (number == 0) {
        return rock.toLowerCase();;
    } else if (number == 1) {
        return paper.toLowerCase();;
    } else if (number == 2) {
        return scissors.toLowerCase();
    }
}

//user input rock, paper or scissors.
function playerSelection() {
    let result = prompt("Rock, paper or scissors?");
    result = result.toLowerCase();
    return result;
}

//round of the rock, paper and scissors game.
function playRound(playerSelection, computerSelection) {

    if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You win! Rock kicks scissors.");
        playerScore += 1;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You win! Paper kicks rock.");
        playerScore += 1;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You win! Scissors kicks paper.");
        playerScore += 1;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("You lose! Rock kicks Paper");
        computerScore += 1;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("You lose! Paper kicks scissors.");
        computerScore += 1;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You lose! Scissors kicks rock.");
        computerScore += 1;
    } else {
        console.log("It's a tie.");
    }
}


game();

//play a five round game and return the winner of the game.
function game() {
    for( i = 0; i < 5; i++ ) { 
        playRound(playerSelection(), computerPlay());
    }

    if (playerScore > computerScore) {
        console.log("Player win!!!");
    } else if (computerScore > playerScore) {
        console.log("Computer win!!!");
    }
}