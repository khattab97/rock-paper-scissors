let choices = ['rock', 'paper', 'scissors'];
let computerSelection = null;
let playerSelection = '';
let playerCounter = 0;
let computerCounter = 0;


function computerPlay(){
    let choice = Math.floor(Math.random()*choices.length)
    console.log(choices[choice]);
    return choice;
}

function player(){
    while (!choices.includes(playerSelection)){
         playerSelection = prompt('Enter Rock, Paper, or Scissors', '');
    }
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection);
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

function playRound(playerSelection, computerSelection){
    let msg = '';
    console.log(playerSelection);
    console.log(computerSelection);
    switch (true){
        case playerSelection === computerSelection:
            msg = 'It\'s A Tie';
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
}
function game(){
    while (true){
        playerSelection = player();
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        if (playerCounter === 3 || computerCounter ===3){
            if (playerCounter === 3){
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
}

game();