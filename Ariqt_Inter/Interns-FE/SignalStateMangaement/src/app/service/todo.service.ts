import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { User, UserService } from './user.service';
import { catchError, delay, map, Observable, of, Subject, switchMap, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todoUrl = "https://jsonplaceholder.typicode.com/todos";

  private http = inject(HttpClient);
  private userService = inject(UserService);

  //state or store or data ur service needs to manage.
  private state = signal<TodoState>({
    isLoading : false,
    currentMember : undefined,
    memberTodos : [],
    inCompleteOnly : false,
    error : null
  })

  //Selector
  // Selector is like a peace of state that needs to be updated individually
  isLoading = computed(()=> this.state().isLoading);
  currentMember = computed(()=> this.state().currentMember);
  memberTodos = computed(()=> this.state().memberTodos);
  inCompleteOnly = computed(()=> this.state().inCompleteOnly)
  error = computed(()=> this.state().error);
  filteredTodos = computed(()=>{
    if(this.inCompleteOnly()){
         return this.memberTodos().filter(t => t.completed === false);
    }else{
      return this.memberTodos();
    }
  })

  //Anytime we need to react to an action by performing async opperation, then we should use RXJS
  private selectedIdSubject = new Subject<number>();
  constructor() {
    this.selectedIdSubject.pipe(
      tap(()=> this.setLoadingIndicator(true)),
      tap(id => this.setCurrentMember(id)),
      switchMap(id => this.getTodos(id)),
      delay(1000),
      takeUntilDestroyed(),
    ).subscribe(todos => this.setMemberTodos(todos));
   }


  // this code is called a reducer
  private setLoadingIndicator(isLoading: boolean){
    this.state.update(state => ({...state, isLoading : isLoading}));
  }

  private setCurrentMember(id : number){
    const member = this.userService.getCurrentMember(id);
    this.state.update(state =>({
      ...state,
      currentMember : member,
      memberTodos : []
    }))
  }

  private getTodos(id: number): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todoUrl}?userId=${id}`).pipe(
      // Cut the length of the long strings
      map(data => data.map(t =>
        t.title.length > 20 ? ({...t, title: t.title.substring(0, 20)}) : t
      )),
      catchError(err => this.setError(err))
    )
  }

  private setError(err: HttpErrorResponse): Observable<Todo[]> {
    const errorMessage = setErrorMessage(err);
    this.state.update(state => ({
      ...state,
      error: errorMessage
    }))
    return of([]);
  }

  private setMemberTodos(todos : Todo[]){
    this.state.update(state => ({
      ...state, memberTodos : todos, isLoading : false
    }))
  }

  public filterTodos(filter : boolean){
    this.state.update(state => ({
      ...state,
      inCompleteOnly : filter
    }))
  }

  getTodosForMember(memberId : number){
    this.selectedIdSubject.next(memberId);
  }

  changeStatus(task: Todo, status: boolean) {
    // Mark the task as completed
    const updatedTasks = this.memberTodos().map(t =>
      t.id === task.id ? { ...t, completed: status} : t);
    this.state.update(state => ({
      ...state,
      memberToDos: updatedTasks,
    }));
   }
}

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoState{
  isLoading: boolean;
  currentMember : User | undefined;
  memberTodos : Todo[];
  inCompleteOnly : boolean;
  error : string | null;
}

// This should be somewhere reusable
export function setErrorMessage(err: HttpErrorResponse): string {
  let errorMessage: string;
  if (err.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    errorMessage = `An error occurred: ${err.error.message}`;
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    errorMessage = `Backend returned code ${err.status}: ${err.message}`;
  }
  console.error(err);
  return errorMessage;
}
