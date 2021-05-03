import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InnerLazyComponent } from './inner-lazy.component';

const routes: Routes = [{ path: '', component: InnerLazyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InnerLazyRoutingModule { }
