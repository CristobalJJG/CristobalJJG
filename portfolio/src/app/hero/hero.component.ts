import { Component } from '@angular/core';

import { TranslatePipe } from '../i18n/translate.pipe';

@Component({
    selector: 'app-hero',
    imports: [TranslatePipe],
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss']
})
export class HeroComponent { }
