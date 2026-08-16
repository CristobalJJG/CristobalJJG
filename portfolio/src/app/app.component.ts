import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'portafolio';
  darkMode = true;

  constructor(private router: Router) { }

  skills = [
    { icon: '⚡', nameKey: 'skill.angular', level: 95 },
    { icon: '🎨', nameKey: 'skill.odoo', level: 85 },
    { icon: '🔧', nameKey: 'skill.typescript', level: 90 },
    { icon: '🗄️', nameKey: 'skill.databases', level: 80 },
    { icon: '📱', nameKey: 'skill.responsive', level: 92 },
    { icon: '🚀', nameKey: 'skill.performance', level: 88 },
  ];



  projects = [
    {
      titleKey: 'projects.ecommerce.title',
      descriptionKey: 'projects.ecommerce.description',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#'
    },
    {
      titleKey: 'projects.chat.title',
      descriptionKey: 'projects.chat.description',
      technologies: ['Angular', 'Socket.io', 'Firebase', 'TypeScript'],
      link: '#'
    },
    {
      titleKey: 'projects.analytics.title',
      descriptionKey: 'projects.analytics.description',
      technologies: ['Angular', 'D3.js', 'PostgreSQL', 'Express'],
      link: '#'
    },
  ];

  ngOnInit() {
    document.documentElement.classList.add('dark');
  }

  scrollToSection(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    if (this.router.url !== '/') {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      });
    }
  }
}
