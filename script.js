let roundDisplay = document.getElementById("round-display");
let computerChoiceDisplay = document.getElementById("computer-choice-display");
let playerChoiceDisplay = document.getElementById("player-choice-display");
let resultDisplay = document.getElementById("result-display");
let playerChoices = document.getElementsByClassName("player-button");
let numberOfRounds = 5;
let playerChoice;
let computerChoice;



for (let i = 0; i < playerChoices.length; i++) {
    playerChoices[i].addEventListener("click", () => {
        game(grabComputerChoice, grabPlayerChoice, numberOfRounds, i);
    })
}

function game(grabComputerChoice, grabPlayerChoice, numberOfRounds, i) {
    if(numberOfRounds > 0) {
        computerChoice = grabComputerChoice();
        playerChoice = grabPlayerChoice(i);
        determineWinner(computerChoice, playerChoice)
    }
}



function grabComputerChoice() {
    let choiceOfComputer = Math.floor(Math.random() * 3)
    switch (choiceOfComputer) {
        case 0:
            return "rock";
        case 1: 
            return "paper";
        case 2: 
            return "scissors";
        default:
            break;
    }
}

function grabPlayerChoice(i) {
    return playerChoices[i].innerHTML;
}

function determineWinner(computerChoice, playerChoice) {
    if(computerChoice === "paper" && playerChoice === "rock") {
        resultDisplay.innerHTML = "Computer Wins"
    }
    if(computerChoice === "rock" && playerChoice === "paper") {
        resultDisplay.innerHTML = "Player Wins"
    }
    if(computerChoice === "scissors" && playerChoice === "paper") {
        resultDisplay.innerHTML = "Computer Wins"
    }
    if(computerChoice === "paper" && playerChoice === "scissors") {
        resultDisplay.innerHTML = "Player Wins"
    }
    if(computerChoice === "rock" && playerChoice === "scissors") {
        resultDisplay.innerHTML = "Computer Wins"
    }
    if(computerChoice === "scissors" && playerChoice === "rock") {
        resultDisplay.innerHTML = "Player Wins"
    }

}
