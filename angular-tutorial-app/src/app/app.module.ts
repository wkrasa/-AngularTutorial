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
import { DragDropModule } from '@angular/cdk/drag-drop';

import { ThirdComponent } from './components/third/third.component';
import { OverlayComponent } from './components/overlay/overlay.component';


import { MatToolbarModule } from '@angular/material/toolbar';
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
import { MatCardModule } from '@angular/material/card';
import { LoggerService } from './services/logger.service';
import { ExtendedLoggerService } from './services/extended-logger.service';
import { AppConfig, APP_CONFIG } from './app.config';
import { InjectorsHierarchyComponent } from './components/injectors-hierarchy/injectors-hierarchy.component';
import { ConfigurableModule } from './modules/configurable';
import { FillComponent } from './components/fill/fill.component';
import { LoginComponent } from './components/login/login.component';
import { ParentComponent } from './components/performance/parent/parent.component';
import { ChildComponent } from './components/performance/child/child.component';
import { DragAndDropComponent } from './components/drag-and-drop/drag-and-drop.component';
import { DynamicComponentsComponent } from './components/dynamic-components/dynamic-components.component';
import { ViewContainerDirective } from './components/dynamic-components/view-container-directive';
import { ChildOneComponent } from './components/dynamic-components/children/child-one/child-one.component';
import { ChildTwoComponent } from './components/dynamic-components/children/child-two/child-two.component';
import { ChildThreeComponent } from './components/dynamic-components/children/child-three/child-three.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValueAccessorComponent } from './components/form/value-accessor/value-accessor.component';
import { DoubleValueComponent } from './components/form/double-value/double-value.component';
import { CustomControlComponent } from './components/form/custom-control/custom-control.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AtToolsModule } from 'at-tools';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    OverlayComponent,
    InjectorsHierarchyComponent,
    FillComponent,
    LoginComponent,
    ParentComponent,
    ChildComponent,
    DragAndDropComponent,
    DynamicComponentsComponent,
    ViewContainerDirective,
    ChildOneComponent,
    ChildTwoComponent,
    ChildThreeComponent,
    ValueAccessorComponent,
    DoubleValueComponent,
    CustomControlComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

    // cdk
    PortalModule,
    OverlayModule,
    A11yModule,
    DragDropModule,

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
     MatCardModule,
     MatRadioModule,
     MatToolbarModule,
     ConfigurableModule.forRoot(),//.forChild({interval: 50})

     AtToolsModule
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
