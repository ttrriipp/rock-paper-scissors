let humanScore = 0;
let computerScore = 0;
playGame()

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

function playGame() {

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "rock" && computerChoice == "scissors"){
            console.log("You win! Rock beats Scissors.")
            humanScore++
        } else if (humanChoice == "paper" && computerChoice == "rock"){
            console.log ("You win! Paper beats Rock.")
            humanScore++
        } else if (humanChoice == "scissors" && computerChoice == "paper"){
            console.log("You win! Scissors beats Paper.")
            humanScore++
        } else if (humanChoice == "scissors" && computerChoice == "rock"){
            console.log("You lose! Rock beats Scissors.")
            computerScore++
        } else if (humanChoice == "rock" && computerChoice == "paper"){
            console.log ("You lose! Paper beats Rock.")
            computerScore++
        } else if (humanChoice == "paper" && computerChoice == "scissors"){
            console.log("You lose! Scissors beats Paper.")
            computerScore++
        } else if (humanChoice == "rock" && computerChoice == "rock"){
            console.log("It's a tie! Both of you have chosen Rock.")
            humanChoice++
            computerChoice++
        }
        else if (humanChoice == "paper" && computerChoice == "paper"){
            console.log("It's a tie! Both of you have chosen Paper.")
            humanChoice++
            computerChoice++
        }
        else if (humanChoice == "scissors" && computerChoice == "scissors."){
            console.log("It's a tie! Both of you have chosen Scissors")
            humanChoice++
            computerChoice++
        }
        else if (humanChoice == "invalid choice")
            console.log("BOO")
    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound (humanSelection, computerSelection)
    playRound (humanSelection, computerSelection)
    playRound (humanSelection, computerSelection)
    playRound (humanSelection, computerSelection)
    playRound (humanSelection, computerSelection)
    console.log("Your score: " + humanScore + "\nComputer Score: "  + computerScore)
}