function getComputerChoice () {
    var choices = ["Rock", "Paper", "Scissors"];
    var randomChoice = Math.floor(Math.random()*choices.length);
    return choices[randomChoice];
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

function updateScores(playerScore, computerScore){
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
}

function updateResults(result) {
    document.getElementById("results").textContent = result;
}

function game() {
    var playerScore = 0;
    var computerScore = 0;

    document.querySelectorAll("#choices button").forEach(button => {
        button.addEventListener("click", function() {
            var playerChoice = button.textContent;
            var computerChoice = getComputerChoice();
            var result = playRound(playerChoice,computerChoice);

            if (result.includes("You Win")) {
                playerScore++;
            } else if(result.includes("You Lose")) {
                computerScore++;
            }
            updateScores(playerScore,computerScore);
            updateResults(result);

            if(playerScore === 5 || computerScore === 5) {
                if(playerScore>computerScore) {
                    alert("You won the game! Felicidades!");
                } else if(playerScore<computerScore) {
                    alert("You lost the game perdón :(");
                } else {
                    alert("Its a tie! The game ended with a draw.");
                }
                //Reset the scores for new game
                playerScore=0;
                computerScore=0;
                updateScores(playerScore,computerScore);
            }
        });
        });
    }
game();