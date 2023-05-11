/* create function getComputerChoice, returns rock paper or scissor
create function that begins rock paper scissors game
    playerSelection and computer Selection parameters
*/



function getComputerChoice() {
    
    let options = [
        'rock',
        'paper',
        'scissors'
    ]

    let randomIndex = Math.floor(Math.random()*options.length);
    
    return options[randomIndex];
}

function game() {

    let roundOne = true;
    let playerScore = 0
    let computerScore = 0

    function playRound(playerSelection, computerSelection) {

        let validList = [
            'rock',
            'paper',
            'scissors'
        ]

        computerSelection = getComputerChoice();

        console.log(getComputerChoice());
        
        if(roundOne == true) {   
            playerSelection = prompt("Hello! Welcome to Rock-Paper-Scissors, best of 5! Type your move in the box: ").toLowerCase();
        }else {
            playerSelection = prompt("Your move: ")
        }
       
        
    
        if (validList.includes(playerSelection)) {
    
            if (playerSelection === computerSelection) {
    
                console.log(`You and the CPU picked ${computerSelection}, it's a tie!`), roundOne == false;
    
            } else if((playerSelection == 'rock' && computerSelection == 'scissors') || 
                    
                (playerSelection == 'scissors' && computerSelection == 'paper') ||
                    
                (playerSelection == 'paper' && computerSelection == 'rock')) {
    
                console.log(`${playerSelection} beats ${computerSelection}, you win!`), roundOne == false, playerScore++;
                    
            } else {
                
                console.log(`${computerSelection} beats ${playerSelection}, you lose!`), roundOne == false, computerScore++;
            }
            
        } else {
            
            while(validList.includes(playerSelection) == false) {
                playerSelection = prompt("Your possible moves are rock, paper, or scissors. Please try again: ").toLowerCase();
            }
        }  
    } 
    
    
    while(playerScore < 3 && computerScore < 3) {

        playRound();
        console.log(`Score: You - ${playerScore} | CPU - ${computerScore}`);
        roundOne == false;
     
    }

    if(playerScore > computerScore) {
        console.log(`Congratulations, you win! Final score: ${playerScore} to ${computerScore}`)
    } else if(playerScore < computerScore) {
        console.log(`Game over, the computer wins! Final score: ${playerScore} to ${computerScore}`)
    }
}  
game();



