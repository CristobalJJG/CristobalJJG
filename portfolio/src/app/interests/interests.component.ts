import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslatePipe } from '../i18n/translate.pipe';

@Component({
    selector: 'app-interests',
    standalone: true,
    imports: [CommonModule, TranslatePipe, HttpClientModule],
    templateUrl: './interests.component.html',
    styleUrls: ['./interests.component.scss']
})
export class InterestsComponent implements OnInit {
    @Input() interests: any[] = [];

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        if (!this.interests || this.interests.length === 0) {
            this.http.get<any[]>('assets/data/interests.json').subscribe(data => this.interests = data);
        }
    }
}
