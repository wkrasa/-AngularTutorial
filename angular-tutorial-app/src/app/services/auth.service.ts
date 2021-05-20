import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;

  constructor() {

  }

  logIn(){
    this.isLoggedIn = true;
    console.log('isLoggedIn: ', this.isLoggedIn);
  }

  logOut(){
    this.isLoggedIn = false;
    console.log('isLoggedIn: ', this.isLoggedIn);
  }
}
