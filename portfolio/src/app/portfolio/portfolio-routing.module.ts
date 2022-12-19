import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordpressComponent } from './wordpress/wordpress.component';
import { MainPortfolioComponent } from './main-portfolio/main-portfolio.component';

const routes: Routes = [
  {
    path: '',
    component: MainPortfolioComponent,
    children: [
      { path: 'wordpress', component: WordpressComponent },
      { path: '**', redirectTo: '' },
    ]
    //children: [{ path: 'logueo', component: LoginComponent },]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
