import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ComponentsComponent } from './components/components/components.component';
import { UserCardComponent } from './components/components/user-card/user-card.component';

const routes: Routes = [
  { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'components', component: ComponentsComponent },
  {
    path: 'components', component: ComponentsComponent, children: [
      { path: '0', component: UserCardComponent },
      { path: '1', component: UserCardComponent },
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
