let symbol; // most recently pressed operation symbol +,-,* etc
let answer = 0; // stored result of previous operations
let displayValue = "";
let input = ""; // amount to calculate against answer
let firstFlag = true; // input before any calculations, need to append directly to answer

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

 

    plusButton.onclick = ()=> {
        if (firstFlag && input != "") {
            answer = input;
            firstFlag = false;
        }
        symbol = "+";
        input = "";
        
    }

    minusButton.onclick = ()=> {
        if (firstFlag && input != "") {
            answer = input;
            firstFlag = false;
        }
        symbol = "-";
        input = "";
    }

    timesButton.onclick = ()=> {
        
        if (firstFlag && input != "") {
            answer = input;
            firstFlag = false;
        }
        symbol = "*";
        input = "";  
    }

    divideButton.onclick = ()=> {
        if (firstFlag && input != "") {
            answer = input;
            firstFlag = false;
        }
        symbol = "%";
        input = "";  
    }

    equalsButton.onclick = ()=> {
        submitNum = parseInt(input);

        switch(symbol) {
            case "+":
                answer += +submitNum;
                break;
            case "-":
                answer = answer - submitNum;
                break;
            case "*":
                answer = answer * submitNum;
                break;
            case "%":
                answer = answer / submitNum;
                break;
            default:
                console.log("Default, no symbol");
        }
 
        display.innerHTML = answer;
        
    }
    
}




