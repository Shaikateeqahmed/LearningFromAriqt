import { Component, Input, ViewChild, viewChild } from '@angular/core';
import { FormConfig } from '../ui-form.config'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UiButtonComponent } from 'ui-button';

@Component({
  selector: 'lib-ui-form',
  templateUrl: './ui-form.component.html',
  styleUrl: './ui-form.component.css',
})
export class UiFormComponent {

  @Input() config? : FormConfig;
 
  
  disabledBTN : boolean = true;

 


password : FormGroup = new FormGroup({
    posswordFeild : new FormControl("",Validators.compose([Validators.required, Validators.minLength(8)]))
})

PasswordError : boolean = false;
handleButtonClick(){
};
ngOnInit(){
  this.password.get("posswordFeild")?.valueChanges.subscribe((data)=>{
    if(data.length >= 8){ 
      this.PasswordError = false
      this.disabledBTN = false
    }else if(data.length <=0){
      this.PasswordError = false
    }else{
      this.PasswordError = true
      this.disabledBTN = true
    }})
}

}
