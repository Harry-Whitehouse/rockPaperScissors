//rock, paper, scissors
const startGameBtn = document.getElementById('start-game-btn');

// const start = function() { //"anonymous function"
//     console.log('Game is starting...');
// };

/*the above code shows an example of an anonomous function.
however, we can also call this function inside the add event listener
method, which will save us code.*/

startGameBtn.addEventListener('click', function startGame() {
    /*althought you cant call the name of an anonomous function,
    its worth naming them for debugging purposes*/
    console.log('Game is starting...');
});