export class FormConfig {
    title? : string;
    type? : string;
    label? : string

    constructor(Input : {title : string, type : string, label : string}){
        this.title = Input.title,
        this.type = Input.type
        this.label = Input.label
    }
}