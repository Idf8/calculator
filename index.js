let symbol;
let answer = 0;
let input = 1;
window.onload = ()=>{
    const plusButton = document.getElementById("plus");
    const minusButton = document.getElementById("-");
    const equalsButton = document.getElementById("=");
    const display = document.getElementById("answer-box");

    display.innerHTML = answer;

    plusButton.onclick = ()=> {
        symbol = "+";
    }

    minusButton.onclick = ()=> {
        symbol = "-";
    }

    equalsButton.onclick = ()=> {
        console.log(symbol);
        if (symbol = "+") {
            answer += input;

        } else if (symbol = "-") {
            answer -= input;
        }
        display.innerHTML = answer;
    }
    
}




