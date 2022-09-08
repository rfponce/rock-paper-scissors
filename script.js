function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function computerPlay() {
  // 1.0 Declare variable randomNumber.
  // 1.1 Generate a random number between 1 and 3 and save it in the variable.
  let randomNumber = randomIntFromInterval(1, 3);

  // 1.2 If the generated number is 1 return rock, 2 for paper, and 3 for scissors.
  switch (randomNumber) {
    case 1:
      return "rock";
      break;

    case 2:
      return "paper";
      break;

    case 3:
      return "scissors";
      break;
  }
}

function playerSelection() {
  let selection = null;

  selection = prompt("Write 1 for rock, 2 for paper or 3 for scissors:");
  switch (selection) {
    case "1":
      selection = "rock";
      break;
    case "2":
      selection = "paper";
      break;
    case "3":
      selection = "scissors";
      break;
    default:
      alert("Invalid option. Canceling...");
      selection = "cancel";
  }
  return selection;
}

// 2.0 Choose a winner.
// 2.1 Take player and CPU selections.
function playRound(playerSelection, computerSelection) {
  // 2.1 Compare selections to choose a winner.
  // 2.1.1 If player selection is equal to CPU selection, do not sum points.
  // 2.1.2 If player selection is rock and CPU selection is paper sum a point to CPU.
  if (playerSelection === "rock" && computerSelection === "paper") {
    return "Computer wins, paper beats rock."
  }// 2.1.3 If player selection is rock and CPU selection is scissors, sum a point to player.
  else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win, rock beats scissors."
  }// 2.1.4 If player selection is paper and CPU selection is scissors, sum a point to CPU.
  else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "Computer wins, scissors beats paper."
  }// 2.1.5 If CPU selection is rock and player selection is paper, sum a point to player.
  else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win, paper beats rock."
  }// 2.1.6 If CPU selection is rock and player selection is scissors, sum a point to CPU.
  else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "Computer wins, rock beats scissors."
  }// 2.1.7 If CPU selection is paper and player selection is scissors, sum a point to player.
  else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win, scissors beats paper."
  }
  else if (playerSelection === computerSelection) {
    return "Both choose the same, it's a draw!"
  }
  else {
    return "Cancel"
  }
}

function game() {
  let round = 1;
  let playerPoints = 0;
  let computerPoints = 0;

  do {
    let match = playRound(playerSelection(), computerPlay());

    switch (match) {
      case "Both choose the same, it's a draw!":
        round++;
        break;
      case "Computer wins, paper beats rock.":
        computerPoints++;
        round++;
        break;
      case "Computer wins, rock beats scissors.":
        computerPoints++;
        round++;
        break;
      case "Computer wins, scissors beats paper.":
        computerPoints++;
        round++;
        break;
      case "You win, paper beats rock.":
        playerPoints++;
        round++;
        break;
      case "You win, rock beats scissors.":
        playerPoints++;
        round++;
        break;
      case "You win, scissors beats paper.":
        playerPoints++;
        round++;
        break;
      default:
        round = 5;
        return "Juego cancelado"
    }
    console.log(match);
  }
  while (round <= 5);

  if (playerPoints > computerPoints) {
    return "The player's points was " + playerPoints + " and the computer's points was " + computerPoints + ". The player is the winner";
  }
  else if (playerPoints < computerPoints) {
    return "The player's points was " + playerPoints + " and the computer's points was " + computerPoints + ". The computer is the winner";
  }
  else {
    return "The player's points was " + playerPoints + " and the computer's points was " + computerPoints + ". It's a draw!";
  }
}