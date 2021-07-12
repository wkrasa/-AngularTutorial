import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { LazyComponent } from './lazy.component';
import { InnerLazySecondComponent } from './inner-lazy-second/inner-lazy-second.component';
import { ConfigurableModule } from '../modules/configurable';
import { UserComponent } from './user/user.component';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatSidenavModule  } from '@angular/material/sidenav';


@NgModule({
  declarations: [
    LazyComponent,
    InnerLazySecondComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingModule,
    ConfigurableModule.forChild({interval:100 }),
    MatCardModule,
    MatButtonModule,
    MatSidenavModule
  ]
})
export class LazyModule { }
