export class ConfigToastr {
    lable? : string;
    position? : string;
    type? : string;
    title ? : string;
    massage? : string;
    constructor(data : {lable : string, position : string, type : string}){
            this.lable = data.lable;
            this.position = data.position;
            this.type = data.type;
            this.title = this.title;
            this.massage = this.massage;
    }
}