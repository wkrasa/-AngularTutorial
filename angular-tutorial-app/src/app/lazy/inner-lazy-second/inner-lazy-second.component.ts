import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'inner-lazy-second',
  templateUrl: './inner-lazy-second.component.html',
  styleUrls: ['./inner-lazy-second.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InnerLazySecondComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
