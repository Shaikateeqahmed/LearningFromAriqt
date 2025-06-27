import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import {Router} from '@angular/router'
import { Title } from '@angular/platform-browser';
import { RegisterUserInterface } from '../Interface/RegisterUserInterface';
import { ResponseRegisterUserInterface } from '../Interface/ResponceRegisterUserInterface';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private users: UsersService, private router : Router, private titleService : Title) { 
    titleService.setTitle('SingUp | Ariqt knowledge City')
  }
  showPassword : boolean = true;
  showConfirmPassword : boolean = true;
  fieldTextType : boolean = false;
  fieldTextType2 : boolean = false;
  security_logo : boolean = false;
  signUpForm = new FormGroup({
    UserName: new FormControl('', [Validators.required]),
    UserEmail: new FormControl('', [Validators.required, Validators.email, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
    Password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/), Validators.minLength(8)]),
    ConfirmPassword: new FormControl('', [Validators.required]),
    PhoneNo: new FormControl(null, Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(13)])),
    Check: new FormControl('', [Validators.required])
  });

  otpForm = new FormGroup({
    otp_1 : new FormControl('',[Validators.required, Validators.maxLength(1)]),
    otp_2: new FormControl('',[Validators.required,Validators.maxLength(1)]), 
    otp_3 : new FormControl('',[Validators.required,Validators.maxLength(1)]),
    otp_4 : new FormControl('',[Validators.required,Validators.maxLength(1)])
  })
 
  message : object  = {};
  timer : number = 0;
  alertMsg : boolean = false;
  otp : any = 0;
  verification : boolean = false;
  signUp() {
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
    console.log(this.signUpForm.value);
    this.users.getUser(this.signUpForm.value).subscribe(data =>{
      console.log(data);
      this.message = data;
      this.alertMsg = true;
      this.users.OtpGenerate(this.signUpForm.value).subscribe(data=>{
      console.log(data);
      this.otp = data
      console.log(this.otp,data);
      setTimeout(()=>{
        this.verification = true;
        this.alertMsg = false
      },5000)
    },(error)=>{console.log(error)});
    },(error)=>{
      console.log(error.error);
        let alert : HTMLElement = document.createElement('div');
     alert.innerHTML = [
      `<div class="alert alert-danger alert-dismissible" role="alert">`,
      `   <div>${error.error}, Please Login!</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
    alertPlaceholder?.append(alert);
     setTimeout(() => {
     this.router.navigate(['/login']);
     }, 5000);
    })
    // this.users.OtpGenerate(this.signUpForm.value).subscribe(data=>{
    //   console.log(data);
    //   this.otp = data
    //   console.log(this.otp,data);
    //   this.verification = true;
    // },(error)=>{console.log(error)});
    // this.users.RegisterUser(this.signUpForm.value).subscribe(data => { 
    //   console.log(data);
    //   this.message = data;
    //   this.alertMsg = true;
    //  setTimeout(() => {
    //  this.router.navigate(['/login']);
    //  }, 5000);
    // }, 
    //   (error) => { 
    //     console.log(error.error) 
    //  let alert = document.createElement('div');
    //  alert.innerHTML = [
    //   `<div class="alert alert-danger alert-dismissible" role="alert">`,
    //   `   <div>${error.error}</div>`,
    //   '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    //   '</div>'
    // ].join('')
    // alertPlaceholder?.append(alert)

    // });
  }
  verify_otp(){
    let v1 : any = this.otpForm.get('otp_1')?.value;
    let v2 : any = this.otpForm.get('otp_2')?.value;
    let v3 : any = this.otpForm.get('otp_3')?.value;
    let v4 : any = this.otpForm.get('otp_4')?.value;
    let  otpValue = Number(v1 + v2 + v3 + v4);
    let NumberOtp = Number(otpValue); 
    console.log(otpValue)
    let alertPlaceholder = document.getElementById('liveAlertPlaceholder');
    if(NumberOtp===this.otp){
      this.security_logo = true;
      let i = 0;

    setInterval(()=>{
    i++;
    this.timer = i;
    },1000);
      console.log(this.signUpForm.value);
       this.users.RegisterUser(this.signUpForm.value).subscribe(data => { 
       console.log(data);
       let actual_data :any = data;
       this.message = actual_data['msg'];
       localStorage.setItem('token',actual_data['token']);
       this.alertMsg = true;
      setTimeout(() => {
      this.router.navigate(['/userDetails']);
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
    }else{
      let alert = document.createElement('div');
      alert.innerHTML = [
       `<div class="alert alert-danger alert-dismissible" role="alert">`,
       `   <div>Opps!, Its an Invalid OTP, Please Try Again...</div>`,
       '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
       '</div>'
     ].join('')
     alertPlaceholder?.append(alert)
    }
  }
  ShowPassword() {
    this.showPassword = !this.showPassword
    this.fieldTextType = !this.fieldTextType
  }
  ShowComfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword
    this.fieldTextType2 = !this.fieldTextType2
  }

  confirm : Boolean = true;
  EmptyEmail : Boolean = false;
  ngOnInit(): void {
    this.signUpForm.get('ConfirmPassword')?.valueChanges.subscribe(data => {
      if (this.signUpForm.get('Password')?.value === data) {
        this.confirm = true;
      } else {
        this.confirm = false
      }
    });
    console.log(this.signUpForm.valid, this.confirm);
  }
  keytab(event : any){
    let nextInput = event.srcElement.nextElementSibling; // get the sibling element

    var target = event.target || event.srcElement;
    var id = target.id
    console.log(id.maxlength); // prints undefined

    if(nextInput == null)  // check the maxLength from here
        return;
    else
        nextInput.focus();   // focus if not null
}
}
