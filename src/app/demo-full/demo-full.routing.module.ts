import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DemoCardsComponent } from './demo-cards/demo-cards.component';
import { DemoCardsGridComponent } from './demo-cards-grid/demo-cards-grid.component';
import { DemoCardsStackComponent } from './demo-cards-stack/demo-cards-stack.component';
import { DemoFiltersComponent } from './demo-filters/demo-filters.component';
import { DemoTocComponent } from './demo-toc/demo-toc.component';
import { DemoFaqComponent } from './demo-faq/demo-faq.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'cards',
    component: DemoCardsComponent,
    pathMatch: 'full'
  },
  {
    path: 'grid',
    component: DemoCardsGridComponent,
    pathMatch: 'full'
  },
  {
    path: 'stack',
    component: DemoCardsStackComponent,
    pathMatch: 'full'
  },
  {
    path: 'filters',
    component: DemoFiltersComponent,
    pathMatch: 'full'
  },
  {
    path: 'toc',
    component: DemoTocComponent,
    pathMatch: 'full'
  },
  {
    path: 'faq',
    component: DemoFaqComponent,
    pathMatch: 'full'
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppDemoFullRoutingModule { }
