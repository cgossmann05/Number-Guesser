let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    const target = Math.floor(Math.random() * 10);
    return target;
}

const compareGuesses = (human, computer, target) => {
    const hDifference = Math.abs(target - human);
    const cDifference = Math.abs(target - computer);
    if (hDifference <= cDifference) {
        return true;
    } else {
        return false;
    }
}

const updateScore = str => {
    switch (str) {
        case 'human':
            humanScore ++;
            break;
        case 'computer':
            computerScore ++;
            break;
    }
}

const advanceRound = () => {
    currentRoundNumber ++;
}