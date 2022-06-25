let choices = ['rock', 'paper', 'scissors'];
let playerCounter = 0;
let computerCounter = 0;
let computerSelection = null;


const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach(button => button.addEventListener('click', playRound));
buttons.forEach(button =>{
   button.parentElement.addEventListener('transitionend', removeTransition)
});

const computerButtons = Array.from(document.querySelectorAll(`button[disabled]`));
console.log(computerButtons);


const wrapper_1 = document.querySelector('.wrapper-1');
let playerScore = document.createElement('p');
wrapper_1.appendChild(playerScore);

const wrapper_2 = document.querySelector('.wrapper-2');
let computerScore = document.createElement('p');
wrapper_2.appendChild(computerScore);


let msg = document.querySelector('#msg');
let msgDiv = document.querySelector('.msg')



function playRound(e){
    console.log(this);
    let button = e.target;
    let playerSelection = button.textContent;
    playerSelection = player(playerSelection.toLowerCase());
    computerSelection = computerPlay();
    console.log(button.parentElement);

    button.parentElement.classList.add('pressed');
    addClassToComputer();

    switch (true){
        case playerSelection === computerSelection:
            msg.textContent = 'It\'s a tie';
            console.log(msg);
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
    playerScore.textContent = playerCounter;
    computerScore.textContent = computerCounter;
    let res = result(playerCounter, computerCounter);

    if (res) tryAgain();

}


function tryAgain(){

    let but = document.createElement('button');
    but.textContent = 'Try Again';
    but.style.cssText = "width: 10rem; height: fit-content; border-radius: 5px;"
    but.addEventListener('click', () => {
        buttons.forEach(button => button.removeAttribute('disabled'));
        computerButtons.forEach(button => {
            button.setAttribute('disabled', 'disabled');
        });
        playerCounter = 0;
        computerCounter = 0;
        playerScore.textContent = playerCounter;
        computerScore.textContent = computerCounter;
        msgDiv.removeChild(but);
        msg.textContent = 'Start';

    });
    msgDiv.appendChild(but);

}


function removeTransition(e){
    console.log(e.target);
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('pressed');
}

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
    msg.textContent = 'Computer won this round';
    console.log(msg);
    return msg;
}

function playerWinMsg(){
    playerCounter += 1;
    msg.textContent = 'You won this round!'
    console.log(msg);
    return msg;
}


function addClassToComputer(){
    computerButtons.forEach(button => {
       if (choices[computerSelection] === button.textContent.toLowerCase()) {
           button.parentElement.classList.add('pressed');
       }
    });
}

function result(playerCounter, computerCounter){

    if (playerCounter === 5 || computerCounter === 5){
        if (playerCounter === 5){
            msg.textContent = 'You won the game, congratulations';
            console.log(msg);
        }else{
            msg.textContent = 'Sorry you lost, computer won';
            console.log(msg);
        }
        buttons.forEach(button => {
            button.setAttribute('disabled', 'disabled');
        });
        return true;
    }
}

playerScore.textContent = playerCounter;
computerScore.textContent = computerCounter;


