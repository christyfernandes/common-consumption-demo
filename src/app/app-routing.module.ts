import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'common-consumption-library-demo',
    loadChildren: './demo-full/demo-full.module#DemoFullModule'
  },
  {
    path: '',
    redirectTo: 'common-consumption-library-demo',
    pathMatch: 'full'
  },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'top',
      scrollOffset: [0, 48]
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
