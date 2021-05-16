import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';

import { ThirdComponent } from './components/third/third.component';
import { OverlayComponent } from './components/overlay/overlay.component';


import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { LoggerService } from './services/logger.service';
import { ExtendedLoggerService } from './services/extended-logger.service';
import { AppConfig, APP_CONFIG } from './app.config';
import { InjectorsHierarchyComponent } from './components/injectors-hierarchy/injectors-hierarchy.component';
import { ConfigurableModule } from './modules/configurable';
import { FillComponent } from './components/fill/fill.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    OverlayComponent,
    InjectorsHierarchyComponent,
    FillComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // cdk
    PortalModule,
    OverlayModule,
    A11yModule,

     // Material modules
     MatButtonModule,
     MatChipsModule,
     MatExpansionModule,
     MatFormFieldModule,
     MatInputModule,
     MatListModule,
     MatListModule,
     MatListModule,
     MatMenuModule,
     MatProgressBarModule,
     MatProgressSpinnerModule,
     MatRadioModule,
     MatSidenavModule,
     MatSlideToggleModule,
     MatTableModule,
     MatTabsModule,
     MatIconModule,
     ConfigurableModule.forRoot()//.forChild({interval: 50})
  ],
  providers: [{
      provide: LoggerService,
      useFactory: (config: AppConfig) =>{
          return config.useExtendLoger ? new ExtendedLoggerService() : new LoggerService()
      },
      deps: [APP_CONFIG]
  },
   // LoggerService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
