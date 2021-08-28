import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
  Renderer2
} from '@angular/core';
import { fromEvent, merge, of, Subject } from 'rxjs';
import { debounceTime, mapTo, repeat, switchMap, takeUntil, tap } from 'rxjs/operators';

@Directive({
  selector: '[tooltip]',
  exportAs: 'tooltip'
})
export class TooltipDirective implements OnInit, OnDestroy {

  @Input() tooltip: string;
  private unsubscribe$ = new Subject<void>();
  tooltipVisible$: any;

  tooltipElement: HTMLElement;

  constructor(private el: ElementRef, private renderer : Renderer2){

  }

  ngOnInit(){
      const mousemove = fromEvent(this.el.nativeElement, 'mousemove').pipe(mapTo(false));

      const hide$ = mousemove.pipe(mapTo(false));
      const end$ = fromEvent(this.el.nativeElement, 'mouseleave').pipe(mapTo(false));
      const show$ = mousemove.pipe(
        debounceTime(500),
        mapTo(true))
        merge(  show$, hide$, end$).pipe(takeUntil(this.unsubscribe$), takeUntil(end$), tap(x => console.log(x)), repeat()).subscribe(x => x ? this.addTooltip() : this.removeToolip());



      // const show$ = mousemove.pipe(mapTo(false));
      // const hide$ = mousemove.pipe(switchMap(() => of(1).pipe(debounceTime(500), mapTo(true))));
      // merge(show$, hide$ ).subscribe(x => x ? this.addTooltip() : this.removeToolip());

  }

  ngOnDestroy(){
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private addTooltip(){
    if(!!this.tooltipElement){
      return;
    }
    this.tooltipElement = this.renderer.createElement('span');
    this.renderer.appendChild(
      this.tooltipElement,
      this.renderer.createText(this.tooltip)
    );
    this.renderer.appendChild(this.el.nativeElement, this.tooltipElement);
  }

  private removeToolip(){
    if( !!this.tooltipElement){
      this.renderer.removeChild(document.body, this.tooltipElement);
      this.tooltipElement = null;
    }
  }

}
