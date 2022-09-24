let userScore = 0;
let computerScore = 0;
let moves = 0;
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
    computerScore_span.innerHTML = computerScore;
    gameResult_p.innerHTML = userChoice + " beats " + computerChoice + "...you WIN!!😁";
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    gameResult_p.innerHTML = userChoice + " loses to " + computerChoice + "...you LOSE!!😭";
}

function draw(userChoice, computerChoice) {
    gameResult_p.innerHTML = "it's a DRAW.....try again!!"
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
// make sure to include this function or will not work correctly - no logging to console without //
main();

function gameOver() {
    if(userScore === 10 && computerScore < 10){
        alert('You WON the game!! Congrats!')
        userScore = 0;
        computerScore =0;
    }
    
    if(userScore <10 && computerScore === 10){
        alert('You LOST the game!! Better luck next time...')
        userScore = 0;
        computerScore =0;
    }
}
gameOver();





