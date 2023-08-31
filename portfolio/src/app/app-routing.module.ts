import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationComponent } from './pages/information/information.component';
import { KnowledgeComponent } from './pages/knowledge/knowledge.page';
import { StudiesComponent } from './pages/studies/studies.page';

const routes: Routes = [
  { path: '', redirectTo: '/information', pathMatch: 'full' },
  { path: 'information', component: InformationComponent },
  { path: 'knowledge', component: KnowledgeComponent },
  { path: 'studies', component: StudiesComponent },
  /* { path: 'home', component: HomePageComponent }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
