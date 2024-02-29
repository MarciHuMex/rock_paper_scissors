function getComputerChoice () {
    var choices = ["Rock", "Paper", "Scissors"];
    var randomChoice = Math.floor(Math.random()*choices.length);
    return choices[randomChoice];
}

function getPlayerSelection() {
    const validChoices =["Rock", "Paper", "Scissors"];
    const lowercaseValidChoices =validChoices.map(choice => choice.toLowerCase());
    const input = prompt("Choose Rock, Paper or Scissors:")
    if(input && lowercaseValidChoices.includes(input.toLowerCase())) {
        return input.toLowerCase().charAt(0).toUpperCase() + input.slice(1).toLowerCase();
    } else {
        return null;
    }
}

function playRound (playerSelection, computerSelection) {
        if(playerSelection === computerSelection) {
            return "Its a tie! Both choose " +playerSelection+ ".";
        }
        if(
            (playerSelection==="Rock" && computerSelection === "Scissors") ||
            (playerSelection==="Paper" && computerSelection === "Rock") ||
            (playerSelection==="Scissors" && computerSelection==="Paper")
        ) {
            return "You Win " +playerSelection+ " beats " +computerSelection+ ".";
        }
        return "You Lose! " +computerSelection+ " beats " +playerSelection+ ".";
}

function game() {
    var playerScore = 0;
    var computerScore = 0;

    for (var round = 1; round <=5; round++) {
        console.log("Round " + round);

        var playerChoice = getPlayerSelection();

        if (playerChoice!== null) {
            console.log("Player's choice:" + playerChoice);
    
            var computerChoice = getComputerChoice();
            console.log("Computer's choice: " + computerChoice);

            var result = playRound(playerChoice,computerChoice);
            console.log(result);

            if(result.includes("You Win")) {
                playerScore++;
            } else if (result.includes("You Lose")) {
                computerScore++;
            }
        } else {
            console.log("Invalid input. Skipping round.");
        }
        console.log("Player Score: " + playerScore + " | Computer Score: " + computerScore);
        console.log("-------------------------------")
        }       

        if (playerScore>computerScore) {
            console.log("You won the game! Congratulation!");
        } else if(playerScore<computerScore) {
            console.log("Sorry you lost the game :(");
        } else {
            console.log("It's a tie! The game ended with a draw.")
        }
}
//game();