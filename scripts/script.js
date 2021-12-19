// script 4

// Round number
let roundNum = 1;

// Player scores
let playerScore = 0;
let computerScore = 0;

// Naming where the results of the rounds will go
let resultsGame = document.querySelector("#resultsGame");
let winnerRound = document.createElement("h2");
let winnerGame = document.createElement("h1");

// Naming where the player scores will go
let userDiv = document.querySelector("#userDiv");
let userScore = document.querySelector("#playerScore")
let computerDiv = document.querySelector("#computerDiv");
let randomScore = document.querySelector("#computerScore")


// When user clicks a button call playGame() function
const options = document.querySelectorAll(".button");
options.forEach((option) => {
    option.addEventListener("click", function() {
        let playerSelection = this.textContent;
        playerSelection = playerSelection.toLowerCase();

        playGame(playerSelection, computerSelection());
    })
})


// Computer randomly chooses between rock, paper and scissors 
function computerSelection(min, max) {
    min = 0; 
    max = 2;
    let number = Math.floor(Math.random() * (max - min + 1) + min);

    if (number == 0) {
        return "rock";
    } else if (number == 1) {
        return "paper";
    } else if (number == 2) {
        return "scissors";
    }
}


// The game is played and returns the winner of each round and of the game
function playGame(playerSelection, computerSelection) {
    if (
        (playerScore <= 5 && computerScore <= 5) &&
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore += 1;
        userScore.textContent = `${playerScore}`;
        winnerRound.textContent = `Round ${roundNum}: Player wins the round! ${playerSelection} wins ${computerSelection}`

        if (playerScore >= 5) {
            // message of the player wins the game
            winnerGame.textContent = "Player wins the game!";
        }
    roundNum += 1;
    } else if (
        (playerScore <=5 && computerScore <= 5) &&
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")
    ) {
        computerScore += 1;
        randomScore.textContent = `${computerScore}`;
        winnerRound.textContent = `Round ${roundNum}: Computer wins the round! ${computerSelection} wins ${playerSelection}`
    
        if (computerScore >= 5) {
            // message the computer wins the game
            winnerGame.textContent = "Computer wins the game!";
        }
    roundNum += 1;
    } else {
        // message of tie
        winnerRound.textContent = `Round ${roundNum}: It's a tie, ${playerSelection} tie to ${computerSelection}`;
        roundNum += 1;
    }

    resultsGame.insertAdjacentElement("afterbegin", winnerRound);
    resultsGame.insertAdjacentElement("afterbegin", winnerGame);
    userDiv.appendChild(userScore);
    computerDiv.appendChild(randomScore);
}