import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './services/users.service';
import { TodosService } from './services/todos.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SignalEffectHTTP';
  #userService = inject(UserService);
  #todoService = inject(TodosService);
  members = this.#userService.members;
  todos = this.#todoService.todos;
  id = this.#todoService.id

  public onSelectedMember(event : EventTarget | null){
    const id = Number((event as HTMLSelectElement).value);
    this.id.set(id);
    this.#todoService.getTodoList()
  }
}
