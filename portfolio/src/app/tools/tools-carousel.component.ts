import { Component, ElementRef, inject, NgZone, OnDestroy, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import { TranslatePipe } from '../i18n/translate.pipe';

interface Tool {
    name: string;
    icon: string;
}

@Component({
    selector: 'app-tools-carousel',
    imports: [TranslatePipe],
    templateUrl: './tools-carousel.component.html',
    styleUrl: './tools-carousel.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolsCarouselComponent implements OnInit, OnDestroy {
    @ViewChild('carousel') carousel?: ElementRef<HTMLDivElement>;

    tools: Tool[] = [];
    displayTools: Tool[] = [];
    private animationId = 0;
    private isPaused = false;
    private readonly scrollSpeed = 1;
    private ngZone = inject(NgZone);

    constructor() { }

    async ngOnInit(): Promise<void> {
        try {
            const response = await fetch('/assets/data/tools.json');
            if (!response.ok) throw new Error('No se pudo cargar tools.json');
            this.tools = await response.json();

            if (this.tools.length > 0) {
                this.displayTools = [...this.tools, ...this.tools];
                this.ngZone.runOutsideAngular(() => this.startAutoScroll());
            }
        } catch (error) {
            console.error('Error cargando herramientas:', error);
        }
    }

    ngOnDestroy(): void {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }

    pauseAutoScroll(): void {
        this.isPaused = true;
    }

    resumeAutoScroll(): void {
        this.isPaused = false;
        this.startAutoScroll();
    }

    private startAutoScroll(): void {
        const container = this.carousel?.nativeElement;
        if (!container) return;

        const step = () => {
            if (!this.isPaused && this.displayTools.length > 0) {
                container.scrollLeft += this.scrollSpeed;
                const halfWidth = container.scrollWidth / 2;
                if (container.scrollLeft >= halfWidth) {
                    container.scrollLeft = 0;
                }
                this.animationId = requestAnimationFrame(step);
            } else {
                this.animationId = requestAnimationFrame(step);
            }
        };

        this.animationId = requestAnimationFrame(step);
    }
}