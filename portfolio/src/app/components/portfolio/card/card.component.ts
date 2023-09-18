import { Component, Input } from '@angular/core';
import { Portfolio } from 'src/class/portfolio';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() portfolio: Portfolio | undefined = undefined;
}
