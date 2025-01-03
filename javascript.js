let humanScore = 0;
let computerScore = 0;

function getComputerChoice() { 
    const computerChoice = Math.floor(Math.random() * 3) + 1;

    if (computerChoice === 1)
        return "rock"
    else if (computerChoice === 2)
        return "paper"
    else if (computerChoice === 3)
        return "scissors"
}

function getHumanChoice() {
    const humanChoice = prompt("Rock, Paper, or Scissors?")

    if (humanChoice.toLowerCase() == "rock")
        return "rock"
    else if (humanChoice.toLowerCase() == "paper")
        return "paper"
    else if (humanChoice.toLowerCase() == "scissors")
        return "scissors"
    else return "invalid choice" 
}