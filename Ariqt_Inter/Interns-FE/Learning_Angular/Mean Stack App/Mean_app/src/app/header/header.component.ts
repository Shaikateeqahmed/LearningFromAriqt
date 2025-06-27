import { Component, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  modalRef?: BsModalRef;
  constructor(private user : UsersService, private router : Router,private modalService: BsModalService){}
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
    
  }
  viewProfile(){
    this.router.navigate(['/userProfile',this.UserDetails._id]);
 }
 show = true;
 OpenLogoModal(template: TemplateRef<void>){
  this.modalRef = this.modalService.show(template);
 }

}
