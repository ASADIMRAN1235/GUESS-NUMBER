let randomNumber=Math.ceil(Math.random()*99+1)
let inputField=document.querySelector('#guess')
let submit_guess=document.querySelector('#submit')
let previous_guess=document.querySelector('.previous-guess')
let remaining_guess=document.querySelector('.remaining-guess')
let result =document.querySelector('.result')
let startNewGame=document.querySelector('.btn')

let numguess=1
let prevguess=[]
let playGame=true

if(playGame){
  submit_guess.addEventListener('click',function(e){
    e.preventDefault()
    let guess=parseInt(inputField.value)
    validateGuess(guess)
  })

}


let validateGuess=function(guess){
   if(isNaN(guess)){
     alert('Please enter valid Number0')
       }
   else if (guess<0){
    alert('please enter number greater then zero(0)')
   }

   else if(numguess>10){
        result.innerHTML=`You Lose and The guess is ${randomNumber}`
        endGame()
    }
    else{
        prevguess.push(guess)
        displayGuess(guess)
        checkGuess(guess)
   
    }
    

}


let checkGuess=function(guess){
if(guess==randomNumber){
    result.innerHTML=`You Won Game`
    endGame()
}
else if(guess>randomNumber){
result.innerHTML='Your Guess is Too High'
}
else if(guess<randomNumber){
    result.innerHTML='Your Guess is Too Low'
}

}

function displayGuess(guess){
    inputField.value=" ";
    numguess++;
    remaining_guess.innerHTML=`${11-numguess}`;
    previous_guess.innerHTML+=`${guess}, `;
}

let endGame =function(){
    playGame=false
    inputField.value=""
    inputField.setAttribute('disabled','')
    startNewGame.addEventListener('click',newGame)
}


let newGame=function(){
    inputField.removeAttribute('disabled')
    playGame=true
    randomNumber=parseInt(Math.random()*99+1)
    previous_guess.innerHTML=''
    prevguess=[]
    numguess=1
    remaining_guess.innerHTML=`${11-numguess}`
    result.innerHTML=''
    
}


