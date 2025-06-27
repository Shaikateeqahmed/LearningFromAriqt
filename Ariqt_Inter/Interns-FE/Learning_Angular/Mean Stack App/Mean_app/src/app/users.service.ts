import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResponseRegisterUserInterface } from './Interface/ResponceRegisterUserInterface';
import { data } from 'jquery';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http : HttpClient){}
  UserURL = `http://localhost:3000/user`;
  // RegisterUser(body:Object){
  //   return this.http.post(`${this.UserURL}/signup`,body);
  // }
  RegisterUser(body:Object):Observable<ResponseRegisterUserInterface>{
   return this.http.post<ResponseRegisterUserInterface>(`${this.UserURL}/signup`,body)
  }
  LoginUser(body:Object){
    return this.http.post(`${this.UserURL}/login`,body);
  }
  ResetPassword(body : Object){
    return this.http.patch(`${this.UserURL}/forgotPassword`,body)
  }
  OtpGenerate(body : Object){
    return this.http.post(`${this.UserURL}/otp`,body);
  }
  getUser(body : object){
    return this.http.post(`${this.UserURL}`,body);
  }

  UserDetailsUrl = `http://localhost:3000/userDetails`;
  createUserDetails(body : Object){
    let token = localStorage.getItem('token');
    console.log(token)
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : ""+token
    });
    
   
    return this.http.post(`${this.UserDetailsUrl}`,body,{headers : headers});
  };
  getUsersDetails(){
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : ""+token
    });
    
    return this.http.get(`${this.UserDetailsUrl}`,{headers : headers});
  }
  getDetailsOfUser(){
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : ""+token
    });
    
    return this.http.get(`${this.UserDetailsUrl}/userDetails`,{headers : headers});
  }
  UpdateDetailsOfUser(id:any,body : Object){
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : ""+token
    });
    
    return this.http.patch(`${this.UserDetailsUrl}/${id}`,body,{headers : headers});
  }
  ChatRoomUrl = `http://localhost:3000/chatRoom`
  CreateChatRoom(id : any){
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : ""+token
    });
     return this.http.post(`${this.ChatRoomUrl}/createChatRoom/${id}`,'',{headers : headers});
  }
  CreateGeneralChannalChatRoom(){
    console.log("General Channal")
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : ""+token
    });
   return this.http.post('http://localhost:3000/chatRoom/generalChannal',"",{headers : headers})
  }
  ChatUrl = `http://localhost:3000/chat`
  GetChat(id:any){
    console.log(id);
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : ""+token
    });
     return this.http.get(`${this.ChatUrl}/${id}`,{headers : headers});
  }
  Chat(id:any,Text : any){
    console.log(typeof id,Text);
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : ""+token
    });
     return this.http.post(`${this.ChatUrl}/${id}`,Text,{headers : headers});
  }
  deleteChat(id : any){
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : ""+token
    });
     return this.http.delete(`${this.ChatUrl}/${id}`,{headers : headers});
  }
  updateChat(id : any,payload : Object){
    let token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization' : ""+token
    });
    console.log(id,payload);
    return this.http.patch(`${this.ChatUrl}/${id}`,payload,{headers : headers});
  }
  FeedBackURL = "http://localhost:3000/feedback"
  SendFeedBack(body : Object){
         return this.http.post(`${this.FeedBackURL}`,body)
  }
}
