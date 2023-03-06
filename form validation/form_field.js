class FormField{
    constructor(formFieldSelector, {
        minlength = 3, maxlength = 100, errorMsgSelector, matchWithPasswordId}){

    this.formField = document.querySelector(formFieldSelector);
    this.type = this.formField.type;    
    this.minlength = minlength;
    this.maxlength = maxlength;
    if(!errorMsgSelector) errorMsgSelector = `${formFieldSelector} + span`;
    this.errorMsgEl = document.querySelector(errorMsgSelector);
    this.matchWithPasswordId = matchWithPasswordId;
    }

    validate = () => {
        switch(this.type) {
            case "password":
                break;
            case "text":
                    if(!this.checkTextLength()) return false;
                    return true;
                break;
            case "email":
                break;        
        }

        return false;
    }

    checkTextLength = () => {
        if(this.formField.value.length < this.minlength) {
            this.showError(`Wymagane minimum znaków: ${this.minlength}`);
            return false;
        } else
        if(this.formField.value.length > this.maxlength){
            this.showError(`Maksymalnie można użyć ${this.maxlength} znaków.`);
            return false;
        } else {
            this.showSuccess();
            return true;
        }
    }

    showError = (msg) => {
        this.errorMsgEl.innerHTML = msg;
        this.errorMsgEl.classList.add("error");
        this.formField.classList.add("error");
        this.errorMsgEl.classList.remove("success");
        this.formField.classList.remove("success")
    }

    showSuccess = () => {
        this.errorMsgEl.innerHTML = "";
        this.errorMsgEl.classList.remove("error");
        this.formField.classList.remove("error");
        this.errorMsgEl.classList.add("success");
        this.errorField.classList.add("success");
    }
}

