let playerWins = 0;
let computerWins = 0;

// Function to handle player's choice
function playerChoice(choice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let resultMessage = '';

    if (choice === computerChoice) {
        resultMessage = 'It\'s a tie!';
    } else if (
        (choice === 'rock' && computerChoice === 'scissors') ||
        (choice === 'paper' && computerChoice === 'rock') ||
        (choice === 'scissors' && computerChoice === 'paper')
    ) {
        resultMessage = 'You win!';
        playerWins++;
    } else {
        resultMessage = 'You lose!';
        computerWins++;
    }

    // Display the result and update the scores
    document.getElementById('result').innerText = `You chose ${choice}. Computer chose ${computerChoice}. ${resultMessage}`;
    updateScores();
}

// Function to update the scores on the scoreboard
function updateScores() {
    document.getElementById('playerWins').innerText = playerWins;
    document.getElementById('computerWins').innerText = computerWins;
}

// Function to reset the scores to zero
function resetScores() {
    playerWins = 0;
    computerWins = 0;
    updateScores();
    document.getElementById('result').innerText = ''; // Clear the result message
}
