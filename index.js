
const input = document.getElementById('input')
const button = document.querySelector('button')
const div = document.querySelector('div')

const h3 = document.createElement('h3')
div.appendChild(h3)
h3.style.marginTop =' 1rem'
h3.style.marginBottom =' 1rem'

const p = document.createElement('p')
div.appendChild(p)
p.style.marginBottom =' 1rem'



const  guessNumber=(guess)=>{

const number = Math.round(Math.random() * 100);
let counter = 1
Number(guess)

while (counter < 6){
    if(guess == number){
        const h3Text = document.createTextNode('BİNGO')
        h3.appendChild(h3Text)
        h3.remove(h3Text)
        break
    }
    else if (counter == 5){

        const h3Text = document.createTextNode('GAME OVER!')
        h3.appendChild(h3Text)
        break
    }
    else if (counter == 4){
        const h3Text = document.createTextNode('LAST CHANCE')
        h3.appendChild(h3Text)
        if(guess>number){
            const pText = document.createTextNode('Too high. Guess a lower number')
           p.appendChild(pText)
        }else{
            const pText = document.createTextNode('Too low. Guess a higher number')
            p.appendChild(pText)
        }
        counter++
    }
  
    else{
        const h3Text = document.createTextNode('GAME OVER!')
        h3.appendChild(h3Text)
        if(guess>number){const pText = document.createTextNode('Too high.Guess a lower number')
        p.appendChild(pText);
        }else{ const pText = document.createTextNode('Too low. Guess a higher number')
        p.appendChild(pText)}
        counter++
    }

    const playAgain = prompt("Would you like to play the game again?(Y/N)").toLowerCase()

}

if(playAgain==='y'){
    guessNumber()
}

}





button.addEventListener('click',()=>{
   
    guessNumber(input.value)
})