function getComputerChoice (a,b,c) {
    var choices = [a,b,c];
    var randomChoice = Math.floor(Math.random()*choices.length);
    return choices[randomChoice];
}

var computerChoice = getComputerChoice("Rock", "Paper", "Scissors");
console.log("Computer's choice: " + computerChoice);