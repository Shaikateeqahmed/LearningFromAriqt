import { Component } from '@angular/core';
import { MsalBroadcastService, MsalService } from '@azure/msal-angular';
import { InteractionStatus } from '@azure/msal-browser';
import { Subject, filter, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 private readonly _destroying$ = new Subject<void>();

 constructor(private msalBroadcastservice : MsalBroadcastService, private msalService : MsalService){}

 ngOnInit(): void{
      this.msalBroadcastservice.inProgress$.pipe(filter((status : InteractionStatus)=> status === InteractionStatus.None),
      takeUntil(this._destroying$)
      ).subscribe((msg)=>{
          console.log(msg)
      })
 }
 ngOnDestory() : void{
  this._destroying$.next(undefined);
  this._destroying$.complete();
 }
 login(){
  this.msalService.loginRedirect().subscribe({next : (result)=>{console.log(result)},error : (error)=>{
    console.log(error)
  }})
 }
 logout(){
  this.msalService.logoutRedirect();
 }
 
}
