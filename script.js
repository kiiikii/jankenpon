const bodydiv = document.querySelector('body');

const div = document.createElement('div');

const pbody = document.createElement('p');
pbody.id = 'result';

const scoreBoard = document.createElement('p');
scoreBoard.id ='scoreBoard';

bodydiv.appendChild(div);
div.appendChild(pbody);
div.appendChild(scoreBoard);

function getComputerChoice() {
    const compChoice = ['rock', 'paper', 'scissor'];
    const choice = Math.floor(Math.random() * 3);
    return compChoice[choice];
}

function getHumanChoice() {
    const btns = document.querySelectorAll('button');
    btns.forEach(button => {
        button.addEventListener('click', () => {
            const humanChoice = button.id;
            const compChoice = getComputerChoice();
            const result = playRound(humanChoice, compChoice);

            updateResult(result);
            updateScoreBoard();
            checkGameOver();
        });
    });
}

function playRound(humanChoice, compChoice) {
    if (humanChoice === compChoice) {
        return 'It\'s a tie!';
    } else if (
        (humanChoice === 'rock' && compChoice === 'scissor') ||
        (humanChoice === 'paper' && compChoice === 'rock') ||
        (humanChoice ==='scissor' && compChoice === 'paper')
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${compChoice}`;
    } else {
        compScore++;
        return `You lose! ${compChoice} beats ${humanChoice}`;
    }
}

function updateScoreBoard() {
    const score = document.querySelector('#scoreBoard');
    score.textContent = `Human: ${humanScore} | Computer: ${compScore}`;
}

function updateResult(result) {
    const display = document.querySelector('#result');
    display.textContent = result;
}

function checkGameOver() {
    if (humanScore === 5 || compScore === 5) {
        const finalResult = humanScore === 5 ? "You Win" : "You Lose";
        updateResult(finalResult);
        resetGame();
    }
}

function resetGame() {
    humanScore = 0;
    compScore = 0;
    updateScoreBoard();
}

// initialize game
var humanScore = 0;
var compScore = 0;

getHumanChoice();


