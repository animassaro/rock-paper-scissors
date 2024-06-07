
//announce winner


const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnScissors = document.getElementById("scissors");
const results = document.getElementById("results");
const playerScore = document.getElementById("pScore");
const cpuScore = document.getElementById("cScore");
const h1 = document.getElementById("h1");

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
    const end = document.createElement("h2");

    let pValue = Number(playerScore.innerText);
    let cValue = Number(cpuScore.innerText);
    let newPValue = 0;
    let newCValue = 0;

    results.appendChild(choices);
    choices.textContent = "Player selected " + humChoice + " and Computer selected " + compChoice + ".";

        if(humChoice === compChoice){
            results.appendChild(resultsTxt);
            resultsTxt.textContent = "Draw! Try again!";
            
        }else if(humChoice == "rock" && compChoice == "scissors"){
            results.appendChild(resultsTxt);
            resultsTxt.textContent = "You win! Rock beats scissors!";
            newPValue = pValue + 1;
            playerScore.innerText = newPValue.toString();
    } else if (humChoice == "scissors" && compChoice == "paper"){
            results.appendChild(resultsTxt);
            resultsTxt.textContent = "You win! Scissors beats paper!";
            newPValue = pValue + 1;
            playerScore.innerText = newPValue.toString();
    } else if (humChoice == "paper" && compChoice == "rock"){
            results.appendChild(resultsTxt);
            resultsTxt.textContent = "You win! Paper beats rock!";
            newPValue = pValue + 1;
            playerScore.innerText = newPValue.toString();
    }else {
            results.appendChild(resultsTxt);
            resultsTxt.textContent = "You lose! " + compChoice + " beats " + humChoice + "! :( Try again!";
            newCValue = cValue + 1;
            cpuScore.innerText = newCValue.toString();
    }

    if (newPValue == 5 || newCValue == 5){
        if (newPValue > newCValue){
            h1.appendChild(end);
            end.textContent = "Congrats! You won!"
        } else if (newCValue > newPValue){
            h1.appendChild(end);
            end.textContent = "Sorry, you lost! :("
        }
    }

}

getHumanChoice();


/*function playGame(score){
   // let humanScore = 0;
    //let computerScore = 0;
    const end = document.createElement("h2");

    let pValue = Number(playerScore.innerText);
    let cValue = Number(cpuScore.innerText);
    let newPValue = 0;
    let newCValue = 0;
//for(let i = 0; i <5; i++){
        let win = playRound();
        if (win == true){
            newPValue = pValue + 1;
            playerScore.innerText = newPValue.toString();
        }else if (win == false){
            newCValue = cValue + 1;
            cpuScore.innerText = newCValue.toString();
        }

        if (newPValue == 5 || newCValue == 5){
            if (newPValue > newCValue){
                h1.appendChild(end);
                end.textContent = "Congrats! You won!"
            } else if (newCValue > newPValue){
                h1.appendChild(end);
                end.textContent = "Sorry, you lost! :("
            }
        }
    //}       
}*/