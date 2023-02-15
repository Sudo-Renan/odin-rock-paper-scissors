// global variables, soon will be used
let rock = 0, paper = 1, scissor = 2;


// function to return an random number
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//   function to make the script take an random number
function getComputerChoice() {
    let beholder = getRandomInt(2)

    switch (beholder) {
        case 0:
            console.log("Rock")
            break;

        case 1:
            console.log("Paper")
            break;

        case 2:
            console.log("Scissors")
            break;
    }
}

getComputerChoice()