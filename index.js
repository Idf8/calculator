let symbol; // most recently pressed operation symbol +,-,* etc
let answer = 0; // stored result of previous operations
let displayValue = "";
let input = ""; // amount to calculate against answer

window.onload = ()=>{
    const plusButton = document.getElementById("plus");
    const minusButton = document.getElementById("-");
    const equalsButton = document.getElementById("=");
    const display = document.getElementById("answer-box");

    display.innerHTML = answer;

    for (let i = 0; i <=9; i++) {
        
        const numbtn = document.getElementById(i.toString());
        numbtn.onclick = () => {
            input += i.toString();
            display.innerHTML = input;
        }
    }

    plusButton.onclick = ()=> {
        symbol = "+";
        display.innerHTML = input;
        input = "";
        
    }

    minusButton.onclick = ()=> {
        symbol = "-";
        display.innerHtml = input;
        input = "";
    }

    equalsButton.onclick = ()=> {
        console.log(input);
        console.log(symbol);
        if (symbol == "+") {
            answer += Number(input);

        } else if (symbol == "-") {
            answer -= Number(input);
        }
        display.innerHTML = answer;
        
    }
    
}




