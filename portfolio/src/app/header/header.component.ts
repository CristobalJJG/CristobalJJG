import { Component, EventEmitter, Output } from '@angular/core';

import { RouterModule } from '@angular/router';
import { TranslateService } from '../i18n/translate.service';
import { TranslatePipe } from '../i18n/translate.pipe';


@Component({
    selector: 'app-header',
    imports: [RouterModule, TranslatePipe],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    @Output() navigate = new EventEmitter<string>();

    currentLang = 'es';
    menuOpen = false;

    constructor(private translate: TranslateService) {
        this.translate.currentLang$.subscribe(l => this.currentLang = l);
    }

    setLang(lang: string) {
        this.translate.setLang(lang);
    }

    toggleMenu() {
        this.menuOpen = !this.menuOpen;
    }

    closeMenu() {
        this.menuOpen = false;
    }
}
