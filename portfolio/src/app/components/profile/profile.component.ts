import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tag } from 'src/class/tag';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  protected tagsFront: Tag[] = [];
  protected tagsLang: Tag[] = [];
  protected tagsSO: Tag[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('../../assets/data/tags.json')
      .subscribe((res: any) => {
        this.tagsFront = [...res['tagsFront'], ...res['tagsBack']];
        this.tagsSO = res['tagsSO'];
        this.tagsLang = res['tagsLang'];
      });
  }
}
