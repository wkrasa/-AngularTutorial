
import { interval, merge, concat } from "rxjs"
import { filter, mapTo, scan, share, shareReplay, tap } from "rxjs/operators"

export const rxjsTest = function(){
  const oneSecond = interval(1000).pipe(shareReplay(1));
  const twoSeconds = interval(2000);
  const threeSeconds = interval(3000);
  //move it to component, so it can be wrapped with button acitons
  // switchMap vs mergeMap vs concatMap vs exhaustMap
  //use timer(0,1000)
  // create custom operator

  // MERGE
  // merge(oneSecond, twoSeconds, threeSeconds)
  //   .pipe(
  //     tap(x => console.log(x)),
  //     filter(x => x%2===0),
  //     scan((acc, val) => acc + val),
  //     tap(x => console.log(x)))
  //   .subscribe();

    merge(oneSecond, oneSecond)
    .pipe(
      tap(x => console.log(x)))
    .subscribe();
}
