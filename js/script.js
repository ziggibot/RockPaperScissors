




/* player buttons and event listeners*/
const buttonRock = document.querySelector('#button_rock');
const buttonPaper = document.querySelector('#button_paper');
const buttonScissors = document.querySelector('#button_scissors');

buttonRock.currentTime = 0;
buttonPaper.currentTime = 0;
buttonScissors.currentTime = 0;

buttonRock.addEventListener('click', playTurn);
buttonPaper.addEventListener('click', playTurn);
buttonScissors.addEventListener('click', playTurn);

let scoreCount = 0;

const rpsChoices = ["rock", "paper", "scissors"];

let resultDisplay = document.querySelector('#display_result');

function getComputerChoice(rpsChoices) {
    return rpsChoices[Math.floor(Math.random() * rpsChoices.length)];
};

/* play a turn */
function playTurn(playerSelection, computerSelection) {

    playerSelection = this.value;
    computerSelection = getComputerChoice(rpsChoices);

    if ((computerSelection === playerSelection) && scoreCount < 5) {
        resultDisplay.textContent = playerSelection + ' and ' + computerSelection + '! It\'s a draw! ' + 'Your current score is: ' + scoreCount;

    } else if (((computerSelection === "paper" && playerSelection === "scissors") ||
        (computerSelection === "rock" && playerSelection === "paper") ||
        (computerSelection === "scissors" && playerSelection === "rock")) && scoreCount < 5) {
        scoreCount += 1;
        resultDisplay.textContent = playerSelection + ' beats ' + computerSelection + '! You win this round! ' + 'Your current score is: ' + scoreCount;

    } else if (((playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "scissors" && computerSelection === "rock")) && scoreCount < 5) {
        scoreCount -= 1;
        resultDisplay.textContent = computerSelection + ' beats ' + playerSelection + '! You lose this round! ' + 'Your current score is: ' + scoreCount;
    } else if (scoreCount >= 5) {
        resultDisplay.textContent = 'Congratulations, you won the match!';
        buttonRock.removeEventListener('click', playTurn);
        buttonPaper.removeEventListener('click', playTurn);
        buttonScissors.removeEventListener('click', playTurn);

    } else if ((scoreCount - 5) <= 0) {
        resultDisplay.textContent = 'Sorry, the computer won the match!';
        buttonRock.removeEventListener('click', playTurn);
        buttonPaper.removeEventListener('click', playTurn);
        buttonScissors.removeEventListener('click', playTurn);
    }
};