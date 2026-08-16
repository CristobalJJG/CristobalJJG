import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CardComponent } from '../card/card.component';
import { TranslatePipe } from '../i18n/translate.pipe';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [CommonModule, CardComponent, TranslatePipe, HttpClientModule],
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
    @Input() projects: any[] = [];

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        if (!this.projects || this.projects.length === 0) {
            this.http.get<any[]>('assets/data/projects.json').subscribe(data => this.projects = data);
        }
    }
}
