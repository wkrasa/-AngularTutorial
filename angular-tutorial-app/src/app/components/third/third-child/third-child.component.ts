import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges, DoCheck } from '@angular/core';


@Component({
  selector: 'at-third-child',
  templateUrl: './third-child.component.html',
  styleUrls: ['./third-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThirdChildComponent implements OnInit, OnChanges, DoCheck {

  @Input() text;

  ngOnChanges(changes): void {
    console.log('ThirdChildComponent: ngOnChanges', changes);
  }

  ngOnInit(): void {
    console.log('ThirdChildComponent: ngOnInit');
  }

  ngDoCheck(): void {
    console.log('ThirdChildComponent: ngDoCheck');
  }


}
