import { Component, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { UsersService } from '../users.service';
import { TooltipModule } from 'ngx-bootstrap/tooltip'
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  modalRef?: BsModalRef;
  ID = 0;
  constructor(private activatedRoute: ActivatedRoute, private user: UsersService,private modalService: BsModalService, private titleService : Title) {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params[`id`]);
      this.ID = params['id'];
    })
  };

  // UpdateUserProfile = new FormGroup({
  //   profilePic: new FormControl(),
  //   name: new FormControl(),
  //   dateOfBirth: new FormControl(),
  //   location: new FormControl(),
  //   profession: new FormControl(),
  //   discription: new FormControl(),
  //   experiance: new FormControl(),
  //   skills: new FormControl(),
  //   tech: new FormControl()
  // });

  UserDetails: any = {};
  ngOnInit(): void {
    this.user.getDetailsOfUser().subscribe(data => {
      this.UserDetails = data;
      console.log(this.UserDetails);
      this.titleService.setTitle(`User Profile | ${this.UserDetails.name} | Ariqt knowledge City`);
    }, (error) => {
      console.log(error)
    });
   
  }
  UpdateDiv = false;
  Show_Update_Div() {
    this.UpdateDiv = true;
    this.titleService.setTitle(`Edit Profile | ${this.UserDetails.name} | Ariqt knowledge City`);
  }
  
  NewProfilePicture = '';
  EditProfilePic(template:TemplateRef<void>){
    let input : any = document.createElement('input');
    input.type = 'file';
    input.click();
    input.onchange= async()=>{
      console.log(input.value)
      let actual_img = input.files[0];
          let form = new FormData();
          form.append('image', actual_img);

          let res = await fetch(`https://api.imgbb.com/1/upload?key=1fcee6d5bb2290c06e96305785728322`, {
            method: "POST",
            body: form
          })
          let data = await res.json();
         this.NewProfilePicture = data.data.display_url;
          console.log(this.NewProfilePicture);
          this.modalRef = this.modalService.show(template);
    }    
  }
  UpdateProfilePic(){
    let profilePic : any = document.getElementById("profilePic");
    profilePic.src = this.NewProfilePicture;
  }
  UpdateMsg :any = '';
  UpdateProfile(template:TemplateRef<void> ) {
    if(this.NewProfilePicture!=""){
      this.UserDetails.profilePic = this.NewProfilePicture;
    }
    let name : any = document.getElementById('name');
    this.UserDetails.name = name.value;
    let dateOfBirth : any = document.getElementById('dateOfBirth');
    this.UserDetails.dateOfBirth = dateOfBirth.value;
    let location : any = document.getElementById('location');
    this.UserDetails.location = location.value;
    let profession : any = document.getElementById('profession');
    this.UserDetails.profession = profession.value;
    let description : any  = document.getElementById('description');
    this.UserDetails.discription = description.value;
    let skills : any = document.getElementById('skills');
    this.UserDetails.skills = this.ConvertStringToArray(skills.value);
    let tech : any = document.getElementById('tech');
    this.UserDetails.tech = this.ConvertStringToArray(tech.value);
    let experiance : any = document.getElementById('experiance');
    this.UserDetails.experiance = experiance.value;
    console.log(this.UserDetails);
    this.user.UpdateDetailsOfUser(this.UserDetails._id,this.UserDetails).subscribe(data=>{
      console.log(data);
      this.UpdateMsg = data;
      this.modalRef = this.modalService.show(template);
      setTimeout(()=>{
        this.modalRef?.hide();
        this.UpdateDiv=false
        this.titleService.setTitle(`User Profile | ${this.UserDetails.name} | Ariqt knowledge City`);
      },5000);
    },(error)=>{
      console.log(error);
    })
  }
  ConvertStringToArray(string : any): string[] | undefined{
    let Array = [];
    let bag = "";
    for(let i=0; i<string.length; i++){
      if(string[i]==="," ){
        if( string[i+1]===" "){
          Array.push(bag);
          i++;
          bag = "";
        }else{
          Array.push(bag);
          bag = "";
        }
      }else if(i===string.length-1){
        bag+=string[i];
        Array.push(bag);
        return Array;
      }else{
        bag+=string[i];
      }
    }
    return Array;
  }
}
