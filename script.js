// global variables
let rock = document.querySelector('.rock-user'), 
paper = document.querySelector('.paper-user'), 
scissor = document.querySelector('.scissors-user')
resp = document.querySelector('.result');

// variables to select the pc choices
let rockPC = document.querySelector('.rock-pc'),
paperPC = document.querySelector('.paper-pc'),
scissorsPC = document.querySelector('.scissors-pc');

// variables to control the win or lose
let pcWin = 0, userWin = 0;  


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
        default: '';
    }
    return result   
}

// see the gamewinner and set the rounds
function endGame(){
    if(userWin === 5){
        alert('YOU WIN');
        userWin = 0;
        pcWin = 0;
    } else if(pcWin === 5){
        alert('YOU LOSE')
        userWin = 0;
        pcWin = 0;
    }
}

function jogo(a){
    let pc = getComputerChoice()
    if((pc == 'ROCK' && a == 'ROCK') 
    || (pc == 'PAPER' && a == 'PAPER') 
    || (pc == 'SCISSORS' && a == 'SCISSORS')){
        // action
        console.log('TIE')
        resp.innerHTML = `${userWin} X ${pcWin}`

    } else if ((pc == 'ROCK' && a != 'PAPER') 
        || (pc == 'PAPER' && a != 'SCISSORS')
        || (pc == 'SCISSORS' && a != 'ROCK')){
                // action
        console.log('PC WINS')
        // resp.innerHTML = `PC WINS`
        pcWin++;
        resp.innerHTML = `${userWin} X ${pcWin}`
        
    } else {
        console.log('USER WINS'); 
        // resp.innerHTML = `USER WINS`
        userWin++;
        resp.innerHTML = `${userWin} X ${pcWin}`
    }

    // config the style of the pc choices
    pc == 'ROCK' ? rockPC.classList.add('rock-selected') : rockPC.classList.remove('rock-selected');
    pc == 'PAPER' ? paperPC.classList.add('paper-selected') : paperPC.classList.remove('paper-selected');
    pc == 'SCISSORS' ? scissorsPC.classList.add('scissors-selected') : scissorsPC.classList.remove('scissors-selected');

    // config the style of the user choices
    /* removed cuz I made this already in the event listener
    
    a == 'ROCK' ? rock.classList.add('selected') : rock.classList.remove('selected');
    a == 'PAPER' ? paper.classList.add('selected') : paper.classList.remove('selected');
    a == 'SCISSORS' ? scissor.classList.add('selected') : scissor.classList.remove('selected');
    */

    endGame()
}

// configure the user choices and show the results
rock.addEventListener('click', () => {
    let a = `ROCK`
    console.log(a)
    // a.toUpperCase()
    scissor.removeAttribute('style', 'background-image: url(img/scissors-color.gif)')
    paper.removeAttribute('style', 'background-image: url(img/paper-color.gif)')
    

    rock.setAttribute('style', 'background-image: url(img/rock-color.gif)')
    return jogo(a)
})

paper.addEventListener('click', () => {
    let a = `PAPER`
    console.log(a)
    // a.toUpperCase()
    scissor.removeAttribute('style', 'background-image: url(img/scissors-color.gif)')
    rock.removeAttribute('style', 'background-image: url(img/rock-color.gif)')

    paper.setAttribute('style', 'background-image: url(img/paper-color.gif)')
    return jogo(a)
})

scissor.addEventListener('click', () => {
    let a = `SCISSORS`
    console.log(a)
    // a.toUpperCase()
    rock.removeAttribute('style', 'background-image: url(img/rock-color.gif)')
    paper.removeAttribute('style', 'background-image: url(img/paper-color.gif)')
    

    scissor.setAttribute('style', 'background-image: url(img/scissors-color.gif)')
    return jogo(a)
})
