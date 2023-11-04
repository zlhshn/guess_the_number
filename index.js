const input = document.getElementById('input')
const buttonCheck  = document.getElementById("btn")
const tryAgain = document.getElementById('try')
const msg1 = document.getElementById('message1')
const msg2 = document.getElementById('message')


const maxAttempts = 5; // 5 hak
let randomNumber = generateRandomNumber();
let attempts = 0;

function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function startNewGame() {
    randomNumber = generateRandomNumber()
    attempts = 0
    msg1.textContent =""
    msg2.textContent =""
    buttonCheck.disabled = false
    input.focus()
    tryAgain.style.display ='none'
}


buttonCheck.addEventListener('click',()=>{

    const userGuess = Number(input.value)

    if(isNaN(userGuess) || userGuess < 1 || userGuess > 100){
        msg1.textContent = "Please enter the number"
    }else{
        attempts++

        if(userGuess === randomNumber){
            msg1.textContent = "Congrulation!"
            msg2.textContent = `You found the numer ${randomNumber} in  ${attempts} tries `
            buttonCheck.disabled = true
            tryAgain.style.display ='inline'

        }else if (attempts >= maxAttempts){
            msg1.textContent = "Soryy!"
            msg2.textContent = `Your rights are over. The correct answer is ${randomNumber}`
            buttonCheck.disabled = true
            tryAgain.style.display ='inline'
        } else if (userGuess < randomNumber){
            msg1.textContent = `${maxAttempts- attempts} right  LEFT!`
            msg2.textContent = "Too Low!Choose a higher number"
            input.value = ""
            input.focus()
        }else {
            msg2.textContent = "Too High!Choose a lower number"
            msg1.textContent = `${maxAttempts- attempts} right  LEFT!`
            input.value = ""
            input.focus()

        }

        input.value = ""
        input.focus()
    }
})

tryAgain.addEventListener('click',()=>{
    startNewGame()
})

startNewGame()