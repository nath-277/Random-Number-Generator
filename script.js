const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
let score = document.getElementById("score");
let roll = document.getElementById("roll");
const response = document.getElementById("response");

let val = 0;
response.textContent = "Press Roll to Start";

roll.onclick = function(){
    num1.textContent = Math.floor(Math.random() * 9) + 1;
    num2.textContent = Math.floor(Math.random() * 9) + 1;
    num3.textContent = Math.floor(Math.random() * 9) + 1;

    if (num1.textContent == num2.textContent && num1.textContent == num3.textContent) {
        response.textContent = "You Win!!!";
        response.style.color = "green";

        val = val + 5;
        roll.disabled = true;
        score.textContent = val;
    }
    else{
        response.textContent = "Try Again!!";
        response.style.color = "red";
    }
}

reset.onclick = function() {
    num1.textContent = 0;
    num2.textContent = 0;
    num3.textContent = 0;

    response.style.color = "black";
    response.textContent = "Press Roll to Start";

    roll.disabled = false;
}