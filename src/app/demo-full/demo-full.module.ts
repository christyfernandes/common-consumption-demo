import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from './layout/layout.module';
import { AppDemoFullRoutingModule } from './demo-full.routing.module';
import { CommonConsumptionModule } from '@project-sunbird/common-consumption';
import { DemoCardsComponent } from './demo-cards/demo-cards.component';
import { AppSharedService } from './shared.service';
import { DemoCardsGridComponent } from './demo-cards-grid/demo-cards-grid.component';
import { DemoCardsStackComponent } from './demo-cards-stack/demo-cards-stack.component';
import { DemoFiltersComponent } from './demo-filters/demo-filters.component';
import { DemoTocComponent } from './demo-toc/demo-toc.component';
import { DemoFaqComponent } from './demo-faq/demo-faq.component';

@NgModule({
  declarations: [HomeComponent,
    DemoCardsComponent,
    DemoCardsGridComponent, DemoCardsStackComponent, DemoFiltersComponent, DemoTocComponent, DemoFaqComponent],
  imports: [
    CommonModule,
    LayoutModule,
    AppDemoFullRoutingModule,
    CommonConsumptionModule
  ],
  providers: [AppSharedService]
})
export class DemoFullModule { }
