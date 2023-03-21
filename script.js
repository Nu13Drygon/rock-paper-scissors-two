let roundDisplay = document.getElementById("round-display");
let computerChoiceDisplay = document.getElementById("computer-choice-display");
let playerChoiceDisplay = document.getElementById("player-choice-display");
let resultDisplay = document.getElementById("result-display");
let playerChoices = document.getElementsByClassName("player-button");
let playAgainBtn = document.getElementsByClassName("play-again-button")
let gameResult = document.getElementById("game-result")
let numberOfRounds = 5;
let playerChoice;
let computerChoice;
let roundNumber;
const roundWins = {
    'computer': 0,
    'player': 0, 
    'draw': 0
}



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
        roundDisplay.textContent = numberOfRounds;
        
        if(numberOfRounds === 0) {

            if(roundWins.computer === roundWins.player) {
                gameResult.textContent = 'The game is a Draw!!!'
            }
            else if(roundWins.computer > roundWins.player) {
                gameResult.textContent = 'Computer wins the game!!!'
            }
            else {
                gameResult.textContent = 'Player wins the game!!!'
            }
            resultDisplay.textContent = '' 

        }
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
    return playerChoices[i].textContent;
}

function determineWinner(computerChoice, playerChoice) {
    displayChoices(computerChoice, playerChoice)
    if(computerChoice === "paper" && playerChoice === "rock") {
        roundWins.computer++
        return resultDisplay.textContent = "Computer Wins"
    }
    if(computerChoice === "rock" && playerChoice === "paper") {
        roundWins.player++
        return resultDisplay.textContent = "Player Wins"
    }
    if(computerChoice === "scissors" && playerChoice === "paper") {
        roundWins.computer++
        return resultDisplay.textContent = "Computer Wins"
    }
    if(computerChoice === "paper" && playerChoice === "scissors") {
        roundWins.player++
        return resultDisplay.textContent = "Player Wins"
    }
    if(computerChoice === "rock" && playerChoice === "scissors") {
        roundWins.computer++
        return resultDisplay.textContent = "Computer Wins"
    }
    if(computerChoice === "scissors" && playerChoice === "rock") {
        roundWins.player++
        return resultDisplay.textContent = "Player Wins"
    }
    if(computerChoice === playerChoice) {
        roundWins.draw++
        return resultDisplay.textContent = "A Draw"
    }
}

function displayChoices(computerChoice, playerChoice) {
    computerChoiceDisplay.textContent = computerChoice;
    playerChoiceDisplay.textContent = playerChoice;
}

function playAgain() {
    for (const key in roundWins) {
        {key: roundWins[key] = 0}
    }
    numberOfRounds = 5;
    roundDisplay.textContent = numberOfRounds;
    gameResult.textContent = ''
}
