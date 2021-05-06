import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { SecondComponent } from './components/second/second.component';

const routes: Routes = [
  {
    path: 'first',
    component: FirstComponent
  },
  {
    path: 'second',
    component: SecondComponent
  },
  {
    path: 'overlay',
    component: OverlayComponent
  },
  { path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) },
  {
    path: '**',
    redirectTo: 'first'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
