import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../i18n/translate.pipe';

@Component({
    selector: 'app-hero',
    standalone: true,
    imports: [CommonModule, TranslatePipe],
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss']
})
export class HeroComponent { }
