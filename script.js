let roundDisplay = document.getElementById("round-display");
let computerChoiceDisplay = document.getElementById("computer-choice-display");
let playerChoiceDisplay = document.getElementById("player-choice-display");
let resultDisplay = document.getElementById("result-display");
let playerChoices = document.getElementsByClassName("player-button");
let playAgainBtn = document.getElementsByClassName("play-again-button")
let numberOfRounds = 5;
let playerChoice;
let computerChoice;
let roundNumber;



for (let i = 0; i < playerChoices.length; i++) {
    playerChoices[i].addEventListener("click", () => {
        game(grabComputerChoice, grabPlayerChoice, i);
    })
}

playAgainBtn[0].addEventListener('click', playAgain)

function game(grabComputerChoice, grabPlayerChoice, i) {
    
    if(numberOfRounds > 0) {
        computerChoice = grabComputerChoice();
        playerChoice = grabPlayerChoice(i);
        determineWinner(computerChoice, playerChoice);
        numberOfRounds--;
        roundDisplay.innerHTML = numberOfRounds;
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

// uses i from for loop to grab correct player Button
function grabPlayerChoice(i) {
    return playerChoices[i].innerHTML;
}

function determineWinner(computerChoice, playerChoice) {
    displayChoices(computerChoice, playerChoice)
    if(computerChoice === "paper" && playerChoice === "rock") {
        return resultDisplay.innerHTML = "Computer Wins"
    }
    if(computerChoice === "rock" && playerChoice === "paper") {
        return resultDisplay.innerHTML = "Player Wins"
    }
    if(computerChoice === "scissors" && playerChoice === "paper") {
        return resultDisplay.innerHTML = "Computer Wins"
    }
    if(computerChoice === "paper" && playerChoice === "scissors") {
        return resultDisplay.innerHTML = "Player Wins"
    }
    if(computerChoice === "rock" && playerChoice === "scissors") {
        return resultDisplay.innerHTML = "Computer Wins"
    }
    if(computerChoice === "scissors" && playerChoice === "rock") {
        return resultDisplay.innerHTML = "Player Wins"
    }
    if(computerChoice === playerChoice) {
        return resultDisplay.innerHTML = "A Draw"
    }
}

function displayChoices(computerChoice, playerChoice) {
    computerChoiceDisplay.innerHTML = computerChoice;
    playerChoiceDisplay.innerHTML = playerChoice;
}

function playAgain() {
    numberOfRounds = 5;
    roundDisplay.innerHTML = numberOfRounds;
}