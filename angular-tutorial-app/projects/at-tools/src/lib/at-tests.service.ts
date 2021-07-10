import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface AtTest{
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class AtTestsService {

  private readonly tests: AtTest[] = [
    { id: 1, name: 'Test 1'},
    { id: 2, name: 'Test 2'},
    { id: 3, name: 'Test 3'},
    { id: 4, name: 'Test 4'},
    { id: 5, name: 'Test 5'},
    { id: 6, name: 'Test 6'}
  ];

  getUserById(id: number): Observable<AtTest>{
    return of(this.tests.find(user => user.id === id));
  }

  getUsers(): Observable<AtTest[]>{
    return of(this.tests);
  }
}
