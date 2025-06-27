import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { toSignal } from "@angular/core/rxjs-interop";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  protected http = inject(HttpClient)
  #UsersUrl : string = "https://jsonplaceholder.typicode.com/users";
  public Users = toSignal(this.http.get<User[]>(`${this.#UsersUrl}`), {initialValue : []})

  constructor() { }
  getCurrentMember(id: number): User | undefined {
    return this.Users().find(m => m.id === id);
  }

}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  website: string;
}
