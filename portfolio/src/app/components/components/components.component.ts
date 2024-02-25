import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { getComponents } from './components';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent {
  constructor(private route: ActivatedRoute, private router: Router) { }
  activatedComponent = -1;
  components = getComponents();

  ngOnInit() {
    this.route.params.forEach((p: Params) => {
      if (p['id'] !== undefined) this.activatedComponent = p['id']
    })
  }

  activateComponent(_id: number) {
    let url = '/components';
    let id = -1;
    if (_id !== this.activatedComponent && _id >= 0) {
      id = _id;
      url = url + '/' + id;
    }
    this.activatedComponent = id;
    this.router.navigateByUrl(url);
  }


}
