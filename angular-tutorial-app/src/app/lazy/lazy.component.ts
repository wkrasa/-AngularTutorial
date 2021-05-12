import { Component, OnInit } from '@angular/core';
import { PollingService } from '../modules/configurable';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss']
})
export class LazyComponent implements OnInit {

  constructor(public pollingService: PollingService,) { }

  ngOnInit(): void {
  }

}
