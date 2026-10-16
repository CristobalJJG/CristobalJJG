import { Component } from '@angular/core';

import { TranslatePipe } from '../i18n/translate.pipe';

@Component({
    selector: 'app-contact',
    imports: [TranslatePipe],
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';

  submitForm() {
    // Lógica de envío del formulario
    console.log('Form submitted:', this.name, this.email, this.message);
  } }
