import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  constructor(private translate: TranslateService) {
    this.setAppLang();
  }

  setAppLang(): void {
    this.translate.setDefaultLang('en');
    this.translate.use(this.translate.getBrowserLang()!);
  }
}