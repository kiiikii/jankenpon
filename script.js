/**
 *  plan or pseucode for janken
 *  1. make a rand.Math() {0:rock, 1:scissor, 2:paper} for computer
 *  2. make a prompt for user input
 *  3. the computer will choose first then user within time 
 *  4. make a logic if user input beat computer rand.Math() then user win, otherwise if computer rand.Math() beat user input then computer win, otherwise will draw
 *  5. the game will be best of 5 scoring from 0
 */


// 1. make a rand.Math() {0:rock, 1:scissor, 2:paper} for computer
function computerRandom() {
  return Math.floor(Math.random() * 3);
}

// 2. make a prompt for user input
function getUserInput() {
  const userChoice = prompt("Enter your choice (rock, scissor, paper):");
  return userChoice.toLowerCase();
}

// 3. the computer will choose first then user within time
function playJanken() {
  const computerChoice = computerRandom();
  const userChoice = getUserInput();

  // convert user's choice to number
  const userChoiceNumber = getUserChoiceNumber(userChoice);

  // check the winner
  const winner = determineWinner(computerChoiceNumber, userChoiceNumber);

  // display the result
  displayResult(computerChoice, userChoice, winner);
}

// 4. make a logic if user input beat computer rand.Math() then user win, otherwise if computer rand.Math() beat user input then computer win, otherwise will draw
function determineWinner(computerChoice, userChoice) {
  if (computerChoice === userChoice) {
    return "draw";
  }

  if ((computerChoice === 0 && userChoice === 1) || (computerChoice === 1 && userChoice === 2) || (computerChoice === 2 && userChoice === 0)) {
    return "computer";
  }

  return "user";
}

// 5. the game will be best of 5 scoring from 0
function displayResult(computerChoice, userChoice, winner) {
  const choices = ["rock", "scissor", "paper"];
  console.log(`Computer chose: ${choices[computerChoice]}`);
  console.log(`You chose: ${userChoice}`);

  if (winner === "draw") {
    console.log("It's a draw!");
  } else if (winner === "computer") {
    console.log("Computer wins!");
  } else {
    console.log("You win!");
  }
}