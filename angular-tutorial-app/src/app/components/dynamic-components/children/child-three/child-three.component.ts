import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-child-three',
  templateUrl: './child-three.component.html',
  styleUrls: ['./child-three.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildThreeComponent implements OnInit {

  @Input() message: string;

  constructor() { }

  ngOnInit(): void {
  }

}
