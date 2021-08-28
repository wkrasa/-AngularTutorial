import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { BehaviorSubject, from, fromEvent, interval, merge, Observable, Subject } from 'rxjs';
import { debounceTime, filter, map, mapTo, repeat, scan, shareReplay, startWith, switchMap, takeWhile, tap, withLatestFrom } from 'rxjs/operators';
import { myMap, takeEveryNth } from './rxjs.operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RxjsComponent implements OnInit {

  @ViewChild('btnTooltip', { static: true }) button: ElementRef;

  tooltipVisible$: Observable<boolean>;
  constructor() { }

  ngOnInit(): void {
    this.rxjsTest();
    this.showTooltipFunc();
  }

  rxjsTest(){
    const oneSecond = interval(1000).pipe(shareReplay(1));
    const twoSeconds = interval(2000);
    const threeSeconds = interval(3000);
    from([1,2,3,4,5]).subscribe(x => console.log('arr: ', x));
    //move it to component, so it can be wrapped with button acitons
    // switchMap vs mergeMap vs concatMap vs exhaustMap
    //use timer(0,1000)
    // create custom operator
    // takeWhile, takeUntil, defer, repeat
    // add tests with observable
    // Rxjs: asyncScheduler

    // MERGE
    // merge(oneSecond, twoSeconds, threeSeconds)
    //   .pipe(
    //     tap(x => console.log(x)),
    //     filter(x => x%2===0),
    //     scan((acc, val) => acc + val),
    //     tap(x => console.log(x)))
    //   .subscribe();

    // MY OPERATOR
    // merge(oneSecond, oneSecond)
    // .pipe(
    //   myOperator(1000),
    //   tap(x => console.log(x)))
    // .subscribe();

      merge(oneSecond)
      .pipe(
        takeEveryNth(3),
        myMap((n:number) => n * 1000 + 11),
        tap(x => console.log(x)))
      .subscribe();
  }

  // TODO: make interval configurable
  tick$=interval(300);

  paused = new BehaviorSubject(false);
  paused$ =   this.paused.asObservable().pipe(tap(x => console.log('paused', x)));

  started = new BehaviorSubject(false);
  started$ =   this.started.asObservable();

  resetSbj = new BehaviorSubject(false);
  reset$ =   this.resetSbj.asObservable();

  resetToValSbj = new BehaviorSubject(null);
  resetToVal$ =   this.resetToValSbj.asObservable();

  isSarted$ = merge(this.started$, this.paused$)

  result$ =  this.tick$.pipe(
    withLatestFrom(this.paused$, this.started$, this.reset$, this.resetToVal$),
    filter(([t, paused, started, reset]) => reset || (started && !paused)),
    // tap(x => if(reset) this.this.resetSbj.next(false))
    scan((acc: any, [t, paused, started, reset, newVal]) =>{
      // console.log(val)

      if(!!newVal){
        this.resetToValSbj.next(null);
        return newVal;
      }
      if(reset){
        this.resetSbj.next(false);
        this.started.next(false);
        this.paused.next(false);
        return 0;
      }
      else{
        console.log(acc);
        return isNaN(acc) || typeof acc !== 'number'? 1 : ++acc;
      }
  }),
  filter(x => !isNaN(x) && typeof x === 'number'),
    tap(x => {
      console.log(x);
    }),
  takeWhile(x => x < 20),
  repeat())


  start(){
    this.started.next(true);
  }

  pause(){
    this.paused.next(true);
  }

  resume(){
    this.paused.next(false);
  }

  reset(){
    this.resetSbj.next(true);
  }

  resetToVal(val){
    this.resetToValSbj.next(val);
  }

  private showTooltipFunc(){

    const hide$ = fromEvent(this.button.nativeElement, 'mousemove').pipe(mapTo(false));
    const show$ = fromEvent(this.button.nativeElement, 'mousemove').pipe(
      debounceTime(500),
      mapTo(true))
    this.tooltipVisible$ = merge(  show$, hide$);

  }
}
