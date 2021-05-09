import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class ExtendedLoggerService extends LoggerService {

  separator = " - ";

  constructor() {
    super();
  }

  log(message = null): void{
    let log = `${this.separator}ExtendedLoggerService`;
    if(!!message){
      log += `${this.separator}${message}`;
    }
    console.log(log);
  }
}
