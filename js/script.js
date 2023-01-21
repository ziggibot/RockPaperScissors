const rpsChoices = ["rock", "paper", "scissors"];

function game() {
    for (let i = 0; i < 5; i++) {
        function getComputerChoice(rpsChoices) {
            return rpsChoices[Math.floor(Math.random() * rpsChoices.length)];
        };
        function getPlayerChoice() {
            return prompt("Rock, paper or scissors?");
        };
        let computerSelection = getComputerChoice(rpsChoices);
        let playerInput = getPlayerChoice();
        let playerSelection = playerInput.toLowerCase();
        function turnResult(computerSelection, playerSelection) {
            if (computerSelection === playerSelection) {
                return ("It's a draw!");
            } else if (computerSelection === "paper" && playerSelection === "scissors") {
                return (playerSelection + " beats " + computerSelection + ". " + "You win this round!")
            } else if (computerSelection === "paper" && playerSelection === "rock") {
                return (computerSelection + " beats " + playerSelection + ". " + "Sorry, You lost!")
            } else if (computerSelection === "scissors" && playerSelection === "rock") {
                return (playerSelection + " beats " + computerSelection + ". " + "You win this round!")
            } else if (computerSelection === "scissors" && playerSelection === "paper") {
                return (computerSelection + " beats " + playerSelection + ". " + "Sorry, You lost!")
            } else if (computerSelection === "rock" && playerSelection === "paper") {
                return (playerSelection + " beats " + computerSelection + ". " + "You win this round!")
            } else if (computerSelection === "rock" && playerSelection === "scissors") {
                return (computerSelection + " beats " + playerSelection + ". " + "Sorry, You lost!")
            }
        };
        let thisTurn = turnResult(computerSelection, playerSelection);
        console.log(thisTurn);
        function keepScore() {
            if (thisTurn.includes("win")) {
                return ("+1");
            } else if (thisTurn.includes("lost")) {
                return ("-1");
            } else if (thisTurn.includes("draw")) {
                return ("0");
            }
        }
        let scoreCount = keepScore();
        console.log(scoreCount);
        var finalResult = (parseInt(scoreCount));
    };
    console.log(finalResult);
}

game();