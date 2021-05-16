import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InnerLazySecondComponent } from './inner-lazy-second/inner-lazy-second.component';
import { LazyComponent } from './lazy.component';
import { UserComponent } from './user/user.component';
import { UserResolver } from './user/user.resolver';

const routes: Routes = [
  {
    path: '',
    component: LazyComponent,
    children:[
      {
        path: 'inner-lazy',
        loadChildren: () => import('./inner-lazy/inner-lazy/inner-lazy.module').then(m => m.InnerLazyModule)
      },
      {
        path: 'inner-lazy-second',
        component: InnerLazySecondComponent
      },
      {
        path: 'user/:id',
        component: UserComponent,
        resolve: {user: UserResolver}
      },
      {
        path: '**',
        redirectTo: 'inner-lazy'
      },
      {
        path: 'secondary-inner-lazy-second',
        component: InnerLazySecondComponent,
        outlet: 'secondary'
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
