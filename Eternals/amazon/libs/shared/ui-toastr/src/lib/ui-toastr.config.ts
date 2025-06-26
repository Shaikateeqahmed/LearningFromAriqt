export class ToastrConfig {
    lable? : string;
    position? : string;
    type? : 'button' | 'submit' | 'reset';
    toastrType? : 'success' | 'error' | 'info' | 'warning';
    title ? : string;
    massage? : string;
    styles?: { [key: string]: string };
    classes?: string[];
    icon?: string;
    constructor(data : {lable : string, position : string, type : 'button' | 'submit' | 'reset',toastrType : 'success' | 'error' | 'info' | 'warning',title  : string,massage : string, styles : { [key: string]: string }, classes : string[], icon : string, }){
            this.lable = data.lable;
            this.position = data.position;
            this.type = data.type;
            this.toastrType = data.toastrType;
            this.title = data.title;
            this.massage = data.massage;
            this.styles = data.styles;
            this.classes = data.classes;
            this.icon = data.icon;
    }
}