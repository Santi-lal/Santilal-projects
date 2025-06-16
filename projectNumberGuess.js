let randomNumber=parseInt((Math.random()*100)+1)
const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrhigh=document.querySelector('.lowOrhigh')
const startOver=document.querySelector('.result')
const p=document.createElement('p');
let prevGuess=[]
let numGuess=1
let playGame=true;
if(playGame)
{
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}
function validateGuess(guess)
{
    if(isNaN(guess))
    {
        alert('Please enter a valid number between 1-100')
    }
    else if(guess <1)
    {
        alert('Please enter more than 1')
    }
    else if(guess >100)
    {
        alert('Please enter less than 100 number')
    }
    else{
        prevGuess.push(guess)
        if(numGuess===11)
        {
            displayGuess(guess)
            displayMessage(`Game over!! Random number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess)
{
 if(guess===randomNumber)
 {
    displayMessage(`Your gussed is right!!`)
    endGame()
 }
 else if(guess<randomNumber)
 {
    displayMessage(`your gussed is too low!!`)
 }
 else if(guess>randomNumber)
 {
    displayMessage(`your gussed is too high!!`)
 }
}

function displayGuess(guess)
{
  userInput.value=''
  guessSlot.innerHTML+= `${guess}  ,`
  numGuess++
  remaining.innerHTML=`${11-numGuess}`
}
function displayMessage(message)
{
 lowOrhigh.innerHTML=`<h2>${message}</h2>`
}
function endGame()
{
  userInput.value='';
  userInput.setAttribute('disabled','');//key value pair
  p.classList.add('button')//add a button with text element not actual button
  p.innerHTML=`<h2 id="newGame">Start a New Game</h2>`
  startOver.appendChild(p)
  playGame=false
  newGame()
}
function newGame()
{
    const newGameButton=document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        randomNumber=parseInt((Math.random()*100)+1)
        prevGuess=[]//reset
        numGuess=1
        guessSlot.innerHTML=``
        remaining.innerHTML=`${11-numGuess}`
        startOver.removeChild(p)
        userInput.removeAttribute('disabled')
        playGame=true
    })
}