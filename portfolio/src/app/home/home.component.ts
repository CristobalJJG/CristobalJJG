import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero.component';
import { SkillsComponent } from '../skills/skills.component';
import { VidaProfesionalComponent } from '../vida-profesional/vida-profesional.component';
import { ContactComponent } from '../contact/contact.component';
import { ToolsCarouselComponent } from '../tools/tools-carousel.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, HeroComponent, SkillsComponent, VidaProfesionalComponent, ContactComponent, ToolsCarouselComponent],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    skills = [
        { icon: '⚡', nameKey: 'skill.angular', level: 95 },
        { icon: '🎨', nameKey: 'skill.odoo', level: 85 },
        { icon: '🔧', nameKey: 'skill.typescript', level: 90 },
        { icon: '🗄️', nameKey: 'skill.databases', level: 80 },
        { icon: '📱', nameKey: 'skill.responsive', level: 92 },
        { icon: '🚀', nameKey: 'skill.performance', level: 88 },
    ];
}
