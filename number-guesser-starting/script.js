let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random()*10);


const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
    let humanDist = Math.abs(humanGuess - secretTarget);
    let computerDist = Math.abs(computerGuess - secretTarget);
    if (humanDist <= computerDist) return true;
    else return false;
}


const updateScore = winner => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    } else console.log('invalid winner');
}

const advanceRound = () => {
    currentRoundNumber++;
}
