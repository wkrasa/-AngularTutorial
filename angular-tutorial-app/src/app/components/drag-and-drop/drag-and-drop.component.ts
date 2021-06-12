import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { done, ListItem, todo } from './items.data';
import {CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';



@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DragAndDropComponent implements OnInit {


  todo = todo;
  done = done;

  constructor() { }

  ngOnInit(): void {
  }

  onDrop(event: CdkDragDrop<ListItem[]>){
    if(event.previousContainer === event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
    else{
      const item = event.previousContainer.data[event.previousIndex];
      item.status = item.status === 'done' ? 'todo' : 'done';
      transferArrayItem(event.previousContainer.data ,event.container.data, event.previousIndex, event.currentIndex);
    }
  }

}
