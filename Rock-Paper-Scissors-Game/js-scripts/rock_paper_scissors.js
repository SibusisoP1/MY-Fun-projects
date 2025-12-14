let score = JSON.parse(localStorage.getItem("score")) || {
  win: 0,
  ties: 0,
  loses: 0,
};

updateScoreElement();

function updateScore(result) {
  if (result === "Tie") {
    return (score.ties += 1);
  } else if (result === "you lose") {
    return (score.loses += 1);
  } else if (result === "you win") {
    return (score.win += 1);
  }
}

function playGame(playerMove, computerMove) {
  let result = "";

  if (playerMove === "rock") {
    if (computerMove === "Rock") {
      result = "Tie";
    } else if (computerMove === "Paper") {
      result = "you lose";
    } else if (computerMove === "Scissors") {
      result = "you win";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "Paper") {
      result = "Tie";
    } else if (computerMove === "Scissors") {
      result = "you lose";
    } else if (computerMove === "rock") {
      result = "you win";
    }
  } else if (playerMove === "scissors") {
    if (computerMove === "Scissors") {
      result = "Tie";
    } else if (computerMove === "rock") {
      result = "you lose";
    } else if (computerMove === "Paper") {
      result = "you win";
    }
  }

  updateScore(result);
  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();

  document.querySelector(
    ".js-moves"
  ).innerHTML = ` you <img src="images/${playerMove}-emoji.png" class="css-move-icon" /><img
        src="images/${computerMove}-emoji.png"
        class="css-move-icon"
      />computer`;

  document.querySelector(".js-result").innerHTML = `${result}`;
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `wins : ${score.win} , loses:${score.loses} , ties:${score.ties}`;
}

function pickComputerMove() {
  let computerMove = "";
  const randomNumber = Math.random();

  if (0 <= randomNumber < 1 / 3) {
    computerMove = "Rock";
  } else if (1 / 3 <= randomNumber < 2 / 3) {
    computerMove = "Paper";
  } else if (2 / 3 <= randomNumber <= 1) {
    computerMove = "Scissors";
  }

  return computerMove;
}
