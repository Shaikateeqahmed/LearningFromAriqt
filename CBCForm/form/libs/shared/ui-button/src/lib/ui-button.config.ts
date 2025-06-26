export class ButtonConfig {
    label? : string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    styles?: { [key: string]: string };
    classes?: string[];
    icon?: string;
    onClick?: () => void;

    constructor(Input : {label : string, type : 'button' | 'submit' | 'reset', disabled : boolean, style : { [key: string]: string }, classes: string[], icon : string, onClick : ()=> any}){

        this.label = Input.label,
        this.type = Input.type,
        this.disabled = Input.disabled,
        this.styles = Input.style,
        this.classes = Input.classes,
        this.icon = Input.icon,
        this.onClick = Input.onClick
    }
}