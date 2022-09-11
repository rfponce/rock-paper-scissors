function game() {
  let playerPoints = 0;
  let computerPoints = 0;
  let lastPlayerSelection = null;
  let lastComputerSelection = null;
  const playerButtons = document.querySelectorAll('button');
  const match = null;
  //match = playRound(playerSelection(), computerPlay());
  playerButtons.forEach((button) => {button.addEventListener('click', playRound)})

  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  function computerPlay() {
    // 1.0 Declare variable randomNumber.
    // 1.1 Generate a random number between 1 and 3 and save it in the variable.
    let randomNumber = randomIntFromInterval(1, 3);
    let selection = null;
  
    // 1.2 If the generated number is 1 return rock, 2 for paper, and 3 for scissors.
    switch (randomNumber) {
      case 1:
        selection = "rock";
        printValues().printSelection().printComputerSelection("Rock");
        break;
  
      case 2:
        selection = "paper";
        printValues().printSelection().printComputerSelection("Paper");
        break;
  
      case 3:
        selection = "scissors";
        printValues().printSelection().printComputerSelection("Scissors");
        break;
    }
    lastComputerSelection = selection;
  }
  
  function playerSelection(event) {
    let selection = null;
    let buttonId = event.target.id;
  
    switch (buttonId) {
      case "rock-button":
        selection = "rock";
        printValues().printSelection().printPlayerSelection("Rock");
        break;
      case "paper-button":
        selection = "paper";
        printValues().printSelection().printPlayerSelection("Paper");
        break;
      case "scissors-button":
        selection = "scissors";
        printValues().printSelection().printPlayerSelection("Scissors");
        break;
      default:
        alert("Invalid option. Canceling...");
        selection = "cancel";
    }
    lastPlayerSelection = selection;
  }
  
  // 2.0 Choose a winner.
  // 2.1 Take player and CPU selections.
  function playRound(event) {
    playerSelection(event);
    computerPlay();
    // 2.1 Compare selections to choose a winner.
    // 2.1.1 If player selection is equal to CPU selection, do not sum points.
    // 2.1.2 If player selection is rock and CPU selection is paper sum a point to CPU.
    if (lastPlayerSelection === "rock" && lastComputerSelection === "paper") {
      computerPoints++;
      printValues().printPoints().setComputerPoints(computerPoints);
      printValues().printResult().setText().looseText("Computer wins, paper beats rock.");
    }// 2.1.3 If player selection is rock and CPU selection is scissors, sum a point to player.
    else if (lastPlayerSelection === "rock" && lastComputerSelection === "scissors") {
      playerPoints++;
      printValues().printPoints().setPlayerPoints(playerPoints);
      printValues().printResult().setText().winText("You win, rock beats scissors.");
    }// 2.1.4 If player selection is paper and CPU selection is scissors, sum a point to CPU.
    else if (lastPlayerSelection === "paper" && lastComputerSelection === "scissors") {
      computerPoints++;
      printValues().printPoints().setComputerPoints(computerPoints);
      printValues().printResult().setText().looseText("Computer wins, scissors beats paper.");
    }// 2.1.5 If CPU selection is rock and player selection is paper, sum a point to player.
    else if (lastPlayerSelection === "paper" && lastComputerSelection === "rock") {
      playerPoints++;
      printValues().printPoints().setPlayerPoints(playerPoints);
      printValues().printResult().setText().winText("You win, paper beats rock.");
    }// 2.1.6 If CPU selection is rock and player selection is scissors, sum a point to CPU.
    else if (lastPlayerSelection === "scissors" && lastComputerSelection === "rock") {
      computerPoints++;
      printValues().printPoints().setComputerPoints(computerPoints);
      printValues().printResult().setText().looseText("Computer wins, rock beats scissors.");
    }// 2.1.7 If CPU selection is paper and player selection is scissors, sum a point to player.
    else if (lastPlayerSelection === "scissors" && lastComputerSelection === "paper") {
      playerPoints++;
      printValues().printPoints().setPlayerPoints(playerPoints);
      printValues().printResult().setText().winText("You win, scissors beats paper.");
    }
    else if (lastPlayerSelection === lastComputerSelection) {
      printValues().printResult().setText().drawText("Both choose the same, it's a draw!");
    }
    else {
      printValues().printResult().setText("ERROR");
    }
  }

  function printValues() {
    return {
      printPoints: function () {
        return {
          setPlayerPoints: function (points) {
            const playerPoints = document.getElementById('player-points');
            
            playerPoints.innerText = points;
          },
          setComputerPoints: function (points) {
            const computerPoints = document.getElementById('computer-points');
            
            computerPoints.innerText = points;
          }
        }
      },
      printSelection: function () {
        return {
          resetSelections: function () {
            const selectionsValues = document.querySelectorAll('#selection>span');
      
            selectionsValues.forEach((selection) => {selection.innerText = 'none'});
          },
          printPlayerSelection: function (selection) {
            const playerSelectionValue = document.getElementById('player-selection');
      
            playerSelectionValue.innerText = selection;
          },
          printComputerSelection: function (selection) {
            const computerSelectionValue = document.getElementById('computer-selection');
      
            computerSelectionValue.innerText = selection;
          }
        }
      },
      printResult: function () {
        const resultText = document.getElementById('result-text');

        return {
          resetText: function () {
            resultText.innerText = "Round results will be displayed here";
          },
          setText: function () {
            return {
              winText: function (text) {
                resultText.style = 'color: green; background-color: rgba(0, 0, 0, 0.5)';
                resultText.innerText = text;
              },
              looseText: function (text) {
                resultText.style = 'color: red; background-color: rgba(0, 0, 0, 0.5)';
                resultText.innerText = text;
              },
              drawText: function (text) {
                resultText.style = 'color: white; background-color: rgba(0, 0, 0, 0.5)';
                resultText.innerText = text;
              }
            }
          }
        }
      }
    }
  }

  

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

document.addEventListener('DOMContentLoaded', game);