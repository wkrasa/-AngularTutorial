import { Directive, Input, OnChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAppFor]'
})
export class AppForDirective implements OnChanges {
  @Input() appAppForIn: any[];

  constructor(private template: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

  ngOnChanges(){
    this.viewContainer.clear();
    if(Array.isArray(this.appAppForIn)){
      this.appAppForIn.forEach((item, index) => {
        const contex = { $implicit: item, index };
        this.viewContainer.createEmbeddedView(this.template, contex);
      });
    }
  }

}
