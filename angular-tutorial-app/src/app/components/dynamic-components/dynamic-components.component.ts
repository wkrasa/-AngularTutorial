import { Component, ComponentFactoryResolver, OnDestroy, OnInit, Type, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { startWith, tap } from 'rxjs/operators';
import { ThirdComponent } from '../third/third.component';
import { ChildOneComponent } from './children/child-one/child-one.component';
import { ChildThreeComponent } from './children/child-three/child-three.component';
import { ChildTwoComponent } from './children/child-two/child-two.component';
import { ViewContainerDirective } from './view-container-directive';

@Component({
  selector: 'app-dynamic-components',
  templateUrl: './dynamic-components.component.html',
  styleUrls: ['./dynamic-components.component.scss']
})
export class DynamicComponentsComponent implements OnInit, OnDestroy {


  @ViewChild(ViewContainerDirective, { static: true}) container: ViewContainerDirective;

  // form = this.fb.group({
  //   propInput: { value: 'lalala'},
  //   selectedComponent: { value: '1' },
  // });


  form = new FormGroup({
    propInput: new FormControl('123'),
    selectedComponent: new FormControl('1')
  });

  private subscription: Subscription;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.subscription = this.form.get('selectedComponent').valueChanges.pipe(
      startWith(this.form.get('selectedComponent').value),
      tap((value) =>{
        const component = this.getComponent(value);
        this.createConmponent(component);
    } ))
    .subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private createConmponent<T>(component: Type<any>){

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);

    const viewContainerRef = this.container.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<typeof component>(componentFactory);
    (componentRef.instance as any).message = "works !"
  }

  private getComponent<T>(val: string):  Type<any>{
    switch(val){
      case '1':
        return ChildOneComponent;
      case '2':
        return ChildTwoComponent;
      case '3':
        return ChildThreeComponent;
      default:
          return null;
    };
  }

}
