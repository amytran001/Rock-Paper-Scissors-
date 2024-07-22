// Array of choices
const choices = ["Rock", "Paper", "Scissors"];

// Function to generate computer choice
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();

    let result;

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
        result = "You win!";
    } else {
        result = "You lose!";
    }

    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;
}

// Event listeners for player choices
document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.textContent;
        playGame(playerChoice);
    });
});
