import { Observable, Subscriber } from "rxjs"
import { filter, map } from "rxjs/operators"

export function myOperator(mul) {
  return (o$) => {
    return o$.pipe(map((val:number)=> val*mul))
  }
}

export function takeEveryNth(n: number) {
  return filter((_,i) => (i % n) === 0)
}


export function myMap<T,R>(fn: (value:T)=>R) {
  return (source: Observable<T>) => new Observable<R>(subscriber => {
    return source.subscribe({
      next: v => {
        let val:R = null;
        try{
          val = fn(v);
        }
        catch(e){
          subscriber.error(e)
        }
        subscriber.next(val)
      },
      error: e => subscriber.error(e),
      complete: () => subscriber.complete()
    });
  })
}
