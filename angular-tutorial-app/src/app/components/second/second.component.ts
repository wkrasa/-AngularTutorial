import { CdkPortal, TemplatePortal } from '@angular/cdk/portal';
import { AfterViewInit, Component, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
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

  constructor(public portalService: PortalService,
    private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
    this.portalService.setPortal(this.portalContent);
  }

  ngAfterViewInit(): void {
    this.portalService.setPortal(this.portalContent);
  }

  ngOnDestroy(): void {
    this.portalContent.detach();
  }
}
