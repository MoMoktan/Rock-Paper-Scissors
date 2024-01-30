// Initialize scores
let playerScore = 0;
let computerScore = 0;

// Function to play the game
function playGame(playerChoice) {
    // Array of possible choices
    const choices = ['rock', 'paper', 'scissors'];

    // Computer's choice
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    // Display choices
    document.getElementById('playerChoiceDisplay').value = playerChoice;
    document.getElementById('computerChoiceDisplay').value = computerChoice;

    // Determine the winner
    if (playerChoice === computerChoice) {
        document.getElementById('winning-board').value = 'Draw';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        // Player wins
        playerScore++;
        document.getElementById('playerScore').innerText = playerScore;
        document.getElementById('winning-board').value = 'Player 1 won!';
    } else {
        // Computer wins
        computerScore++;
        document.getElementById('computerScore').innerText = computerScore;
        document.getElementById('winning-board').value = 'Computer won!';
    }
}
