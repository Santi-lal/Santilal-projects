<!DOCTYPE html>
<html lang="en">
<head>
    
    <title>Cricket Game</title>
    <style>
        body{
            text-align: center;
        }
    </style>
</head>
<body>
    
    <h1 id="heading">Bat Ball Stump Game!!</h1>
    <!--Define For Bat -->
    <button  onclick="
      let randomNumber = Math.random()*3;
      let computerChoice;
      if(randomNumber >0 && randomNumber<=1)
      {
        computerChoice = 'bat';
      }
      else if(randomNumber >1 && randomNumber <=2)
      {
        computerChoice = 'ball';
      }
      else if(randomNumber >2 && randomNumber <= 3)
      {
        computerChoice = 'stump';
      }
     
      let resultofGame;
      if(computerChoice==='bat')
      {
        resultofGame = 'match tied';
      }
      else if(computerChoice==='ball')
      {
        resultofGame = 'User won';
      }
      else if(computerChoice==='stump')
      {
        resultofGame = 'computer won';
      }

      alert(`i have choose bat. computer choice is ${computerChoice} and ${resultofGame}`);
    ">Bat</button>
    
    <!--Define For Ball button-->
    
    <button  onclick="
        randomNumber = Math.random()*3;
        
     
    if(randomNumber >0 && randomNumber<=1)
    {
      computerChoice = 'bat';
    }
    else if(randomNumber >1 && randomNumber <=2)
    {
      computerChoice = 'ball';
    }
    else if(randomNumber >2 && randomNumber <= 3)
    {
      computerChoice = 'stump';
    }
   
     
    if(computerChoice==='bat')
    {
      resultofGame = 'computer won';
    }
    else if(computerChoice==='ball')
    {
      resultofGame = 'match tied';
    }
    else if(computerChoice==='stump')
    {
      resultofGame = 'user won';
    }

    alert(`i have choose ball. computer choice is ${computerChoice} and ${resultofGame}`);
     ">Ball</button>

<!--Define for Stump button-->
    <button onclick="
       randomNumber = Math.random()*3;
    
 
if(randomNumber >0 && randomNumber<=1)
{
  computerChoice = 'bat';
}
else if(randomNumber >1 && randomNumber <=2)
{
  computerChoice = 'ball';
}
else if(randomNumber >2 && randomNumber <= 3)
{
  computerChoice = 'stump';
}

 
if(computerChoice==='bat')
{
  resultofGame = 'user won';
}
else if(computerChoice==='ball')
{
  resultofGame = 'computer won';
}
else if(computerChoice==='stump')
{
  resultofGame = 'match tied';
}

alert(`i have choose stump. computer choice is ${computerChoice} and ${resultofGame}`);
 ">Stump</button>
</body>
</html>
