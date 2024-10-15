let symbol; // most recently pressed operation symbol +,-,* etc
let answer = 0; // stored result of previous operations
let displayValue = "";
let input = ""; // amount to calculate against answer
let firstFlag = true; // input before any calculations, need to append directly to answer
let equalsFlag = false;


window.onload = ()=>{

   
    const plusButton = document.getElementById("plus");
    const minusButton = document.getElementById("-");
    const timesButton = document.getElementById("times");   
    const divideButton = document.getElementById("divide");

    const equalsButton = document.getElementById("=");
    const display = document.getElementById("answer-box");

      display.innerHTML = answer;


    // set the onclick of each number button to add the corresponding value to input
    // Then update the display accordingly, we convert to number to a string as we wish to concatenate not add
    for (let i = 0; i <=9; i++) {
        
        const numbtn = document.getElementById(i.toString());
        numbtn.onclick = () => {
            
            input += i.toString();
            display.innerHTML = input;
            
        }
    }

 
    /* OPERATION BUTTONS, +, -, /, *
     * when selected, if the first time an operation button is being pressed, move the input to answer
     * if not first time, check if there is an input value and perform calculation with previously stored symbol
     * finally update symbol and clear input to 0
    */
    plusButton.onclick = ()=> {
        if (firstFlag && input != "") {
            answer = input;
            firstFlag = false;

        } else if (!equalsFlag && input != "") {   
            doCalculation(display);            
        }

        symbol = "+";
        input = "";
        equalsFlag = false;
        
        
    }
    minusButton.onclick = ()=> {
        if (firstFlag && input != "") {
            answer = input;
            firstFlag = false;
        } else if (!equalsFlag && input != "") {   
            doCalculation(display);            
        }
        symbol = "-";
        input = "";
        equalsFlag = false;
        
    }
    timesButton.onclick = ()=> {
        
        if (firstFlag && input != "") {
            answer = input;
            firstFlag = false;
        } else if (!equalsFlag && input != "") {   
            doCalculation(display);            
        }
        symbol = "*";
        input = "";
        equalsFlag = false;
          
    }
    divideButton.onclick = ()=> {
        if (firstFlag && input != "") {
            answer = input;
            firstFlag = false;
        } else if (!equalsFlag && input != "") {   
            doCalculation(display);            
        }
        symbol = "%";
        input = "";
        equalsFlag = false;  
        
    }


    equalsButton.onclick = ()=> {
        doCalculation(display);
        equalsFlag = true;

    }
    
}

/* Function to do the actual calculating
   calculation will be built as - ANSWER SYMBOL INPUT, where
   answer: first value entered by user or stored value of last operation
   symbol: opertion to complete
   input: most recent numbers entered by user
*/
function doCalculation(display) {
    submitNum = parseInt(input);
        let answerNum = parseInt(answer);

        switch(symbol) {
            case "+":
                answerNum += submitNum;
                break;
            case "-":
                answerNum = answerNum - submitNum;
                break;
            case "*":
                answerNum = answer * submitNum;
                break;
            case "%":
                answerNum = answerNum / submitNum;
                break;
            default:
                console.log("Default, no symbol");
        }

        answer = answerNum.toString();
        display.innerHTML= answer;
}




