import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { LazyComponent } from './lazy.component';
import { InnerLazySecondComponent } from './inner-lazy-second/inner-lazy-second.component';


@NgModule({
  declarations: [
    LazyComponent,
    InnerLazySecondComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingModule
  ]
})
export class LazyModule { }
