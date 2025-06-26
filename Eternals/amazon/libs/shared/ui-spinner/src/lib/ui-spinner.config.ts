export class SpinnerConfig {
    size? : 'small' | 'medium' | 'large';
    type? : 'primary' | 'danger' | 'dark' | 'light' | 'warning';
    constructor(Input : {size : 'small' | 'medium' | 'large', type : 'primary' | 'danger' | 'dark' | 'light' | 'warning'}){
        this.size = Input.size;
        this.type = Input.type;

    }

}