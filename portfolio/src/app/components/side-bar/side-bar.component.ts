import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/class/tag';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  tagsFront: Tag | undefined;
  tagsSO: Tag | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('../../assets/data/tags.json')
      .subscribe((res: any) => {
        this.tagsFront = res['tagsFront'][0];
        this.tagsSO = res['tagsSO'][0];
      });
  }
}
