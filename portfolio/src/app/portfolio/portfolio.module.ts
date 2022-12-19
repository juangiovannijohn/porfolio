import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { WordpressComponent } from './wordpress/wordpress.component';
import { MainPortfolioComponent } from './main-portfolio/main-portfolio.component';


@NgModule({
  declarations: [
    WordpressComponent,
    MainPortfolioComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }
