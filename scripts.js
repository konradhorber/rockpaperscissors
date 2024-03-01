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

  if (outcome == 'won') {
    console.log(`You ${outcome}! ${playerSelection} beats ${computerSelection}!`)
  }
  else if (outcome == 'lost') {
    console.log(`You ${outcome}! ${playerSelection} is beaten by ${computerSelection}!`)
  }
  else if (outcome == 'tied') {
    console.log(`You ${outcome}! ${playerSelection} is even with ${computerSelection}!`)
  }
  else {console.log('error code 1')};
  return
}

for (let i = 0; i < 5; i++) {
  let playerSelection = prompt('Please select rock, paper, scissors: ').toLowerCase();
  let computerSelection = getComputerChoice();

  playRound(playerSelection, computerSelection);
}
