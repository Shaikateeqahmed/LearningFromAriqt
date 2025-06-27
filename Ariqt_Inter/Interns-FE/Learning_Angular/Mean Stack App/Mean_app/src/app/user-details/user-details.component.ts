import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import {UsersService} from '../users.service';
import {Router} from '@angular/router'
import * as $ from 'jquery'
import { Title } from '@angular/platform-browser';
declare var webkitSpeechRecognition: any;
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  constructor(private users : UsersService,private router : Router, private titleService : Title) { 
    titleService.setTitle('User Details | Ariqt Knowledge City');
  }
  Question_arrays = [["name", 'What is Your Full Name ?'], ['dateOfBirth', 'May I know, What is your Date of Birth ?'], ['location', 'What is your Location ?'], ['profilePic', 'Please Provide us your Profile Picture ?'], ['profession', 'What is Your Profession ?'], ['discription', 'Please Provide a Professional Description about Your Self...'], ['skills', 'What are the skills do you have ?'], ['tech', 'What are the Technology do you know ?'], ['experiance', 'How much Experiance do you have or Fresher ?']];

  // Question_arrays = [{'profession':'What is Your Profession ?'}];

  i = 0;
   UserDetailsObj : any = {};
//    UserDetailsObj : any = {
//     dateOfBirth
// : 
// "2023-12-01",
// discription
// : 
// "Full stack web Developer",
// experiance
// : 
// "Fresher",
// location
// : 
// "Hyderabad",
// name
// : 
// "Shaik Ateeq Ahmed",
// profession
// : 
// "Web Developer",
// profilePic
// : 
// "https://i.ibb.co/7Gxk1Hf/Whats-App-Image-2023-12-09-at-5-49-14-PM.jpg",
// skills
// : 
// "Problem Solving, Many More",
// tech
// : 
// "Html, Css, Many more"
//    }
  ConfirmUserDetails: any = false;
  option: string | null | undefined = 'yes';
  options = new FormGroup({
    option: new FormControl('', [Validators.required])
  });
  gotOption() {
    this.option = this.options.get('option')?.value;
    this.next_question();
  }
  next_question() {
    let questions = document.getElementById('questions');
    if (this.i < this.Question_arrays.length && this.Question_arrays[this.i][0] === "dateOfBirth") {
      this.speak(this.option, this.Question_arrays[this.i][1]);
      let div = document.createElement('div');
      div.style.width = '80%';
      div.style.padding = '10px';
      div.style.border = '5px solid lightblue';
      div.style.borderRadius = '20px'
      div.style.fontSize = '25px'
      div.innerText = this.Question_arrays[this.i][1];
      let ans_div = document.createElement("div");
      ans_div.style.width = '80%'
      ans_div.style.display = 'flex';
      ans_div.style.justifyContent = 'space-between';
      ans_div.style.margin = '6px 3px 6px 20%'
      let input = document.createElement('input');
      input.type = 'date';
      input.style.border = '3px solid lightblue';
      input.style.width = '90%';
      input.style.borderRadius = '20px'
      input.style.padding = '20px';
      input.placeholder = "Text Or Speak Our Answer...";
      input.style.fontSize = '20px'

      let btn = document.createElement('button');
      btn.setAttribute('class', 'btn btn-primary');
      btn.innerText = 'next'
      btn.addEventListener('click', () => {
        this.UserDetailsObj[`${this.Question_arrays[this.i - 1][0]}`] = input.value;
        this.next_question();
      });
      btn.style.margin = '20px 5px'
      if (input.value === "") {
        btn.disabled = true;
      }
      input.addEventListener('input', () => {
        if (input.value === "") {
          btn.disabled = true;
        } else {
          btn.disabled = false;
        }
      })
      ans_div.append(input, btn,);
      questions?.append(div, ans_div);
      this.i++;
      // window.scrollTo()
      var $doc = $('html,body');
      $doc.animate({ scrollTop: $doc.height() }, 250);
    } else if (this.i < this.Question_arrays.length && this.Question_arrays[this.i][0] === "profilePic") {
      this.speak(this.option, this.Question_arrays[this.i][1]);
      let div = document.createElement('div');
      div.style.width = '80%';
      div.style.padding = '10px';
      div.style.border = '5px solid lightblue';
      div.style.borderRadius = '20px'
      div.style.fontSize = '25px'
      div.innerText = this.Question_arrays[this.i][1];
      let ans_div = document.createElement("div");
      ans_div.style.width = '80%'
      ans_div.style.display = 'flex';
      ans_div.style.justifyContent = 'space-between';
      ans_div.style.margin = '6px 3px 6px 20%'
      let input: any = document.createElement('div');
      input.style.border = '3px solid lightblue';
      input.style.width = '90%';
      input.style.borderRadius = '20px'
      input.style.padding = '20px';
      input.innerText = "Update Your Profile Picture, By Clicking the Emoji -->";
      input.style.fontSize = '20px'
      let spk = document.createElement('div');
      spk.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-emoji-sunglasses-fill" viewBox="0 0 16 16">
    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M2.31 5.243A1 1 0 0 1 3.28 4H6a1 1 0 0 1 1 1v.116A4.22 4.22 0 0 1 8 5c.35 0 .69.04 1 .116V5a1 1 0 0 1 1-1h2.72a1 1 0 0 1 .97 1.243l-.311 1.242A2 2 0 0 1 11.439 8H11a2 2 0 0 1-1.994-1.839A2.99 2.99 0 0 0 8 6c-.393 0-.74.064-1.006.161A2 2 0 0 1 5 8h-.438a2 2 0 0 1-1.94-1.515zM4.969 9.75A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .866-.5z"/>
  </svg>`;
      spk.style.margin = "25px 15px"
      let input2: any = document.createElement('input');
      input2.style.display = 'none';
      input2.type = 'file'
      let image_url: any;
      spk.onclick = () => {
        input2.click();
        input2.onchange = async () => {
          let actual_img = input2.files[0];
          let form = new FormData();
          form.append('image', actual_img);

          let res = await fetch(`https://api.imgbb.com/1/upload?key=1fcee6d5bb2290c06e96305785728322`, {
            method: "POST",
            body: form
          })
          let data = await res.json();
          image_url = data.data.display_url;
          console.log(image_url);
          input.innerHTML = null;
          input.style.width = '70%';
          input.style.height = '400px'
          input.innerHTML = `<img style="width : 100%; height : 100%" src=${image_url}>`
          ans_div.style.display = 'flex';
          ans_div.style.alignItems = 'end';
          ans_div.style.justifyContent = 'end'
          ans_div.style.width = '60%'
          ans_div.style.marginLeft = '40%'
        };

      }


      let btn = document.createElement('button');
      btn.setAttribute('class', 'btn btn-primary');
      btn.innerText = 'next'
      btn.addEventListener('click', () => {
        this.UserDetailsObj[`${this.Question_arrays[this.i - 1][0]}`] = image_url;
        this.next_question();
      });
      btn.style.margin = '20px 5px'
      if (input.value === "") {
        btn.disabled = true;
      }
      input.addEventListener('input', () => {
        if (input.value === "") {
          btn.disabled = true;
        } else {
          btn.disabled = false;
        }
      })
      ans_div.append(input, spk, btn,);
      questions?.append(div, ans_div);
      this.i++;
      var $doc = $('html,body');
      $doc.animate({ scrollTop: $doc.height() }, 250);
    } else if (this.i === (this.Question_arrays.length - 1)) {
      this.speak(this.option, this.Question_arrays[this.i][1]);
      let div = document.createElement('div');
      div.style.width = '80%';
      div.style.padding = '10px';
      div.style.border = '5px solid lightblue';
      div.style.borderRadius = '20px'
      div.style.fontSize = '25px'
      div.innerText = this.Question_arrays[this.i][1];
      let ans_div = document.createElement("div");
      ans_div.style.width = '80%'
      ans_div.style.display = 'flex';
      ans_div.style.justifyContent = 'space-between';
      ans_div.style.margin = '6px 3px 6px 20%'
      let input = document.createElement('input');
      input.type = 'text';
      input.style.border = '3px solid lightblue';
      input.style.width = '90%';
      input.style.borderRadius = '20px'
      input.style.padding = '20px';
      input.placeholder = "Text Or Speak Our Answer...";
      input.style.fontSize = '20px'
      let spk = document.createElement('div');
      spk.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-mic-fill" viewBox="0 0 16 16">
    <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0z"/>
    <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5"/>
  </svg>`;
      spk.style.margin = "25px 5px"
      spk.addEventListener('click', () => {
        console.log('hi');
        const recognition = new webkitSpeechRecognition();
        recognition.lang = window.navigator.language;
        recognition.interimResults = true;

        recognition.start();

        recognition.addEventListener("result", (event: any) => {
          const result = event.results[event.results.length - 1][0].transcript;
          input.value = result;
          btn.disabled = false;
        })
      })
      let btn = document.createElement('button');
      btn.setAttribute('class', 'btn btn-primary');
      btn.innerText = 'next'
      btn.addEventListener('click', () => {
        this.UserDetailsObj[`${this.Question_arrays[this.i - 1][0]}`] = input.value;
        this.ConfirmUserDetails = true;
      });
      btn.style.margin = '20px 5px'
      if (input.value === "") {
        btn.disabled = true;
      }
      input.addEventListener('input', () => {
        if (input.value === "") {
          btn.disabled = true;
        } else {
          btn.disabled = false;
        }
      })
      ans_div.append(input, spk, btn,);
      questions?.append(div, ans_div);
      this.i++;
      // window.scrollTo()
      var $doc = $('html,body');
      $doc.animate({ scrollTop: $doc.height() }, 250);
    } else if (this.i < this.Question_arrays.length) {
      this.speak(this.option, this.Question_arrays[this.i][1]);
      let div = document.createElement('div');
      div.style.width = '80%';
      div.style.padding = '10px';
      div.style.border = '5px solid lightblue';
      div.style.borderRadius = '20px'
      div.style.fontSize = '25px'
      div.innerText = this.Question_arrays[this.i][1];
      let ans_div = document.createElement("div");
      ans_div.style.width = '80%'
      ans_div.style.display = 'flex';
      ans_div.style.justifyContent = 'space-between';
      ans_div.style.margin = '6px 3px 6px 20%'
      let input = document.createElement('input');
      input.type = 'text';
      input.style.border = '3px solid lightblue';
      input.style.width = '90%';
      input.style.borderRadius = '20px'
      input.style.padding = '20px';
      input.placeholder = "Text Or Speak Our Answer...";
      input.style.fontSize = '20px'
      let spk = document.createElement('div');
      spk.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-mic-fill" viewBox="0 0 16 16">
    <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0z"/>
    <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5"/>
  </svg>`;
      spk.style.margin = "25px 5px"
      spk.addEventListener('click', () => {
        console.log('hi');
        const recognition = new webkitSpeechRecognition();
        recognition.lang = window.navigator.language;
        recognition.interimResults = true;

        recognition.start();

        recognition.addEventListener("result", (event: any) => {
          const result = event.results[event.results.length - 1][0].transcript;
          input.value = result;
          btn.disabled = false;
        })
      })
      let btn = document.createElement('button');
      btn.setAttribute('class', 'btn btn-primary');
      btn.innerText = 'next'
      btn.addEventListener('click', () => {
        this.UserDetailsObj[`${this.Question_arrays[this.i - 1][0]}`] = input.value;
        this.next_question();
      });
      btn.style.margin = '20px 5px'
      if (input.value === "") {
        btn.disabled = true;
      }
      input.addEventListener('input', () => {
        if (input.value === "") {
          btn.disabled = true;
        } else {
          btn.disabled = false;
        }
      })
      ans_div.append(input, spk, btn,);
      questions?.append(div, ans_div);
      this.i++;
      // window.scrollTo()
      var $doc = $('html,body');
      $doc.animate({ scrollTop: $doc.height() }, 250);
    }

  }

  speak(option: string | null | undefined, msg: string | undefined) {
    if (option === 'yes') {
      let utterance = new SpeechSynthesisUtterance(msg);
      speechSynthesis.speak(utterance);
    } else {
      speechSynthesis.cancel();
      return;
    }
  }

  ngOnInit(): void {
    let msg = 'Hello, I am Ariqtian, Do you need my voice to listening the Questions Which will be displaying on screen....';
    this.speak('yes',msg);

  }
  goBack(){
    this.ConfirmUserDetails = false;
  }

  submit(){
    let skills = [];
    let bag = "";
    for(let i=0; i<this.UserDetailsObj.skills.length; i++){
      if(this.UserDetailsObj.skills[i]==="," ){
        if( this.UserDetailsObj.skills[i+1]===" "){
          skills.push(bag);
          i++;
          bag = "";
        }else{
          skills.push(bag);
          bag = "";
        }
      }else if(i===this.UserDetailsObj.skills.length-1){
        bag+=this.UserDetailsObj.skills[i];
        skills.push(bag);
        this.UserDetailsObj.skills = skills;
      }else{
        bag+=this.UserDetailsObj.skills[i];
      }
    }
    let techs = [];
    let bag2 = "";
    for(let i=0; i<this.UserDetailsObj.tech.length; i++){
      if(this.UserDetailsObj.tech[i]===","){
        if(this.UserDetailsObj.tech[i+1]===" "){
          techs.push(bag2);
          i++;
          bag2 = "";
        }else{
          techs.push(bag2);
          bag2 = "";
        }
          
      }else if(i===this.UserDetailsObj.tech.length-1){
        bag2+=this.UserDetailsObj.tech[i];
        techs.push(bag2);
        this.UserDetailsObj.tech = techs;
      }else{
        bag2+=this.UserDetailsObj.tech[i];
      }
    }
    console.log(this.UserDetailsObj);
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
    this.users.createUserDetails(this.UserDetailsObj).subscribe(data=>{
      console.log(data);
      const wrapper = document.createElement('div')
      wrapper.innerHTML = [
        `<div class="alert alert-info alert-dismissible" role="alert">`,
        `   <div>${data}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
      ].join('');
    
      alertPlaceholder?.append(wrapper);
      setTimeout(() => {
        this.router.navigate(['/chartBoard']);
        }, 3000);
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
    })
  }
}
