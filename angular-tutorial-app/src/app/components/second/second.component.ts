import { CdkPortal, TemplatePortal } from '@angular/cdk/portal';
import { AfterViewInit, Component, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { PollingService } from 'src/app/modules/configurable';
import { LoggerService } from 'src/app/services/logger.service';
import { PortalService } from '../../services/portal-service/portal.service';

@Component({
  selector: 'at-second-component',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit, OnDestroy, AfterViewInit   {

  @ViewChild(CdkPortal, {static: true})
  portalContent: CdkPortal;

  message = "second works!";

  constructor(
    public portalService: PortalService,
    private logger: LoggerService,
    public pollingService: PollingService,
    private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
    this.logger.log('SecondComponent');
    this.portalService.setPortal(this.portalContent);
  }

  ngAfterViewInit(): void {
    this.portalService.setPortal(this.portalContent);
  }

  ngOnDestroy(): void {
    this.portalContent.detach();
  }
}
