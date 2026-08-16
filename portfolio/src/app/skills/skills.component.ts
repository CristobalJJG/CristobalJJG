import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslatePipe } from '../i18n/translate.pipe';

@Component({
    selector: 'app-skills',
    standalone: true,
    imports: [CommonModule, TranslatePipe, HttpClientModule],
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
    @Input() skills: any[] = [];

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        if (!this.skills || this.skills.length === 0) {
            this.http.get<any[]>('assets/data/skills.json').subscribe(data => this.skills = data);
        }
    }

}
