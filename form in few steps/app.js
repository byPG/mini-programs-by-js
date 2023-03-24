class MultiStepForm {
    constructor(){
    }

    init() {
        this.form = document.querySelector("form");
        this.steps = Array.from(document.querySelectorAll("form.step"));
        this.nextBtn = document.querySelectorAll("form .next-btn");
        this.prevBtn = document.querySelectorAll("form .previous-btn");

        this.addListeners();
    }

    addListeners() {
        this.nextBtn.forEach(btn => {
            btn.addEventListener("click", () => this.changeStep(1)); //przekazana metoda changeStep (z przekazaniem argumentu)
        });

        this.prevBtn.forEach(btn => {
            btn.addEventListener("click", () => { this.changeStep(-1)});
        });

        this.form.addEventListener("submit", this.submit);
    }
    
    changeStep = (v) => {


    }

    resetSteps = () => {
        this.changeStep(0);
    }

    submit = (e) => {
        e.preventDefault();
        this.form.reset();
        this.resetSteps();
    }

    
}

const multiForm = new MultiStepForm();
multiForm.init();
