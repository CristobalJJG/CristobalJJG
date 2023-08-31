import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Importaciones para el traductor */
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

/* Importacion de componentes */
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { TagComponent } from './components/tag/tag.component';
import { InformationComponent } from './pages/information/information.component';

/* Importacion de modulos */
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { KnowledgeComponent } from './pages/knowledge/knowledge.page';
import { SafeHtmlPipe } from '../pipes/safe-html.pipe';
import { StudiesComponent } from './pages/studies/studies.page';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HeaderComponent,
    TagComponent,
    InformationComponent,
    KnowledgeComponent,
    SafeHtmlPipe,
    StudiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
