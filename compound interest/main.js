//capital * Math.pow( (1+ (0.04/12)) , (12 * 5))

const inputCapital = document.getElementById("capital");
const inputRate = document.getElementById("rate");
const inputN = document.getElementById("n");
const inputE = document.getElementById("num-years");
const inputResult = document.getElementById("result-value");
const btnCalculate = document.getElementById("calculate");


// let capital = inputCapital.value; //kapitał
// let rate = inputRate.value; //oprocentowanie
// let n = inputN.value; // kapitalizacja co rok
// let t = inputE.value; // na ile lat lokata

// let finalMoney = capital * Math.pow( (1+ (rate/n)), n * t);
// console.log(Math.floor(finalMoney));  //zaokrąglenie w dół; Math.ceil() - w górę

function calculateCompoundInterest(capital, rate, n, t) {
    let capital = inputCapital.value; //kapitał
    let rate = inputRate.value; //oprocentowanie
    let n = inputN.value; // kapitalizacja co rok
    let t = inputE.value; // na ile lat lokata
    return capital * Math.pow( (1+ (rate/n)), n * t);
}


btnCalculate.addEventListener("click", calculateCompoundInterest);