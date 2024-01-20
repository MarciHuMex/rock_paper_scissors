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

var playerChoice = getPlayerSelection();
console.log("Player's choice:" + playerChoice);

if (playerChoice!== null) {
    var computerChoice = getComputerChoice();
    console.log("Computer's choice: " + computerChoice);

    var result = playRound(computerChoice,playerChoice);
    console.log(result);
} else {
    console.log("Invalid input. Cannot play a round.");
}
