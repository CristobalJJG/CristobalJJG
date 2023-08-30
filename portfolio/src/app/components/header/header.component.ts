import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  selected;
  constructor(private translate: TranslateService) {
    this.selected = this.translate.getBrowserLang()!;
  }

  doTranslate(event: any) { this.translate.use(event); }
}
