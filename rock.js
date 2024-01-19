function getComputerChoice () {
    var choices = ["Rock", "Paper", "Scissors"];
    var randomChoice = Math.floor(Math.random()*choices.length);
    return choices[randomChoice];
}

var computerChoice = getComputerChoice();
console.log("Computer's choice: " + computerChoice);

function getPlayerSelection() {
    const input = prompt("Choose Rock, Paper or Scissors:")
    if(input) {
        return input.toLowerCase().charAt(0).toUpperCase() + input.slice(1).toLowerCase();
    } else {
        return null;
    }
}

var playerChoice = getPlayerSelection();
console.log(playerChoice);
