let qSec = document.getElementById("question");
let btns = document.querySelectorAll(".btn");
let clearAll = document.querySelector(".clearAll");
let delet = document.querySelector(".delte");
let ansSec = document.getElementById("ans");
let answerBtn = document.querySelector(".equals")


const operators = [ '+', '-', '*', '/', '%'];

btns.forEach(btn => {
    btn.addEventListener( "click", (e) =>{
         
        let value = e.target.textContent;
        let lastChar = qSec.value.slice(-1);

        
    //  qSec.value += e.target.textContent;
    
    if(
        operators.includes(value) &&
        operators.includes(lastChar)
    ){
        return;
    }
    
    qSec.value += value;
    liveResult()
    })
});

window.addEventListener("keydown", (e) => {

if(e.key === "Enter"){
    calculate();
}
if (e.key === "Escape"){
    clearAll();
}
if(e.key === "Backspace"){
    del();
}
});

clearAll.addEventListener("click", clrAll);
delet.onclick =() =>{
    del();
};


answerBtn.addEventListener("click", ()=>{
ansSec.value = "";
calculate
});



function clrAll(){
 qSec.value = "";
    ansSec.value = "";
    liveResult();
}

function del(){
    qSec.value = qSec.value.slice(0, -1);
    liveResult();
}



function calculate() {
    if(qSec.value.trim() != ""){
        try {
            let expression = qSec.value;
            let safeExpression = expression.replace(/[^0-9+\-*/.%() ]/g, '');


    ansSec.value = eval(safeExpression);

    //   ansSec.value = result;
    //         qSec.value = result;

    } catch (er) {
        qSec.value = ""
        ansSec.value = "Invalid Input!";
    }
}
else{
    alert(`Please a Enter valid input`);
}
}

function liveResult() {
        let expression = qSec.value.trim();
        // let safeExpression = expression.replace(/[^0-9+\-*/.%() ]/g, '');

        if (expression === "") {
            ansSec.value = "";
            return;
        }
        if(/[+\-*/.%]$/.test(expression)){
            ansSec.value = "";
            return;
        }
        try{
            ansSec.value = eval(expression);
    } catch {
        ansSec.value = "";
    }
}


