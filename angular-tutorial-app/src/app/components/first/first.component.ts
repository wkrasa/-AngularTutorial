import { CdkPortal, TemplatePortal } from '@angular/cdk/portal';
import { AfterViewInit, Component, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { PollingService } from 'src/app/modules/configurable';
import { ExtendedLoggerService } from 'src/app/services/extended-logger.service';
import { LoggerService } from 'src/app/services/logger.service';
import { PortalService } from '../../services/portal-service/portal.service';

@Component({
  selector: 'at-first-component',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent implements OnInit, OnDestroy, AfterViewInit  {

  @ViewChild(CdkPortal, {static: true})
  portalContent: CdkPortal;

  message = "first works!";

  constructor(
    public portalService: PortalService,
    private logger: LoggerService,
    public pollingService: PollingService,
    private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
    this.logger.log('FirstComponent');
    this.portalService.setPortal(this.portalContent);
  }

  ngAfterViewInit(): void {

  }

  ngOnDestroy(): void {
    this.portalContent.detach();
  }

}
