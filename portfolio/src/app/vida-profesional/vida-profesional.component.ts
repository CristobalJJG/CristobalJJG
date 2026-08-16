import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../i18n/translate.pipe';

interface JobExperience {
    id: string;
    company: string;
    timelineLogo: string;
    detailLogo: string;
    url: string;
    title: string;
    period: string;
    description: string;
    details: string[];
}

@Component({
    selector: 'app-vida-profesional',
    standalone: true,
    imports: [CommonModule, TranslatePipe],
    templateUrl: './vida-profesional.component.html',
    styleUrls: ['./vida-profesional.component.scss']
})
export class VidaProfesionalComponent {
    @Output() navigate = new EventEmitter<string>();
    
    cardTransitionState: 'idle' | 'closing' | 'opening' = 'idle';

    jobs: JobExperience[] = [
        {
            id: 'bitbox',
            company: 'vida.bitbox.company',
            timelineLogo: 'https://www.bitbox.es/favicon.ico',
            detailLogo: 'https://bitboxonline.com/logo.svg',
            url: 'https://bitboxonline.com',
            title: 'vida.bitbox.title',
            period: 'vida.bitbox.period',
            description: 'vida.bitbox.description',
            details: [
                'vida.bitbox.details.one',
                'vida.bitbox.details.two',
                'vida.bitbox.details.three',
                'vida.bitbox.details.four'
            ]
        },
        {
            id: 'liceo',
            company: 'vida.liceo.company',
            timelineLogo: 'https://www.lfigrancanaria.com/wp-content/uploads/logo_LFIGC_color_WEB_1-e1537559761658-300x140.png',
            detailLogo: 'https://www.lfigrancanaria.com/wp-content/uploads/logo_LFIGC.png',
            url: 'https://www.lfigrancanaria.com',
            title: 'vida.liceo.title',
            period: 'vida.liceo.period',
            description: 'vida.liceo.description',
            details: [
                'vida.liceo.details.one',
                'vida.liceo.details.two',
                'vida.liceo.details.three'
            ]
        },
        {
            id: 'bdkapital',
            company: 'vida.bdkapital.company',
            timelineLogo: 'https://bdkapital.es/assets/resources/logotipo-azul.svg',
            detailLogo: 'https://bdkapital.es/assets/resources/logo-white.svg',
            url: 'https://bdkapital.es',
            title: 'vida.bdkapital.title',
            period: 'vida.bdkapital.period',
            description: 'vida.bdkapital.description',
            details: [
                'vida.bdkapital.details.one',
                'vida.bdkapital.details.two',
                'vida.bdkapital.details.three'
            ]
        }
    ];

    selectedJob = this.jobs[0];

    selectJob(job: JobExperience) {
        if (this.selectedJob.id === job.id) {
            return;
        }

        this.cardTransitionState = 'closing';

        setTimeout(() => {
            this.selectedJob = job;
            this.cardTransitionState = 'opening';

            setTimeout(() => {
                this.cardTransitionState = 'idle';
            }, 320);
        }, 320);
    }
}

