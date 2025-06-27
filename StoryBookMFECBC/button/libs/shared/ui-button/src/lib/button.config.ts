export class ButtonConfig {
    label?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    styles?: { [key: string]: string };
    classes?: string[];
    icon?: string;
    onClick?: () => void;

    constructor(input : {label?: string;
        type?: 'button' | 'submit' | 'reset';
        disabled?: boolean;
        styles?: { [key: string]: string };
        classes?: string[];
        icon?: string;
        onClick?: () => void;}){
            this.type = input.type;
            this.disabled = input.disabled;
            this.styles = input.styles;
            this.classes = input.classes;
            this.icon = input.icon;
            this.onClick = input.onClick;
        }
}