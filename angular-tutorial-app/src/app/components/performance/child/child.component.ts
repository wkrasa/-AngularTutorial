import { ChangeDetectionStrategy, Component, DoCheck, Input, OnInit } from '@angular/core';
import { ChildModel } from './child.model';

@Component({
  selector: 'at-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit, DoCheck {

  @Input() model: ChildModel;

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(){
    console.log('ChildComponent: ngDoCheck');
  }

  update(){
    this.model.prop1 += 1;
    this.model.prop2 += 1;
    this.model.prop3 += 1;
    this.model.prop4 += 1;
  }

}
