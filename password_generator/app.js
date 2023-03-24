class PasswordGenerator {
    constructor(){
        this.resultPassword = document.querySelector("#result");
        this.clipboardButton = document.querySelector("#clipboard");
        this.length = document.querySelector("#length");
        this.uppercaseCheckbox = document.querySelector("#uppercase");
        this.lowercaseCheckbox = document.querySelector("#lowercase");
        this.numbersCheckbox = document.querySelector("#numbers");
        this.symbolsCheckbox = document.querySelector("#symbols");
        this.generateButton = document.querySelector("#generate-password");

        this.init();
    }

    init(){
        document.querySelectorAll(".options input[type='checkbox']")
        .forEach(cb => cb.addEventListener("click", this.updateOptions));

        this.generateButton.addEventListener("click", this.generatePassword);

        this.clipboardButton.addEventListener("click", this.copyToClipboard);

        this.updateOptions();
    }

    updateOptions = () => { //wywoływana za każdym razem kiedy user wybierze nową opcję
        const optionMethods = []; //zbieramy do tablicy metody, które wynikają z zaznaczonych opcji
        if(this.uppercaseCheckbox.checked)
        optionMethods.push(this.getRandomUppercase);

        if(this.lowercaseCheckbox.checked)
        optionMethods.push(this.getRandomLowercase);

        if(this.numbersCheckbox.checked)
        optionMethods.push(this.getRandomNumber);

        if(this.symbolsCheckbox.checked)
        optionMethods.push(this.getRandomSymbol);

        this.optionMethods = optionMethods;
    }

    getRandomUppercase = () => {
        return String.fromCharCode(65 + Math.floor(Math.random()*26)); //wykorzystanie tablicy ascii - duże litery z zakresu 65-90
    }
    getRandomLowercase = () => { // z zakresu od 97 do 120 a ASCII
        return String.fromCharCode(97 + Math.floor(Math.random()*26));
    }

    getRandomNumber = () => {
        return Math.floor(Math.random() * 10);
    }

    getRandomSymbol = () => {
        const symbols = `!@#$%^&*()-=_+[]{};:'",.?<>|`;
        return symbols[Math.floor(Math.random() * symbols.length)];
    }

    generatePassword = () => {
        if(!this.length.value) return;
        if(this.optionMethods.length === 0) return;

        const arrIndexes = Array.from(Array(+this.length.value).keys()); //plus konwertuje teskt na liczbę

        const password = arrIndexes.map( i => {
            const method = this.getRandomGenMethod();
            return method();
        }).join("");

        this.resultPassword.innerHTML = password;
    }

    getRandomGenMethod = () => {
        const methods = this.optionMethods;
        return methods[Math.floor(Math.random()* methods.length)];
    }

    copyToClipboard = () => {
        const v = this.resultPassword.innerHTML;
        const cb = navigator.clipboard;
        cb.writeText(v).then(() => { console.log(`hasło zostało skopiowane do schowka`)}); //promise
    }

}

const passwordGenerator = new PasswordGenerator();