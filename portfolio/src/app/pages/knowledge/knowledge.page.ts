import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Tag } from 'src/class/tag';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.page.html',
  styleUrls: ['./knowledge.page.scss']
})
export class KnowledgeComponent {
  tagsFront: Tag[] = [];
  tagsLang: Tag[] = [];
  tagsTools: Tag[] = [];
  tagsSO: Tag[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('../../assets/data/tags.json')
      .subscribe((res: any) => {
        this.tagsFront = [...res['tagsFront'], ...res['tagsBack']];
        this.tagsSO = res['tagsSO'];
        this.tagsLang = res['tagsLang'];
        this.tagsTools = res['tagsTools'];
      });
  }
}
