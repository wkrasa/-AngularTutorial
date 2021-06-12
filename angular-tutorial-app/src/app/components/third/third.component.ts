import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';
import { PortalService } from '../../services/portal-service/portal.service';

@Component({
  selector: 'at-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: LoggerService,
      useClass: LoggerService
    }
  ]
})
export class ThirdComponent implements OnInit {

  portal$: any;

  constructor(
    private logger: LoggerService,
    public portalService: PortalService) {

  }

  ngOnInit(): void {
    this.logger.log('ThirdComponent');
    this.portal$ = this.portalService.portal$;
  }

  onIconPickerSelect(newIcon){
    console.log(newIcon);
  }

}
