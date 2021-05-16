import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Board } from './board';
import { SimpleBoardVisitator } from './simple-board-visitator';

@Component({
  selector: 'at-fill',
  templateUrl: './fill.component.html',
  styleUrls: ['./fill.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FillComponent implements OnInit {

  board: Board = Board.create(30, 30);
  visitator: SimpleBoardVisitator;
  isFinished$: Observable<void>;
  step$: Observable<void>;
  constructor() { }

  ngOnInit(): void {

  }

  start(){
    this.board = Board.create(30,30);
    this.visitator = new SimpleBoardVisitator(this.board);
    this.isFinished$ = this.visitator.finished$.pipe(tap(() => this.visitator = null));
    this.step$ = this.visitator.step$;
    this.visitator.start();
  }

  stop(){
    this.visitator.stop();
    this.visitator = null;
  }

  pause(){
    this.visitator?.pause();
  }

  resume(){
    this.visitator?.resume();
  }

}
