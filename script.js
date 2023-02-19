// global variables, soon will be used
let rock = document.querySelector('.rock-user'), 
paper = document.querySelector('.paper-user'), 
scissor = document.querySelector('.scissors-user'),
resp = document.querySelector('.result');


// function to return an random number
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//   function to make the script take an random number
function getComputerChoice() {
    let beholder = getRandomInt(3), result = ''

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

/* 
This would work fine in other circunstances
but how the addeventlistener dont permisse 
the use of functions with parameters has a second parameter
the first ideia is useless.

function getUserChoice(choice){
    let result = `${choice}`
    console.log(choice)

    return result.toUpperCase()
}
*/

function jogo(a){

    let pc = getComputerChoice()
    // let user =  getUserChoice('rocK')
   
    if((pc == 'ROCK' && a == 'ROCK') 
    || (pc == 'PAPER' && a == 'PAPER') 
    || (pc == 'SCISSORS' && a == 'SCISSORS')){
        // action
        console.log('TIE')
        resp.innerHTML = `TIE`

    } else if ((pc == 'ROCK' && a != 'PAPER') 
        || (pc == 'PAPER' && a != 'SCISSORS')
        || (pc == 'SCISSORS' && a != 'ROCK')){
                // action
        console.log('PC WINS')
        resp.innerHTML = `PC WINS`
    } else {console.log('USER WINS'); resp.innerHTML = `USER WINS`}
}
// jogo()

// configure the user choices and show the results
rock.addEventListener('click', () => {
    let a = `ROCK`
    console.log(a)
    // a.toUpperCase()
    return jogo(a)
})

paper.addEventListener('click', () => {
    let a = `PAPER`
    console.log(a)
    // a.toUpperCase()
    return jogo(a)
})

scissor.addEventListener('click', () => {
    let a = `SCISSORS`
    console.log(a)
    // a.toUpperCase()
    return jogo(a)
})
