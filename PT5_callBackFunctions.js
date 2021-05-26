//rock, paper, scissors
const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const RESULT_DRAW = "It's a draw!";
const RESULT_PLAYER_WINS = "You Win!";
const RESULT_COMPUTER_WINS = "Computer Won!";

const DEFAULT_USER_CHOICE = ROCK;
let gameIsrunning = false;

const getPlayerChoice = () => {
    const selection = prompt(
        `${ROCK},${PAPER} or ${SCISSORS}?`,
        ""
    ).toUpperCase();
    if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
        alert(
            `"${selection}" is not a valid choice. We have chosen ${DEFAULT_USER_CHOICE} for you.`
        );
        return;
    }
    return selection;
};

const getComputerChoice = () => {
    const randomValue = Math.random(); {
        randomValue < 0.34 ?
            (compChoice = `${ROCK}`) :
            randomValue < 0.67 ?
            (compChoice = `${PAPER}`) :
            (compChoice = `${SCISSORS}`);
    }
    return compChoice;
};

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
    cChoice === pChoice ?
    RESULT_DRAW :
    (pChoice === ROCK && cChoice) === SCISSORS ||
    (pChoice === SCISSORS && cChoice) === PAPER ||
    (pChoice === PAPER && cChoice) === ROCK ?
    RESULT_PLAYER_WINS :
    RESULT_COMPUTER_WINS;

startGameBtn.addEventListener("click", () => {
    /* this is a callback function - it is a function
      passed into another function as an argument.
      it is then invoked inside the outer function to
      complete some kind of action.
      this functio  isnt called by you, it is executed by
      the browser when the click event occurs */
    if (gameIsrunning) {
        return;
    }
    gameIsrunning = true;
    console.log("Game is starting...");
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    let winner;

    if (playerChoice) {
        winner = getWinner(computerChoice, playerChoice);
    } else {
        winner = getWinner(computerChoice);
    }

    console.log(winner);
    console.log("Player choice:", playerChoice);
    console.log("Computer choice:", computerChoice);

    let message = `you picked ${
    playerChoice || DEFAULT_USER_CHOICE
  }, computer picked ${computerChoice}, you`;

    if (winner === RESULT_DRAW) {
        message = message + " drew!";
    } else if (winner === RESULT_PLAYER_WINS) {
        message = message + " won!";
    } else {
        message = message + " lost!";
    }
    alert(message);
    gameIsrunning = false;
});