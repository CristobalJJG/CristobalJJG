import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  template: "{{ sentence }}"
})
export class TooltipComponent {

  @Input() sentence!: string; /* Frase que contendrá */
}
