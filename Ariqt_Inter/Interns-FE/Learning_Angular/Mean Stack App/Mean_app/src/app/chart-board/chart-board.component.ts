import { AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { UsersService } from '../users.service'
import { FormControl, FormGroup } from '@angular/forms';
import Scrollbar from 'smooth-scrollbar';
import * as $ from 'jquery'
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { Title } from '@angular/platform-browser';
declare var webkitSpeechRecognition: any;

@Component({
  selector: 'app-chart-board',
  templateUrl: './chart-board.component.html',
  styleUrls: ['./chart-board.component.css']
})
export class ChartBoardComponent implements OnInit {
  modalRef?: BsModalRef;
  @ViewChild("Wechat",{static : true}) Wechat! : ElementRef<any>;
  @ViewChild("last",{static : true}) LastChat! : ElementRef<any>;

  constructor(public ElementRef : ElementRef, private users: UsersService,private modalService: BsModalService, private titleService : Title) {
    titleService.setTitle('Chat Board | Ariqt Knowledge City');
   }
 
  AllUsers: any = [];
  RelatedUsers: any = [];
  OtherUsers: any = [];
  name: any = "";
  UserImage: any = "";
  selectChart = false;
  chat = false;
  chatsOfUser: any = [];
  UserID: any = [];
  showChats = false;
  text : any = {};
  ChatForm = new FormGroup({
    Text: new FormControl('')
  })
  ngOnInit(): void {
    this.users.getUsersDetails().subscribe(data => {
      console.log(data);
      this.AllUsers = data;
      this.RelatedUsers = this.AllUsers.related;
      this.OtherUsers = this.AllUsers.otherusers
    });
    this.ChatForm.get('Text')?.valueChanges.subscribe(data => {
      if (data !== "") {
        this.chat = true;
        this.text = {Text : data}
      } else {
        this.chat = false;
      }
    });
  }
 
 
  msg: any = "";
  scroll_div(){
    let chat = document.querySelector("#WeChat") as HTMLElement;
    this.Wechat.nativeElement.scrollTop = this.Wechat.nativeElement.scrollHeight;
    this.LastChat.nativeElement.scrollTop = this.LastChat.nativeElement.scrollHeight;
    Scrollbar.init(chat);

  }
  scroll = true;
  getChats(scroll:boolean) {
    this.users.GetChat(this.msg.RoomID).subscribe(data => {
      console.log(data);
      let Actual_data: any = data;
      this.chatsOfUser = Actual_data.chats;
      this.UserID = Actual_data.UserID;
      if (this.chatsOfUser.length > 0) {
        this.showChats = true;
        if(scroll==true){
          setTimeout(()=>{
            this.scroll_div();
          },1);
        }
        //this.scroll();
      } else {
        this.showChats = false
      }
    }, (error) => {
      console.log(error);
    })
  }
 
  startChat(userid: any, name: string, UserImage: any) {
    this.selectChart = true;
    console.log(userid, name);
    this.name = name
    this.UserImage = UserImage;
    this.users.CreateChatRoom(userid).subscribe(data => {
      console.log(data);
      this.msg = data;
      this.getChats(this.scroll)
    }, (error) => {
      console.log(error.error);
      this.msg = error.error;
      this.getChats(this.scroll);
    })

  }
  Chat() {
    console.log(this.text);
    this.users.Chat(this.msg.RoomID, this.text).subscribe(data => {
      console.log(data);
      this.getChats(this.scroll);
       this.ChatForm.get('Text')?.setValue("");
    }, (error) => {
      console.log(error);
    })
    
  }

  Image = "";
  sendImage(template: TemplateRef<void>) {
    let input: any = document.createElement('input');
    input.type = 'file';
    input.click();
    input.onchange = async () => {
      let actual_img = input.files[0];
      let form = new FormData();
      form.append('image', actual_img);

      let res = await fetch(`https://api.imgbb.com/1/upload?key=1fcee6d5bb2290c06e96305785728322`, {
        method: "POST",
        body: form
      })
      let data = await res.json();
      this.Image = data.data.display_url;
      console.log(this.Image);
      this.modalRef = this.modalService.show(template);
    }
    
  }
  ImageSend(){
    this.users.Chat(this.msg.RoomID, {Text:this.Image}).subscribe(data => {
      console.log(data);
      this.getChats(this.scroll);
    }, (error) => {
      console.log(error);
    })
  }
  Delete_msg(id:any){
    console.log(id)
    this.users.deleteChat(id).subscribe(data =>{
      console.log(data);
      this.getChats(false);
    },(error)=>{
      console.log(error)
    })
  }
  Update_msg_ID = "";
  openModal(template: TemplateRef<void>,msg : String,id:any) {
    console.log(id);
    this.Update_msg_ID=id;
    this.modalRef = this.modalService.show(template);
    let text_input : any = document.getElementById("message-text");
    if(text_input != null){
      text_input.value =  msg
    }
  }
  Update_msg(){
    let text_input : any = document.getElementById("message-text");
    
    let obj = {
      Text : text_input.value,
      Edited : true
    }
    console.log(obj);
    this.users.updateChat(this.Update_msg_ID,obj).subscribe(data =>{
      console.log(data);
      this.getChats(false);
    },(error)=>{
      console.log(error)
    })
  }
  View_Profile_Name = "";
  View_Profile_Image = ""
  View_Profile_Location = "";
  View_Profile_Profession = "";
  View_Profile_description = "";
  ViewProfile(View_Profile: TemplateRef<void>,User : any){
    console.log(User);
    this.View_Profile_Name = User.name
    this.View_Profile_Location = User.location;
    this.View_Profile_Image = User.profilePic;
    this.View_Profile_Profession = User.profession;
    this.View_Profile_description = User.discription;
    this.modalRef = this.modalService.show(View_Profile);
  }

  Speak(){
    const recognition = new webkitSpeechRecognition();
    recognition.lang = window.navigator.language;
    recognition.interimResults = true;

    recognition.start();

    recognition.addEventListener("result", (event: any) => {
      const result = event.results[event.results.length - 1][0].transcript;
      let input : any = document.getElementById("Text");
      input.value = result;
      this.chat = true;
      this.text = {Text : result}
    })
  }
  general_channal(){
    this.selectChart = true;
    this.showChats = true;
    this.name = 'Ariqt Knowledge City'
    this.getChats(true);
    this.users.CreateGeneralChannalChatRoom().subscribe(data=>{
      console.log(data);
      this.msg = data;
      this.getChats(this.scroll)
    },(error)=>{
      console.log(error.error)
      this.msg = error.error;
      this.getChats(this.scroll);
    })
    
  }
}
