import { Component } from '@angular/core';

import { CardComponent } from '../card/card.component';
import { TranslatePipe } from '../i18n/translate.pipe';

interface Project {
    titleKey: string;
    descriptionKey: string;
    image: string;
    githubUrl: string;
    pageUrl: string;
}

@Component({
    selector: 'app-projects',
    imports: [CardComponent, TranslatePipe],
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
    readonly projects: Project[] = [
        {
            titleKey: 'projects.nanoUi.title',
            descriptionKey: 'projects.nanoUi.description',
            image: 'assets/images/nano-ui.png',
            githubUrl: 'https://github.com/CristobalJJG/NanoUI',
            pageUrl: 'https://nanoui.cristobaljjg.com'
        },
        {
            titleKey: 'projects.nanoChat.title',
            descriptionKey: 'projects.nanoChat.description',
            image: 'assets/images/nano-chat.png',
            githubUrl: 'https://github.com/CristobalJJG/NanoChat',
            pageUrl: 'https://chat.cristobaljjg.com'
        }
    ];
}
