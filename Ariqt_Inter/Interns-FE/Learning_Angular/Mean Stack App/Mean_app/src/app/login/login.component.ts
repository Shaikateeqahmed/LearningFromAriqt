import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {UsersService} from '../users.service'
import {Router} from '@angular/router'
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private user:UsersService, private router : Router, private titleService : Title){
    titleService.setTitle('Login | Ariqt Knowledge City');
  }
  showPassword : boolean = true;
  fieldTextType : boolean = false;
  response :any = "";
  loginForm = new FormGroup({
    UserEmail: new FormControl('', [Validators.required, Validators.email, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
    Password : new FormControl('',[Validators.required]),
  });
  message ="";
  page = "";
  timer : number = 0;
  alertMsg = false;
Login(){
  let i = 0;

  setInterval(()=>{
  i++;
  this.timer = i;
  },1000)
  const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
  console.log(this.loginForm.value);
  this.user.LoginUser(this.loginForm.value).subscribe(data=>{
    console.log(data);
    this.message = "You Login Successfully!";
    this.alertMsg = true;
    this.response = data;
    console.log(data);
    localStorage.setItem('token', this.response.token);
    if(this.response.login == true && this.response.userDetails == true){
      this.page = "Ariqt Chat Board";
      setTimeout(() => {
        this.router.navigate(['/chartBoard']);
        }, 5000);
    }else{
      this.page = "User Details Page";
      setTimeout(() => {
        this.router.navigate(['/userDetails']);
        }, 5000);
    }
    
  },(error)=>{
    console.log(error.error);
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-danger alert-dismissible" role="alert">`,
      `   <div>${error.error}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
  
    alertPlaceholder?.append(wrapper)
  });
}

ShowPassword() {
  this.showPassword = !this.showPassword
  this.fieldTextType = !this.fieldTextType
}
}
