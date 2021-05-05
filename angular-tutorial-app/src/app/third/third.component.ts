import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PortalService } from '../services/portal-service/portal.service';

@Component({
  selector: 'at-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThirdComponent implements OnInit {

  portal$: any;

  constructor(public portalService: PortalService) {

  }

  ngOnInit(): void {
    this.portal$ = this.portalService.portal$;
  }

}
