let choices = ['rock', 'paper', 'scissors'];
let computerSelection = null;
let playerSelection = '';
let playerCounter = 0;
let computerCounter = 0;


const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach(button => button.addEventListener('click', playRound));


function computerPlay(){
    let choice = Math.floor(Math.random()*choices.length)
    console.log(choices[choice]);
    return choice;
}

function player(playerSelection){
    switch (true) {
        case playerSelection === 'rock':
            return 0;
        case playerSelection === 'paper':
            return 1;
        default:
            return 2;
    }
}

function computerWinMsg(){
    computerCounter += 1;
    let msg = 'Computer Won This Round!';
    console.log(msg);
    alert(msg);
    return msg;
}

function playerWinMsg(){
    playerCounter += 1;
    let msg = 'You Won This Round!'
    console.log(msg);
    alert(msg);
    return msg;
}

function playRound(e){
    let button = e.target;
    let playerSelection = button.textContent;
    playerSelection = player(playerSelection.toLowerCase());
    let computerSelection = computerPlay();
    switch (true){
        case playerSelection === computerSelection:
            let msg = 'It\'s A Tie';
            console.log(msg);
            alert(msg);
            return msg;
        case (playerSelection === 0 || computerSelection === 0) && (playerSelection === 2 || computerSelection === 2):
            if (playerSelection === 0){
                playerWinMsg();
                break;
            }else {
                computerWinMsg();
                break;
            }
        case playerSelection > computerSelection:
            playerWinMsg();
            break;
        default:
            computerWinMsg();
    }
    result(playerCounter, computerCounter);
}
function result(playerCounter, computerCounter){

    if (playerCounter === 5 || computerCounter === 5){
        if (playerCounter === 5){
            let msg = 'You Won The Game, Congratulations';
            console.log(msg);
            alert(msg);
            return msg;
        }else{
            let msg = 'Sorry You Lost, Computer Won';
            console.log(msg);
            alert(msg);
            return msg;
        }
    }
}

