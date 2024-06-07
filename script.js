
//announce winner


const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnScissors = document.getElementById("scissors");
const results = document.getElementById("results");
const playerScore = document.getElementById("pScore");
const cpuScore = document.getElementById("cScore");

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
   
    const choices = document.createElement("p");
    const resultsTxt = document.createElement("p");
    compChoice = getComputerChoice();

    results.appendChild(choices);
    choices.textContent = "Player selected " + humChoice + " and Computer selected " + compChoice + ".";

    if(humChoice === compChoice){
        results.appendChild(resultsTxt);
        resultsTxt.textContent = "Draw! Try again!";
    }else if(humChoice == "rock" && compChoice == "scissors"){
        results.appendChild(resultsTxt);
        resultsTxt.textContent = "You win! Rock beats scissors!";
        
   } else if (humChoice == "scissors" && compChoice == "paper"){
        results.appendChild(resultsTxt);
        resultsTxt.textContent = "You win! Scissors beats paper!";
   } else if (humChoice == "paper" && compChoice == "rock"){
        results.appendChild(resultsTxt);
        resultsTxt.textContent = "You win! Paper beats rock!";
   }else {
        results.appendChild(resultsTxt);
        resultsTxt.textContent = "You lose! " + compChoice + " beats " + humChoice + "! :( Try again!";
   }
}

getHumanChoice();

function playGame(score){
    let humanScore = 0;
    let computerScore = 0;

    let pValue = Number(playerScore.innerText);
    let cValue = Number(cpuScore.innerText);
    let newPValue = 0;
    let newCValue = 0;

    for(let i = 0; i <5; i++){
        let win = playRound();
        if (win == true){
            newPValue = pValue + 1;
            playerScore.innerText = newPValue.toString();
        }else if (win == false){
            newCValue = cValue + 1;
            cpuScore.innerText = newCValue.toString();
        }
    }       
}