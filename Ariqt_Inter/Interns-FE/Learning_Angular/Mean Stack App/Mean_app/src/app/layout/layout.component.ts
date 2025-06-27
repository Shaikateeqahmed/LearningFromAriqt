import { Component, OnInit, TemplateRef } from '@angular/core';
import {UsersService} from '../users.service';
import {Router} from '@angular/router'
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  modalRef?: BsModalRef;
 
  constructor(private user : UsersService, private router : Router, private modalService: BsModalService){}
  havingToken = false;
  UserImage : any = '';
  UserDetails : any= {};
  ngOnInit(): void {
    let token = localStorage.getItem('token');
    if(token){
      this.havingToken = true;
      this.user.getDetailsOfUser().subscribe(data =>{
        this.UserDetails = data;
        console.log(this.UserDetails);
        this.UserImage = this.UserDetails.profilePic;
      },(error)=>{
        console.log(error)
      })
    }
    this.Carosal_function();
    this.thought_of_user()
  }
  Carosal_function(){
    let carosal_div = document.getElementById('Carosal_div');
    let images_array = ['../../assets/Carosal_Images/1.png','../../assets/Carosal_Images/2.png','../../assets/Carosal_Images/3.png','../../assets/Carosal_Images/4.png','../../assets/Carosal_Images/5.png','../../assets/Carosal_Images/6.png','../../assets/Carosal_Images/7.png','../../assets/Carosal_Images/8.png','../../assets/Carosal_Images/9.png','../../assets/Carosal_Images/10.png','../../assets/Carosal_Images/11.png','../../assets/Carosal_Images/12.png'];
    let text_array = [['Feel The Nation,','Feel The Culture,','With Ariqt Knowledge City'],['Feel The Knowledge,','Feel The Technology,','With Ariqt Knowledge City'],['Feel The Pain,','Feel The Heal,','With Ariqt Knowledge City'],['Feel The Dream,','Feel The Real,','With Ariqt Knowledge City'],['Feel The Future,','Feel The Technology,','With Ariqt Knowledge City'],['Feel The Expansive,','Feel The Collaborate,','With Ariqt Knowledge City'],['Feel The Support,','Feel The Growth,','With Ariqt Knowledge City'],['Feel The Joy,','Feel The Work,','With Ariqt Knowledge City'],['Feel The Music,','Feel The Soul,','With Ariqt Knowledge City'],['Feel The Connect,','Feel The World,','With Ariqt Knowledge City'],['Feel The Science,','Feel The Space,','With Ariqt Knowledge City'],['Feel The Business,','Feel The Perfection,','With Ariqt Knowledge City']]
    let h1 = document.getElementById('h1');
    let h2 = document.getElementById('h2');
    let h3 = document.getElementById('h3');

    if(carosal_div != null && h1 !== null && h2 !== null && h3 !== null){
      carosal_div.style.backgroundImage = `url(${images_array[0]})`
      h1.innerText = text_array[0][0]
      h2.innerText = text_array[0][1]
      h3.innerText = text_array[0][2]

    }
    let i = 1;
    setInterval(function(){
      if(i===images_array.length){
          i=0;
      }
      if(carosal_div != null && h1 !== null && h2 !== null && h3 !== null){
        carosal_div.style.backgroundImage = `url(${images_array[i]})`
        h1.innerText = text_array[i][0]
        h2.innerText = text_array[i][1]
        h3.innerText = text_array[i][2]
      }
      i++;
  },5000);
   
  }
 
  Rating_image = 'https://t4.ftcdn.net/jpg/05/21/94/41/360_F_521944152_Itq1uszBYmYwTiG1RhVWwwZqTIpQVpOE.jpg';
  thought_of_user(){
    let thought_div : any  = document.getElementById('thought_div');
    let Users_Images_Array = ["https://i.ibb.co/9Hkxcxt/Microsoft-Teams-image-5.png","https://i.ibb.co/qr1svrg/Whats-App-Image-2023-12-12-at-12-42-28-PM.jpg","https://i.ibb.co/3FPkWrw/Whats-App-Image-2023-12-09-at-5-49-14-PM.jpg","https://i.ibb.co/WD6s4By/Microsoft-Teams-image-3.jpg","https://i.ibb.co/yhPrx6R/Microsoft-Teams-image.jpg","https://i.ibb.co/x15J6LZ/Microsoft-Teams-image-2.png","https://i.ibb.co/WD6s4By/Microsoft-Teams-image-3.jpg"]
    if(thought_div != null){
      thought_div.innerHTML = null;
      let div1 = document.createElement('div');
      div1.style.border = '1px solid yellow'
      div1.style.padding = '20px';
      div1.style.display = 'flex';
      div1.style.flexDirection = 'column';
      div1.style.textAlign = 'center';
      div1.style.position = 'relative';
      div1.style.borderRadius = '20px'
      let img1 = document.createElement('img');
      img1.src= Users_Images_Array[0];
      img1.style.width = '100px'
      img1.style.borderRadius = '50%'
      img1.style.border = '5px solid lightblue'
      img1.style.padding = '5px'
      img1.style.position = 'absolute'
      img1.style.top = '-60px'
      img1.style.left = '40%'
      let rating = document.createElement('img');
      rating.src = this.Rating_image;
      rating.style.width = '100px'
      rating.style.position = 'absolute'
      rating.style.top = '50px'
      rating.style.left = '40%'
      let p = document.createElement('p');
      p.innerText = 'Fantastic culture to be gain our knowledge and Share the experaince of us with others. Thanks a lot to make a great platform for knowledge sharing...';
      p.style.position = 'absolute';
      p.style.top ='100px';
      p.style.marginRight = '40px'
      div1.append(img1,rating,p);
      let div2 = document.createElement('div');
      div2.style.border = '1px solid yellow'
      div2.style.padding = '20px';
      div2.style.display = 'flex';
      div2.style.flexDirection = 'column';
      div2.style.textAlign = 'center';
      div2.style.position = 'relative';
      div2.style.borderRadius = '20px'
      let img2 = document.createElement('img');
      img2.src= Users_Images_Array[1];
      img2.style.width = '100px'
      img2.style.borderRadius = '50%'
      img2.style.border = '5px solid lightblue'
      img2.style.padding = '5px'
      img2.style.position = 'absolute'
      img2.style.top = '-60px'
      img2.style.left = '40%'
      let rating2 = document.createElement('img');
      rating2.src = this.Rating_image;
      rating2.style.width = '100px'
      rating2.style.position = 'absolute'
      rating2.style.top = '50px'
      rating2.style.left = '40%'
      let p2 = document.createElement('p');
      p2.innerText = 'Fantastic culture to be gain our knowledge and Share the experaince of us with others. Thanks a lot to make a great platform for knowledge sharing...';
      p2.style.position = 'absolute';
      p2.style.top ='100px';
      p2.style.marginRight = '40px';
      div2.append(img2,rating2,p2);
      thought_div.append(div1,div2);
    }

    let i = 1;
    setInterval(()=>{
     if(i===Users_Images_Array.length){
         i =0;
     }
     if(thought_div != null){
      thought_div.innerHTML = null;
      let div1 = document.createElement('div');
      div1.style.border = '1px solid yellow'
      div1.style.padding = '20px';
      div1.style.display = 'flex';
      div1.style.flexDirection = 'column';
      div1.style.textAlign = 'center';
      div1.style.position = 'relative';
      div1.style.borderRadius = '20px';
      div1.style.animation = 'mymove 5s'
      let img1 = document.createElement('img');
      img1.src= Users_Images_Array[i];
      img1.style.width = '100px';
      img1.style.height = '100px';
      img1.style.borderRadius = '50%'
      img1.style.border = '5px solid lightblue'
      img1.style.padding = '5px'
      img1.style.position = 'absolute'
      img1.style.top = '-60px'
      img1.style.left = '40%';
      img1.style.scrollBehavior = 'smooth';
      img1.style.transition = '400ms'
      let rating = document.createElement('img');
      rating.src = this.Rating_image;
      rating.style.width = '100px'
      rating.style.position = 'absolute'
      rating.style.top = '50px'
      rating.style.left = '40%'
      let p = document.createElement('p');
      p.innerText = 'Fantastic culture to be gain our knowledge and Share the experaince of us with others. Thanks a lot to make a great platform for knowledge sharing...';
      p.style.position = 'absolute';
      p.style.top ='100px';
      p.style.marginRight = '40px'
      div1.append(img1,rating,p);
      let div2 = document.createElement('div');
      div2.style.border = '1px solid yellow'
      div2.style.padding = '20px';
      div2.style.display = 'flex';
      div2.style.flexDirection = 'column';
      div2.style.textAlign = 'center';
      div2.style.position = 'relative';
      div2.style.borderRadius = '20px'
      let img2 = document.createElement('img');
      if(i+1===Users_Images_Array.length){
        img2.src= Users_Images_Array[0];
      }else{
        img2.src= Users_Images_Array[i+1];
      }
      img2.style.width = '100px';
      img2.style.height = '100px';
      img2.style.borderRadius = '50%'
      img2.style.border = '5px solid lightblue'
      img2.style.padding = '5px'
      img2.style.position = 'absolute'
      img2.style.top = '-60px'
      img2.style.left = '40%'
      img2.style.scrollBehavior = 'smooth';
      img2.style.transition = '400ms'
      let rating2 = document.createElement('img');
      rating2.src = this.Rating_image;
      rating2.style.width = '100px'
      rating2.style.position = 'absolute'
      rating2.style.top = '50px'
      rating2.style.left = '40%'
      let p2 = document.createElement('p');
      p2.innerText = 'Fantastic culture to be gain our knowledge and Share the experaince of us with others. Thanks a lot to make a great platform for knowledge sharing...';
      p2.style.position = 'absolute';
      p2.style.top ='100px';
      p2.style.marginRight = '40px';
      div2.append(img2,rating2,p2);
      thought_div.append(div1,div2);
    }
     i++;
    },5000);
  }
  FeedBacK = new FormGroup({
      EmailID : new FormControl(''),
      FeedBack : new FormControl('')
  });
  feedBackForm(template: TemplateRef<void>){
    console.log('hi');
    this.modalRef = this.modalService.show(template);
  }
  msg :any = ''
  SendFeed(template: TemplateRef<void>){
    console.log(this.FeedBacK.value);
    this.user.SendFeedBack(this.FeedBacK.value).subscribe(data=>{
      console.log(data);
      this.msg = data
      this.modalRef = this.modalService.show(template);
    },(error)=>{
      console.log(error)
    })
    setTimeout(()=>{
      this.modalRef?.hide()
    },3000)
  }
  customClass = 'customClass';
}
