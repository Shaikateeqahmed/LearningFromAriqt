import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
 private todoURL = "https://jsonplaceholder.typicode.com/todos";
 private http = inject(HttpClient);

 public id = signal<number>(0)
 public todos = signal<Todo[]>([]);
//  computed(()=> {
//   console.log(this.id())
//   toSignal(this.http.get(`${this.todoURL}?userId=${this.id}`),{initialValue : []})})
  constructor() {
    console.log(this.id())
   }
   getTodoList(){
    this.todos.set([])
    return this.http.get(`${this.todoURL}?userId=${this.id()}`).subscribe((data : any)=>{
      console.log(data)
      this.todos.set(data)
    })
   }
}

export interface Todo{
  userId : number;
  id : number;
  title : string;
  completed : boolean;
}
