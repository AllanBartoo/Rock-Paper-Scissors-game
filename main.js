// console log level rock, paper and scissors game
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let played = Math.floor(Math.random() * choices.length);
  let computerChoice = choices[played];
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt(
    "What do you play (rock, paper, or scissors)?"
  ).toLowerCase();
  while (!["rock", "paper", "scissors"].includes(humanChoice)) {
    humanChoice = prompt(
      "Invalid choice. Please enter rock, paper, or scissors:"
    ).toLowerCase();
  }
  return humanChoice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log(`It's a draw! Both chose ${humanChoice}`);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    }
  }

  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  console.log(
    `Final Scores - Human: ${humanScore}, Computer: ${computerScore}`
  );
  if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (humanScore < computerScore) {
    console.log("You lost the game! Better luck next time!");
  } else {
    console.log("The game is a draw!");
  }
}

playGame();
