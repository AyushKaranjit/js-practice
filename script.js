console.log("Hello, world!");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = Math.floor(Math.random() * 3);
  return choices[computerChoice];
}

function getHumanChoice() {
  const humanChoice = prompt(
    "Please enter your choice: rock, paper, or scissors."
  );
  return humanChoice.toLowerCase();
}

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    return "You win!";
  } else if (
    humanChoice === "rock" ||
    humanChoice === "paper" ||
    humanChoice === "scissors"
  ) {
    computerScore++;
    return "You lose!";
  } else {
    return "Invalid input!";
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    console.log("Round " + (i + 1));
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();
    console.log("The computer chooses " + computerSelection);
    console.log("You choose " + humanSelection);

    console.log(playRound(humanSelection, computerSelection));
  }
  console.log("Computer score: " + computerScore);
  console.log("Human score: " + humanScore);
}

playGame();
