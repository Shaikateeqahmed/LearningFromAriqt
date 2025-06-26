export class DropDownConfig{
    text ?  : string;
    MenuArray ? : string[]
    constructor(data : {text : string, MenuArray : string[]}){
        this.text = data.text;
        this.MenuArray = data.MenuArray;
    }
}