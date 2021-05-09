import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { AppConfig, APP_CONFIG } from './app.config';
import { PortalService } from './services/portal-service/portal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'angular-tutorial-app';

  constructor(private portalService: PortalService,
      @Inject(APP_CONFIG) private appConfig: AppConfig){
        console.log(appConfig);

  }

  ngOnInit(): void {

  }
}
