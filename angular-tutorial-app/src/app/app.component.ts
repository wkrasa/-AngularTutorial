import { AfterViewInit, Component, OnInit } from '@angular/core';
import { PortalService } from './services/portal-service/portal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'angular-tutorial-app';

  constructor(private portalService: PortalService){

  }

  ngOnInit(): void {

  }
}
