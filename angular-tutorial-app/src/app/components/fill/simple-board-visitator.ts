import { interval, Observable, Subject, Subscription } from "rxjs";
import { tap } from "rxjs/operators";
import { Board } from "./board";

export class SimpleBoardVisitator{
private subsrciption= new Subscription();

  private x = 0;
  private y = 0;

  isPaused = false;

  finished = new Subject<void>();
  finished$ = this.finished.asObservable();

  step = new Subject<void>();
  step$ = this.step.asObservable();

  constructor(private board: Board){

  }

  start(){
    this.subsrciption .add(interval(10).pipe(tap(() => {
      this.visitNext();
    })).subscribe());
  }

  pause(){
    this.isPaused  = true;
  }

  resume(){
    this.isPaused  = false;
  }

  stop(){
    this.subsrciption.unsubscribe();
  }

  visitNext(){

    if(this.isPaused){
      return;
    }

    if(this.y >= this.board.height){
      this.subsrciption.unsubscribe();
      this.finished.next();
      return;
    }

    this.board.visitXY(this.x, this.y);
    this.step.next();

    this.x += 1;
    if(this.x >= this.board.width){
      this.x = 0;
      this.y += 1;
    }
  }
}
