function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let played = Math.floor(Math.random() * choices.length);
  return choices[played];
}

function playRound(humanChoice, computerChoice) {
  let humanScore = 0;
  let computerScore = 0;
  const resultText = document.getElementById("result");
  const userChoiceText = document.getElementById("user-choice");
  const computerChoiceText = document.getElementById("computer-choice");
  const scores = document.getElementById("scores");

  userChoiceText.textContent = `You chose: ${humanChoice}`;
  computerChoiceText.textContent = `Computer chose: ${computerChoice}`;

  if (humanChoice === computerChoice) {
    resultText.textContent = "It's a draw!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    resultText.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
  } else {
    resultText.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    computerScore++;
  }

  scores.textContent = `Final Scores - Human: ${humanScore}, Computer: ${computerScore}`;
}

function getHumanChoice(humanChoice) {
  const computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
}
