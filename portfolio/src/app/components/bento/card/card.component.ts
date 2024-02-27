import { Component, Input } from '@angular/core';

@Component({
  selector: 'bento-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class BentoCardComponent {
  @Input() imgSource: string = "";
  @Input() alt!: string;
}
