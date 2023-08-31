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
        let auxF, auxL, auxT, auxS;
        [auxF, auxL, auxT, auxS] = [res['tagsFront'], res['tagsLang'], res['tagsTools'], res['tagsSO']];
        res['tagsBack'].forEach((e: Tag) => { auxF.push(e) });
        this.tagsFront = auxF;
        this.tagsSO = auxS;
        this.tagsLang = auxL;
        this.tagsTools = auxT;
      });
  }
}
