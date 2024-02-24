import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SafeHtmlPipe } from 'src/pipes/safe-html.pipe';


/* Importaciones para el traductor */
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

/* Cosas de angular */
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

/* Componentes */
import { AppComponent } from './app.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { CardComponent } from './components/portfolio/card/card.component';
import { UserCardComponent } from './components/components/user-card/user-card.component';
import { ComponentsComponent } from './components/components/components.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    SafeHtmlPipe,
    AppComponent,
    TooltipComponent,
    HeaderComponent,
    ProfileComponent,
    AboutMeComponent,
    PortfolioComponent,
    CardComponent,
    UserCardComponent,
    ComponentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
