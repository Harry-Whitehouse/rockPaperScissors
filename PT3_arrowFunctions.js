//rock, paper, scissors
const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const RESULT_DRAW = 'It\'s a draw!';
const RESULT_PLAYER_WINS = 'You Win!';
const RESULT_COMPUTER_WINS = 'Computer Won!';

const DEFAULT_USER_CHOICE = ROCK;
let gameIsrunning = false;

const getPlayerChoice = function() {
    const selection = prompt(
        `${ROCK},${PAPER} or ${SCISSORS}?`, '').toUpperCase();
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


// arrow functions 
/*

if you have an arrow function with only one (1) expression,
 you can omit the curly braces and the return keyword. this can 
 save code and time. with more than one expression,
  curly braces are required.
 
 a clearer example would be:

 const add = (a,b) => a+b;

 as opposed to:

 const add = function(a,b) {
return a+b;
 }

 General syntax as follows:

 (argument1, argument2) => {body}

 if you have no arguments, you must still use parenthesis, 
 however, if you only have one (1) argument, you can omit
 the parenthesis.

 */

const getWinner = (cChoice, pChoice) =>
    cChoice === pChoice ?
    RESULT_DRAW :
    (pChoice === ROCK && cChoice) === SCISSORS ||
    (pChoice === SCISSORS && cChoice) === PAPER ||
    (pChoice === PAPER && cChoice) === ROCK ?
    RESULT_PLAYER_WINS :
    RESULT_COMPUTER_WINS;

//     if (pChoice === cChoice) {
//         return RESULT_DRAW;
//     } else if (
//     (pChoice === ROCK && cChoice === SCISSORS) ||
//     (pChoice === SCISSORS && cChoice === PAPER) ||
//     (pChoice === PAPER && cChoice === ROCK)
// ) {
//     return RESULT_PLAYER_WINS;
// } else {
//     return RESULT_COMPUTER_WINS;
// }

startGameBtn.addEventListener('click', () => {
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
    alert(`Computer chose: ${computerChoice}`);
    alert(winner);
});