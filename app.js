const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const gameResult_div = document.querySelector('.game-result');  
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

function game(userChoice) { 
     
}
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}

// don't forget to include function or will not log to console
console.log(getComputerChoice());


function main() {
    rock.addEventListener('click', function () {
        game("rock");
    })
    paper.addEventListener('click', function () {
        game("paper");
    })
    scissors.addEventListener('click', function () {
        game("scissors");
    })
}
// make sure to include this function or will not work correctly - no loggingt oconsole without //
main();
