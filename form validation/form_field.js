class FormField{
    constructor(formFieldSelector, {minlength = 3, maxlength = 100, errorrMsgSelector, matchWithPasswordId}){

    this.formField = document.querySelector(formFieldSelector);
    this.type = this.formField.type;    
    this.minlength = minlength;
    this.maxlength = maxlength;
    this.errorrMsgEl = document.querySelector(errorrMsgSelector);
    this.matchWithPasswordId = matchWithPasswordId;
    }
}