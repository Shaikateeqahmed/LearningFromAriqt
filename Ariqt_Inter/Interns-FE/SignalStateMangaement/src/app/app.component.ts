import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './service/user.service';
import { Todo, TodoService } from './service/todo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SignalStateMangaement';

  #UserService = inject(UserService);
  #todoService = inject(TodoService)

  public members = this.#UserService.Users;
  public isLoading = this.#todoService.isLoading;
  public currentMember = this.#todoService.currentMember;
  public todosForMember = this.#todoService.filteredTodos;
  public errorMessage = this.#todoService.error;

  public onSelected(event : EventTarget){
    console.log((event as HTMLSelectElement).value);
    this.#todoService.getTodosForMember(Number((event as HTMLSelectElement).value));
  }

  public onFilter(event : EventTarget){
    this.#todoService.filterTodos((event as HTMLInputElement).checked)
  }

  onChangeStatus(task: Todo, ele: EventTarget | null) {
    console.log(task)
    this.#todoService.changeStatus(task, (ele as HTMLInputElement).checked);
  }
}
