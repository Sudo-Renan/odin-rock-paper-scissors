// global variables, soon will be used
let rock = 0, paper = 1, scissor = 2;


// function to return an random number
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//   function to make the script take an random number
function getComputerChoice() {
    let beholder = getRandomInt(3)
    let result = ''

    switch (beholder) {
        case 0:
            result = 'ROCK'
            console.log("Rock")
            break;

        case 1:
            result = 'PAPER'
            console.log("Paper")
            break;

        case 2:
            result = 'SCISSORS'
            console.log("Scissors")
            break;
    }
    return result   
}

function getUserChoice(){
    let result = 'PAPER'
    return result
}

function jogo(){
    let pc = getComputerChoice(), user =  getUserChoice()
   
    if((pc == 'ROCK' && user != 'PAPER') || (pc == 'PAPER' && user != 'SCISSORS') || (pc == 'SCISSORS' && user != 'ROCk')){
        console.log('COMPUTADOR GANHOU')
        
    } else console.log('USER GANHOU')
}
jogo()