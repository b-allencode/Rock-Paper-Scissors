/*
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const computerScore = document.querySelector('.computerScore');
const playerScore = document.querySelector('.playerScore');

let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
    computerScore.textContent = 
    playerScore.textContent = updateScoreboard
}));


function computerTurn(){
    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
            break;
        case 3:
            computer = "SCISSORS";
            break;
        }
}

function checkWinner() {
        if(player == computer){
            return "Draw!";
        } 
        else if(computer == "ROCK"){
            return (player == "PAPER") ? "You Win!"  : "You Lose!" 
        } 
        else if(computer == "PAPER"){
            return (player == "SCISSORS") ? "You Win!"  : "You Lose!" 
        } 
        else if(computer == "SCISSORS"){
            return (player == "ROCK") ? "You Win!"  : "You Lose!" 
        }
    


}

function updateScoreboard(computerScore, playerScore) {
    
    d
}
if(playerScore < 5 || computerScore < 5) {
    if(checkWinner() == "You Win!") {
        playerScore += 1
    } else if(checkWinner() == "You Lose!") {
        computerScore += 1
    }
    updateScoreboard(computerScore, playerScore);
}else if(playerScore == 5) {
    console.log('Congratulations!');
}else if(computerScore == 5) {
    console.log('You lose!');
}

*/


