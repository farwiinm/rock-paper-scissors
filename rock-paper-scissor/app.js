const computerChoiceDisplay = document.getElementById('computer-choice')
const myChoice = document.getElementById('my-choice')
const resultsChoice = document.getElementById('results')
const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice
let results

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    myChoice.innerHTML = userChoice
    generateComputerChoice()
    getResults()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1

    if (randomNumber === 1) {
        computerChoice = 'Rock'
    }


    if (randomNumber === 2) {
        computerChoice = 'Paper'
    }

    if (randomNumber === 3) {
        computerChoice = 'Scissors'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResults() {
    if (computerChoice === userChoice){
        results = `It's a draw!`
    }

    if (computerChoice === 'Rock' && userChoice === 'Scissors'){
        results = `You WIN!`
    }

    if (computerChoice === 'Rock' && userChoice === 'Paper'){
        results = `You SUCK!`
    }

    resultsChoice.innerHTML = results
}