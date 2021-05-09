import { Injectable } from '@angular/core';

export class LoggerService {

  separator = " ";

  constructor() {

  }

  log(message = null): void{
    let log = `${this.separator}LoggerService`;
    if(!!message){
      log += `${this.separator}${message}`;
    }
    console.log(log);
  }
}
