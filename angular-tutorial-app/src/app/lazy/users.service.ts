import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface User{
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private readonly users: User[] = [
    { id: 1, name: 'User 1'},
    { id: 2, name: 'User 2'},
    { id: 3, name: 'User 3'},
    { id: 4, name: 'User 4'},
    { id: 5, name: 'User 5'},
    { id: 6, name: 'User 6'}
  ];
  constructor() { }

  getUserById(id: number): Observable<User>{
    return of(this.users.find(user => user.id === id));
  }

  getUsers(): Observable<User[]>{
    return of(this.users);
  }
}
