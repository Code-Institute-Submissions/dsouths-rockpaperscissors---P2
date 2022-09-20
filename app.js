let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const gameResult_p = document.querySelector('.game-result > p');  
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

function getComputerChoice() { 
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = (Math.floor(Math.random() * 3));
    // returns element rather than random number//
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    console.log(user);
    console.log(computer);
}

function lose() {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    
}

function draw() {
    console.log("draw")
}

function game(userChoice) { 
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, computerChoice);
            break;   
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, computerChoice);
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
