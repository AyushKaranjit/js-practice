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
let tieCount = 0;
let invalidCount = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    tieCount++;
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
  }
}

const result = document.querySelector(".result");

const rock = document.querySelector(".btn1");

rock.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const humanSelection = "rock";

  rock.classList.add("rock");
  rock.style.color = "red";

  const resultMessage = document.createElement("p");

  resultMessage.textContent = `You choose ${humanSelection}. The computer chooses ${computerSelection}. ${playRound(
    humanSelection,
    computerSelection
  )}`;

  resultMessage.style.fontSize = "20px";

  result.appendChild(resultMessage);

  const score = document.createElement("p");

  score.textContent = `Player Score: ${humanScore}. Computer Score: ${computerScore}. Tie Count: ${tieCount}.`;

  score.style.fontSize = "20px";

  result.appendChild(score);

  setTimeout(() => {
    rock.style.color = "";
  }, 200);

  winner();
});

const paper = document.querySelector(".btn2");

paper.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const humanSelection = "paper";

  paper.classList.add("paper");
  paper.style.color = "red";

  const resultMessage = document.createElement("p");

  resultMessage.textContent = `You choose ${humanSelection}. The computer chooses ${computerSelection}. ${playRound(
    humanSelection,
    computerSelection
  )}`;

  resultMessage.style.fontSize = "20px";

  result.appendChild(resultMessage);

  const score = document.createElement("p");

  score.textContent = `Player Score: ${humanScore}. Computer Score: ${computerScore}. Tie Count: ${tieCount}.`;

  score.style.fontSize = "20px";

  result.appendChild(score);

  setTimeout(() => {
    paper.style.color = "";
  }, 200);

  winner();
});

const scissors = document.querySelector(".btn3");

scissors.addEventListener("click", () => {
  const computerSelection = getComputerChoice();
  const humanSelection = "scissors";

  scissors.classList.add("scissors");
  scissors.style.color = "red";

  const resultMessage = document.createElement("p");

  resultMessage.textContent = `You choose ${humanSelection}. The computer chooses ${computerSelection}. ${playRound(
    humanSelection,
    computerSelection
  )}`;

  resultMessage.style.fontSize = "20px";

  result.appendChild(resultMessage);

  const score = document.createElement("p");

  score.textContent = `Player Score: ${humanScore}. Computer Score: ${computerScore}. Tie Count: ${tieCount}.`;

  score.style.fontSize = "20px";

  result.appendChild(score);

  setTimeout(() => {
    scissors.style.color = "";
  }, 200);

  winner();
});

function winner() {
  if (humanScore === 5) {
    const confirmation = confirm(
      "You won! Your score was 5! Do you want to play again?"
    );
    if (confirmation) {
      location.reload();
    } else {
      alert("Thank you for playing!");
    }
  } else if (computerScore === 5) {
    const confirmation = confirm(
      "You lost! The computer's score was 5! Do you want to play again?"
    );
    if (confirmation) {
      location.reload();
    } else {
      alert("Thank you for playing!");
    }
  }
}
