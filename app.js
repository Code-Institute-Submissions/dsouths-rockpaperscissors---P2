const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const gameResult_div = document.querySelector('.game-result');  
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

rock.addEventListener('click', function () {
    console.log('You picked ROCK!');
})
paper.addEventListener('click', function () {
    console.log('You picked PAPER!');
})
scissors.addEventListener('click', function () {
    console.log('You picked SCISSORS!');
})

