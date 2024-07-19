<!DOCTYPE html>
<html lang="en">
<head>
    
    <title>Calculator</title>
    <link rel="stylesheet" href="projectcalculator.css">
</head>
<body> 
    <div id="calculator">
        <input type="text" id="display" readonly>
        <div class="button-container">
        <button class="button " onclick="currenDisplay='';
        document.querySelector('#display').value = currenDisplay;">C</button>
        <button class="button" onclick="currenDisplay=currenDisplay+1;
       document.querySelector('#display').value = currenDisplay; ">1</button>
        <button class="button"  onclick="currenDisplay=currenDisplay+2;
       document.querySelector('#display').value = currenDisplay;">2</button>
        <button class="button"  onclick="currenDisplay=currenDisplay+ '+';
       document.querySelector('#display').value = currenDisplay;">+</button>
        <button class="button"  onclick="currenDisplay=currenDisplay+3;
       document.querySelector('#display').value = currenDisplay;">3</button>
        <button class="button"  onclick="currenDisplay=currenDisplay+4;
       document.querySelector('#display').value = currenDisplay;">4</button>
        <button class="button"  onclick="currenDisplay=currenDisplay+ '-';
       document.querySelector('#display').value = currenDisplay;">-</button>
        <button class="button"  onclick="currenDisplay=currenDisplay+5;
       document.querySelector('#display').value = currenDisplay;">5</button>
        <button class="button"  onclick="currenDisplay=currenDisplay+6;
       document.querySelector('#display').value = currenDisplay;">6</button>
        <button class="button"  onclick="currenDisplay=currenDisplay+'*';
       document.querySelector('#display').value = currenDisplay;">*</button>
        <button class="button"  onclick="currenDisplay=currenDisplay+ 7;
       document.querySelector('#display').value = currenDisplay;">7</button>
        <button class="button"  onclick="currenDisplay=currenDisplay+8;
       document.querySelector('#display').value = currenDisplay;">8</button>
        <button class="button"  onclick="currenDisplay=currenDisplay+'/';
       document.querySelector('#display').value = currenDisplay;">/</button>
        <button class="button"  onclick=" currenDisplay=eval(currenDisplay);
       document.querySelector('#display').value = currenDisplay;">=</button>
        <button class="button"  onclick="currenDisplay=currenDisplay+9;
       document.querySelector('#display').value = currenDisplay;">9</button>
        <button class="button"  onclick="currenDisplay=currenDisplay+0;
       document.querySelector('#display').value = currenDisplay;">0</button>
        <button class="button"  onclick="currenDisplay=currenDisplay+'.';
       document.querySelector('#display').value = currenDisplay;">.</button>
        </div>
    </div>
    <script>
        let currenDisplay = '';
        document.querySelector('#display').value = currenDisplay;

    </script>
</body>
</html>
