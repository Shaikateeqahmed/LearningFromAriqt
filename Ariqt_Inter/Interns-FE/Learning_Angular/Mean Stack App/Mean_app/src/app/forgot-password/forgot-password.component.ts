import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  constructor(private users: UsersService, private router : Router, private titleService : Title) { 
    titleService.setTitle('Forgot Password | Ariqt knowledge City');
  }
  showPassword = true;
  showConfirmPassword = true;
  fieldTextType = false;
  fieldTextType2 = false;

  forgotPasswordForm = new FormGroup({
    UserEmail: new FormControl('', [Validators.required, Validators.email, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
    Password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/), Validators.minLength(8)]),
    ConfirmPassword: new FormControl('', [Validators.required]),
  });
 
  message : Object = {};
  timer : number = 0;
  alertMsg = false;
  signUp() {
    let i = 0;

    setInterval(()=>{
    i++;
    this.timer = i;
    },1000)
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
    console.log(this.forgotPasswordForm.value);
    this.users.ResetPassword(this.forgotPasswordForm.value).subscribe(data => { 
      console.log(data);
      this.message = data;
      this.alertMsg = true;
     setTimeout(() => {
     this.router.navigate(['/login']);
     }, 5000);
    }, 
      (error) => { 
        console.log(error.error) 
     let alert = document.createElement('div');
     alert.innerHTML = [
      `<div class="alert alert-danger alert-dismissible" role="alert">`,
      `   <div>${error.error}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
    alertPlaceholder?.append(alert)

    });
  }

  ShowPassword() {
    this.showPassword = !this.showPassword
    this.fieldTextType = !this.fieldTextType
  }
  ShowComfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword
    this.fieldTextType2 = !this.fieldTextType2
  }

  confirm = true;
  EmptyEmail = false;
  ngOnInit(): void {
    this.forgotPasswordForm.get('ConfirmPassword')?.valueChanges.subscribe(data => {
      if (this.forgotPasswordForm.get('Password')?.value === data) {
        this.confirm = true;
      } else {
        this.confirm = false
      }
    });
    console.log(this.forgotPasswordForm.valid, this.confirm);
  }

}
