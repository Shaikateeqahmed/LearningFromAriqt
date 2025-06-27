import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {Router} from '@angular/router';
@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {
  constructor(private Router : Router, private titleService : Title){
    titleService.setTitle('Logout | Ariqt Knowledge City');
  }
  ngOnInit(): void {
    localStorage.removeItem('token');
    setTimeout(()=>{
      this.Router.navigate(['']);
    },10000)
  }

}
