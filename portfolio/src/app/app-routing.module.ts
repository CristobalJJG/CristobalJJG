import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoComponent } from './pages/so/so.page';
import { FrameworksComponent } from './pages/frameworks/frameworks.page';
import { LangComponent } from './pages/lang/lang.page';
import { ToolsComponent } from './pages/tools/tools.page';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'so', component: SoComponent },
  { path: 'framework', component: FrameworksComponent },
  { path: 'language', component: LangComponent },
  { path: 'tools', component: ToolsComponent },
  /* { path: 'home', component: HomePageComponent }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
