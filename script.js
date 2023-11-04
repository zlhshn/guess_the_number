const maxAttempts = 5; // 5 hak
let randomNumber = generateRandomNumber();
let attempts = 0;

const guessInput = document.getElementById('guessInput');
const submitGuess = document.getElementById('submitGuess');
const message = document.getElementById('message');
const playAgain = document.getElementById('playAgain');

function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function startNewGame() {
    randomNumber = generateRandomNumber();
    attempts = 0;
    message.textContent = '';
    guessInput.value = '';
    submitGuess.disabled = false;
    guessInput.focus();
    playAgain.style.display = 'none';
}

submitGuess.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Lütfen 1 ile 100 arasında bir sayı girin.';
    } else {
        attempts++;

        if (userGuess === randomNumber) {
            message.textContent = `Tebrikler! ${randomNumber} sayısını ${attempts} denemede buldunuz.`;
            submitGuess.disabled = true;
            playAgain.style.display = 'block';
        } else if (attempts >= maxAttempts) {
            message.textContent = `Üzgünüm, hakkınız bitti. Doğru cevap ${randomNumber} idi.`;
            submitGuess.disabled = true;
            playAgain.style.display = 'block';
        } else if (userGuess < randomNumber) {
            message.textContent = 'Daha yüksek bir sayı deneyin.';
        } else {
            message.textContent = 'Daha düşük bir sayı deneyin.';
        }

        guessInput.value = '';
        guessInput.focus();
    }
});

playAgain.addEventListener('click', () => {
    startNewGame();
});

startNewGame();
