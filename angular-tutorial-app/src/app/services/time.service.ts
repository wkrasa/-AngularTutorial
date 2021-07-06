import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  TIME_URL = 'http://worldclockapi.com/api/json/est/now';

  constructor(private http: HttpClient){

  }

  getTime(){
    return this.http.get<number>(this.TIME_URL).pipe(pluck('currentFileTime'),map(time => +time));
  }
}
