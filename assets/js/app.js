//variables have been defined outside the functions to allow for global scope
let userScore = 0;
let computerScore = 0;
let isGameOver = false;

// to allow game to finish when user or player reaches 10 points
const max_points = 10;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const gameResult_p = document.querySelector('.game-result > p');
const restart = document.querySelector('.restart');  

// game choices
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

// play game function containing isgameover function, also determines how user wins, loses or draws 
function game(userChoice) { 
    if(isGameOver) return;
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
    gameOver();
}
game();

// gets computer choice which is random selection of one of the choices  
function getComputerChoice() { 
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = (Math.floor(Math.random() * 3));
    // returns element rather than random number//
    return choices[randomNumber];
}

//increments user score by 1 if they win & displays the result of which userChoice beats which computerChoice
function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    gameResult_p.innerHTML = userChoice + " beats " + computerChoice + "...you WIN!!😁";
}

//increments computer score by 1 if they win & displays the result of which computerChoice beats which userChoice
function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    gameResult_p.innerHTML = userChoice + " loses to " + computerChoice + "...you LOSE!!😭";
}

function draw(userChoice, computerChoice) {
    gameResult_p.innerHTML = "it's a DRAW.....try again!!";
}

//these event listeners are created for each of the possible user selections when "clicked" - also contains the restart game call to action
function buttonClick() {
    rock.addEventListener('click', function () {
        game("rock");
    });
    paper.addEventListener('click', function () {
        game("paper");
    });
    scissors.addEventListener('click', function () {
        game("scissors");
    });
    restart.addEventListener('click', function () {
        restartGame();
    });
}

// game over function determines who is the winner after max points reached, gives a prompt with short blurb about winner/loser for user & determines the isGameOver state to be true to allow game to be restarted
function gameOver() {
    if(userScore === max_points && computerScore < max_points){
        alert('You WON the game!! Congrats!');
        userScore = 0;
        computerScore = 0;
        isGameOver = true;
    }
    else if(userScore < max_points && computerScore === max_points){
        alert('You LOST the game!! Better luck next time...');
        userScore = 0;
        computerScore = 0;
        isGameOver = true;
    }
    else if(userScore === max_points && computerScore === max_points){
        alert('The game is a DRAW, wanna play again?');
        userScore = 0;
        computerScore = 0;
        isGameOver = true;
    }
    if(isGameOver){
        restart.style.display = 'flex';
    }
    else {
        restart.style.display = "none";
    }
}
//when function has run the isGameOver is false as the game is currently running
function restartGame() {
    isGameOver = false;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerText = computerScore;
}

buttonClick();







