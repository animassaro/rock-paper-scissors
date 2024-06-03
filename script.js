//Get player choice
//Get computer choice
//Compare choices
//If player wins, congratulate
//If computer wins, try again

//saying "you lose, paper beats rock" when computer picks scissors andplayer picks rock. should be player wins.
//saying draw when player chooses rock and computer chooses paper.
//player paper vs comp rock draws incorrectly
//player peaper vs comp rock shows win, but against scissors
//player rock beats comp scissors correctly
//player and comp rock draws correctly


let humanScore = 0;
let computerScore = 0;

playRound();

console.log(humanScore);
console.log(computerScore);

function getComputerChoice(){
    let choice = Math.random();
    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";

    if(choice <= .3){
        return rock;
    }else if(choice >= .3 && choice <= .6){
        return paper;
    }else{
        return scissors;
    }
}

function getHumanChoice(){
    let input = prompt("Rock, paper, or scissors?");
    input = input.toLowerCase();
    return input;
}

function playRound(humanChoice, computerChoice){
    let humChoice = getHumanChoice();
    let compChoice = getComputerChoice();
    console.log("Player chose: "+ humChoice);
    console.log("Computer chose: " + compChoice);
    if(humChoice === compChoice){
        console.log("Draw! Try again!");
    }else if(humChoice == "rock" && compChoice == "scissors"){
        console.log("You win! Rock beats scissors!")
        humanScore++;
   } else if (humChoice == "scissors" && compChoice == "paper"){
        console.log("You win! Scissors beats paper!");
        humanScore++;
   } else if (humChoice == "paper" && compChoice == "rock"){
        console.log ("You win! Paper beats rock!");
        humanScore++;
   }else {
        console.log("You lose! " + compChoice + " beats " + humChoice + "! :( Try again!");
        computerScore++;
   }

}

