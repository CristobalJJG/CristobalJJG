import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent {
    @Input() title?: string;
    @Input() image?: string;
    @Input() description?: string;
    @Input() width: 's' | 'm' | 'l' = 'm';
    @Input() height: 's' | 'm' | 'l' = 'm';

    get sizeClass(): string {
        const w: Record<string, string> = { s: 'w-48', m: 'w-64', l: 'w-80' };
        const h: Record<string, string> = { s: 'h-56', m: 'h-72', l: 'h-96' };
        return `${w[this.width] || w['m']} ${h[this.height] || h['m']}`;
    }
}
