import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { LazyComponent } from './lazy.component';
import { InnerLazySecondComponent } from './inner-lazy-second/inner-lazy-second.component';
import { ConfigurableModule } from '../modules/configurable';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    LazyComponent,
    InnerLazySecondComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingModule,
    ConfigurableModule.forChild({interval:100 })
  ]
})
export class LazyModule { }
