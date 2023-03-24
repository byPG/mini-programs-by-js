async function startApp() {
    const apiURL ="http://api.nbp.pl/api/exchangerates/tables/a?format=json";
    const response = await fetch(apiURL);  //asynchronicznie, równolegle robione jest zapytanie - aby poczekać musimy dopisać await, aby poczekać na odpowiedź i dopiero wtedy (po odpowiedzi, zostanie wyświetlony response w console.log())  musimy dodać "async" przed funkcją
    const data = await response.json(); //przerobienie odpowiedzi z serwera na JSON; dzięki temu dane zostaną przerobione na faktyczny obiekt JavaScript
    // console.log(data);

    processData(data[0]);
}

function processData(data){
    console.log(data);
    const code = data.effectiveDate;
    const table = data.table; //A
    const tableNum = data.no;
    const ratesArr = data.rates;

    const dataTableDiv = document.getElementById("data-table");
    
    document.getElementById("date").innerHTML = tableNum;

    ratesArr.forEach(function(el) {
        const code = el.code; //USD
        const currency = el.currency; //dolar amerykański
        const price = el.mid; // 3.98 zł

        addRateContent(code, currency, price, dataTableDiv);
    });
}

//dodanie contentu do HTML/CSS
function addRateContent(code, currency, price, dataTableDiv){
    const el = document.createElement("div");
    el.classList.add("rate");
    el.innerHTML = `
        <div> ${code}</div>
        <div> ${currency}</div>
        <div> ${price} zł </div>
    `;

    dataTableDiv.append(el);
}

startApp();