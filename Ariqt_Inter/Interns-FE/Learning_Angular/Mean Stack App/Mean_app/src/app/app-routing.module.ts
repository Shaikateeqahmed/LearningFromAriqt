import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { checktokenGuard } from './checktoken.guard';
import { AppComponent } from './app.component';
import { ChartBoardComponent } from './chart-board/chart-board.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LogOutComponent } from './log-out/log-out.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
{path : '', component: LayoutComponent},
{path:'logOut',component : LogOutComponent},
{path:'userProfile/:id',component : UserProfileComponent},
{path:'signup',component:SignupComponent},
{path:'login',component:LoginComponent},
{path:'forgotPassword',component:ForgotPasswordComponent},
{path:'userDetails',component:UserDetailsComponent,canActivate : [checktokenGuard]},
{path:'chartBoard',component:ChartBoardComponent,canActivate : [checktokenGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
