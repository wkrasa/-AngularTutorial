import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InnerLazyRoutingModule } from './inner-lazy-routing.module';
import { InnerLazyComponent } from './inner-lazy.component';


@NgModule({
  declarations: [
    InnerLazyComponent
  ],
  imports: [
    CommonModule,
    InnerLazyRoutingModule
  ]
})
export class InnerLazyModule { }
