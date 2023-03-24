class RandomColor {
    constructor(){
        this.button = document.querySelector("#color-button");
        this.input = document.querySelector("#color-input");
        this.init();
    }

    init(){
        this.button.addEventListener('click', (e) => {
            this.getRandomColor();

        });
        this.input.addEventListener('click', (e) => {
            this.copyColorToClipboard();
        })
    }

    getRandomColor = () => { // color w RGB -> 0-255 // 256*256*256-1 = 16777215
        const newColor = "#" + Math.floor(Math.random() * 16777215).toString(16); //na format szesnastkowy
        this.input.value = newColor;
        document.body.style.backgroundColor = newColor;
    }

    copyColorToClipboard = () => {  //schowek
        const v = this.input.value;
        const cb = navigator.clipboard;
        cb.writeText(v).then(() => console.log("Kolor skopiowany!" + v)); //promise
    }
}

const randomColor = new RandomColor();
