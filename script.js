//create a button for each choice
//if rock is clicked, store this selection in a variable
//if paper is clicked, store this selection in a variable
//if scissors is clicked, store this selection in a variable
//return this variable to the 'play game' function
const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnScissors = document.getElementById("scissors");


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
    btnRock.addEventListener('click', function(){
        playRound("rock");
    })

    btnPaper.addEventListener('click', function(){
        playRound("paper");
    })

    btnScissors.addEventListener('click', function(){
        playRound("scissors");
    })
}

function playRound(humChoice, compChoice){
    let win = false;
    compChoice = getComputerChoice();

    console.log("Player selected " + humChoice);
    console.log("Computer selected " + compChoice);
    
    if(humChoice === compChoice){
        console.log("Draw! Try again!");
        win = null;
    }else if(humChoice == "rock" && compChoice == "scissors"){
        console.log("You win! Rock beats scissors!")
        win = true;
   } else if (humChoice == "scissors" && compChoice == "paper"){
        console.log("You win! Scissors beats paper!");
        win = true;
   } else if (humChoice == "paper" && compChoice == "rock"){
        console.log ("You win! Paper beats rock!");
        win = true;
   }else {
        console.log("You lose! " + compChoice + " beats " + humChoice + "! :( Try again!");
   }
   return win;
}

getHumanChoice();

/*


playRound();
function playGame(score){
    let humanScore = 0;
    let computerScore = 0;

    //for(let i = 0; i <5; i++){
        let win = playRound();
        if (win == true){
            humanScore++;
        }else if (win == false){
            computerScore++;
        }
    //}    

    console.log("Human score is "+humanScore);
    console.log("Computer score is "+computerScore);
    
}*/