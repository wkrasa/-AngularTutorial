import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragAndDropComponent } from './components/drag-and-drop/drag-and-drop.component';
import { DynamicComponentsComponent } from './components/dynamic-components/dynamic-components.component';
import { FillComponent } from './components/fill/fill.component';
import { FirstComponent } from './components/first/first.component';
import { ValueAccessorComponent } from './components/form/value-accessor/value-accessor.component';
import { InjectorsHierarchyComponent } from './components/injectors-hierarchy/injectors-hierarchy.component';
import { LoginComponent } from './components/login/login.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { ParentComponent } from './components/performance/parent/parent.component';
import { SecondComponent } from './components/second/second.component';
import { AuthGuardService } from './route-guards/auth-guard.service';

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
    component: OverlayComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'fill',
    component: FillComponent
  },
  {
    path: 'performance',
    component: ParentComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'injectors-hierarchy',
    component: InjectorsHierarchyComponent
  },
  {
    path: 'drag-and-drop',
    component: DragAndDropComponent
  },
  {
    path: 'dynamic',
    component: DynamicComponentsComponent
  },
  {
    path: 'value-accessor',
    component: ValueAccessorComponent
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
