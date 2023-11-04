let randomNumber = Math.ceil(Math.random() *50)
console.log(randomNumber);
let beginScore = 10 


const input =document.querySelector('.guess')
const buttonCheck = document.querySelector('.check')
const buttonAgain = document.querySelector('.again')
const number = document.querySelector('.number')
const message = document.querySelector('.msg')
const score = document.querySelector('.score')
const topp = document.querySelector('.top-score')


let highScore = localStorage.getItem("top-score") || 0

topp.textContent = highScore


buttonCheck.addEventListener('click', ()=>{

    const guess = input.value 

    if(!guess){
        message.textContent = 'Please enter a number!'

    }else if (guess == randomNumber) {
        message.textContent ='CONGRATULATİONS!🎉🎉🚀'
        document.querySelector('body').style.backgroundColor = 'green'
        input.value = ''
        buttonCheck.style.opacity = '.6'
        buttonCheck.disabled = true
        number.textContent = randomNumber



        if(beginScore> highScore){

            localStorage.setItem("top-score",beginScore)
            highScore = beginScore
            topp.textContent = highScore
        }

    }else{
        if(beginScore >1){
            beginScore--
            score.textContent = beginScore
            if(guess > randomNumber){
                message.textContent = 'Decrease 👇'
    
                }else{
                message.textContent =  'İncrease 👆'
            }

        }else{
            message.textContent ="GAME OVER!😑"
            document.querySelector('body').style.backgroundColor = 'red'
            score.textContent = 0;
            buttonCheck.style.opacity = '.6'
            buttonCheck.disabled = true
        }

    }
    
})


buttonAgain.addEventListener('click',()=>{

    document.querySelector('body').style.backgroundColor = 'gray'
    randomNumber = Math.ceil(Math.random() *50)
    beginScore = 10
    score.textContent = '10'
    number.textContent ='?'
    input.value =''
    message.textContent = 'The Game Start For New Player...'
    buttonCheck.disabled = false
    buttonCheck.style.opacity = '1.0'
 


})


document.addEventListener('keydown',(e)=>{

    if(e.key === 'Enter'){
        buttonCheck.click()
    }
   
})


buttonCheck.addEventListener('click',()=>{

    guess = input.value

    if(guess>=1  && guess<=50 && !isNaN(guess)){

    }else{
        message.textContent =' please enter a valid number. between 1-50 '
        beginScore++
    }
})