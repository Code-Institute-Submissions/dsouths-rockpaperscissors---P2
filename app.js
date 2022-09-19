const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const gameResult_div = document.querySelector('.game-result');  
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = (Math.floor(Math.random() * 3));
    // returns element rather than random number//
    return choices[randomNumber];
}

function game(userChoice) { 
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            console.log("You win!!")
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            console.log("You lose!!")
            break;   
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            console.log("It's a draw!!")
            break;      
    }
       
}


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
