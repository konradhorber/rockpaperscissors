const buttons = document.querySelectorAll("button");
const results = document.querySelector("#results");
let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => 
    playRound(button.id, getComputerChoice(), playerScore, computerScore))
})

function getComputerChoice() {
  const computer_choice = [
    "rock",
    "paper",
    "scissors"
  ];
  return computer_choice[Math.floor(Math.random() * 2.99)];
}

function playRound(playerSelection, computerSelection) {
  let outcome = 0;
  // compare and select
  if (playerSelection == 'rock') {
    if (computerSelection == 'rock') {
      outcome = 'tied';
    }
    else if (computerSelection == 'paper') {
      outcome = 'lost';
    }
    else if (computerSelection == 'scissors') {
      outcome = 'won';
    };
  };

  if (playerSelection == 'paper') {
    if (computerSelection == 'rock') {
      outcome = 'won';
    }
    else if (computerSelection == 'paper') {
      outcome = 'tied';
    }
    else if (computerSelection == 'scissors') {
      outcome = 'lost';
    };
  };

  if (playerSelection == 'scissors') {
    if (computerSelection == 'rock') {
      outcome = 'lost';
    }
    else if (computerSelection == 'paper') {
      outcome = 'won';
    }
    else if (computerSelection == 'scissors') {
      outcome = 'tied';
    };
  };

  const roundResult = document.createElement("p");
  const scoreboard = document.createElement("p");
  if (outcome == 'won') {
    roundResult.textContent = 
    `You ${outcome}! ${playerSelection} beats ${computerSelection}!`;
    playerScore++;
  }
  else if (outcome == 'lost') {
    roundResult.textContent = 
    `You ${outcome}! ${playerSelection} is beaten by ${computerSelection}!`;
    computerScore++;
  }
  else if (outcome == 'tied') {
    roundResult.textContent = 
    `You ${outcome}! ${playerSelection} is even with ${computerSelection}!`;
  }
  else {roundResult.textContent = 'error code 1'};

  results.appendChild(roundResult);
  scoreboard.textContent = 
  `Player: ${playerScore} | Computer: ${computerScore} out of 5`;
  results.appendChild(scoreboard);
  
  const finalResult = document.createElement("p");
  if (playerScore == 5) {
    finalResult.textContent = "Player won!";
  } else if (computerScore == 5) {
    finalResult.textContent = "Computer won!";
  }
  results.appendChild(finalResult);
  return
}