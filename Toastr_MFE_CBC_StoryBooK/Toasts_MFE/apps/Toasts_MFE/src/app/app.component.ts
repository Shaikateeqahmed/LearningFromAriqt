import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { UiToastModule } from 'ui-toast'
import { ToastrService } from 'ngx-toastr';
@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, UiToastModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Toasts_MFE';
  show: boolean = false;

  constructor(private toastr: ToastrService){

  }
  showSuccess() {
    this.toastr.error('Hello world!', 'Toastr fun!', {
      positionClass: 'toast-bottom-right',
    });
  }
  showToast() {
    this.show = true;
    console.log(this.show)
    setTimeout(() => this.show = false, 5000); // Auto-hide after 5 seconds
  }
}
