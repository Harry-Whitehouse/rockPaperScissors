//rock, paper, scissors
const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER WINS';

const DEFAULT_USER_CHOICE = ROCK;
let gameIsrunning = false;

//-----------------------------------------------------------------------------------------

//below are attempts to create a random value for when the UI is not supported.

// let RANDOM_SELECTION = [ROCK, PAPER, SCISSORS];
// let INDEX = Math.floor(Math.random() * RANDOM_SELECTION.length);
// RANDOM_SELECTION[INDEX] = DEFAULT_USER_CHOICE;

// const getDefaultUserChoice = function() {
//     const randomValue = math.random();
//     if (randomValue < 0.34) {
//         return ROCK;
//     } else if (randomValue < 0.67) {
//         return PAPER;
//     } else {
//         return SCISSORS;
//     }
// };
//-----------------------------------------------------------------------------------------

const getPlayerChoice = function() {
    const selection = prompt(
        `${ROCK},${PAPER} or ${SCISSORS}?`, '').toUpperCase(); //changes user input to all caps regardless of how it is entered.
    if (
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
    ) {
        alert(`"${selection}" is not a valid choice. We have chosen ${DEFAULT_USER_CHOICE} for you.`);
        return DEFAULT_USER_CHOICE;
    }
    return selection;
}

const getComputerChoice = function() {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
};

const getWinner = function(cChoice, pChoice) {
    if (pChoice === cChoice) {
        return RESULT_DRAW;
        // alert 'It\'s a draw!
    } else if (
        pChoice === ROCK && cChoice === SCISSORS ||
        pChoice === SCISSORS && cChoice === PAPER ||
        pChoice === PAPER && cChoice === ROCK
    ) {
        return RESULT_PLAYER_WINS;
        // alert 'Computer Wins!'
    } else {
        return RESULT_COMPUTER_WINS;
        // alert 'you Win!'
    }
};

startGameBtn.addEventListener('click', function() {
    if (gameIsrunning) {
        return;
    }
    gameIsrunning = true;
    console.log('Game is starting...');
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    const winner = getWinner(computerChoice, playerChoice);
    console.log(winner);
    console.log('Player choice:', playerChoice)
    console.log('Computer choice:', computerChoice);
});