import { ChangeDetectionStrategy, Component, DoCheck, OnInit } from '@angular/core';
import { ChildModel } from '../child/child.model';

@Component({
  selector: 'at-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentComponent implements OnInit, DoCheck {

  models: ChildModel[];

  message='parent works!';
  message2='parent works!!';

  constructor() {
    this.models = this.createModels();

  }

  ngOnInit(): void {

  }

  ngDoCheck(){
    console.log('ParentComponent: ngDoCheck');
  }

  updateMessage(){
    this.message += ' 1';
    this.models[0].name = this.models[0].name + ' 1';
    //this.models = this.createModels();
  }

  recreateModels(){
    this.models = this.createModels();
  }

  createModels(): ChildModel[]{
    const res = [];
    for(let i=0;i<100; ++i){
      res.push({
        id:i,
        name: `name ${i}`,
        prop1: i,
        prop2: i,
        prop3: i,
        prop4: i,
        prop5: i,
        prop6: i,
        prop7: i,
        prop8: i,
        prop9: i,
        prop10: i,
      });
    }
    return res;
  }

  trackByFn(index, model: ChildModel) {
    return model.id; // or item.id
  }

}
