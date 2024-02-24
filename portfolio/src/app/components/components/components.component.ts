import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent {
  constructor(private route: ActivatedRoute) { }
  activatedComponent = -1;

  ngOnInit() {
    this.route.params.forEach((p: Params) => {
      if (p['id'] !== undefined) this.activatedComponent = p['id']
    })
  }
}
