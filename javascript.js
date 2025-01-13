playGame();

function getComputerChoice() { 
    const computerChoice = Math.floor(Math.random() * 3) + 1;

    if (computerChoice === 1)
        return "rock";
    else if (computerChoice === 2)
        return "paper";
    else if (computerChoice === 3)
        return "scissors";
}

function getHumanChoice() {
    const humanChoice = prompt("Rock, Paper, or Scissors?");

    if (humanChoice.toLowerCase() == "rock")
        return "rock";
    else if (humanChoice.toLowerCase() == "paper")
        return "paper";
    else if (humanChoice.toLowerCase() == "scissors")
        return "scissors";
    else return "invalid choice"
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let choices = document.querySelector('#choices-section');

    choices.addEventListener('click', (event) => {
        let target = event.target;

        switch(target.id) {
            case 'rock':
                playRound("rock", getComputerChoice());
                break;
            case 'paper':
                playRound("paper", getComputerChoice()); 
                break;
            case 'scissors':
                playRound("scissors", getComputerChoice());               
                break;
        }
    });

    function playRound(humanChoice, computerChoice) {
        let results = document.querySelector('#results');

        if (humanChoice == "rock" && computerChoice == "scissors"){
            results.textContent = "You win! Rock beats Scissors.";
            humanScore++;
        } else if (humanChoice == "paper" && computerChoice == "rock"){
            results.textContent = "You win! Papers beats Rock.";
            humanScore++;
        } else if (humanChoice == "scissors" && computerChoice == "paper"){
            results.textContent = "You win! Scissors beats Paper.";
            humanScore++;
        } else if (humanChoice == "scissors" && computerChoice == "rock"){
            results.textContent = "You lose! Rock beats Scissors.";
            computerScore++;
        } else if (humanChoice == "rock" && computerChoice == "paper"){
            results.textContent = "You lose! Paper beats Rock.";
            computerScore++;
        } else if (humanChoice == "paper" && computerChoice == "scissors"){
            results.textContent = "You lose! Scissors beats Paper.";
            computerScore++;
        } else if (humanChoice == "rock" && computerChoice == "rock"){
            results.textContent = "It's a tie! Both of you are Rock.";  
            humanScore++;
            computerScore++;
        } else if (humanChoice == "paper" && computerChoice == "paper"){
            results.textContent = "It's a tie! Both of you are Paper.";
            humanScore++;
            computerScore++;
        } else if (humanChoice == "scissors" && computerChoice == "scissors."){
            results.textContent = "It's a tie! Both of you are Scissors.";
            humanScore++;
            computerScore++;
        }
        let humanScoreDisplay = document.querySelector('#human-score');
    let computerScoreDisplay = document.querySelector('#computer-score');


    humanScoreDisplay.textContent = "Your score: " + humanScore;
    computerScoreDisplay.textContent = "Computer score: " + computerScore;
    }

    

}