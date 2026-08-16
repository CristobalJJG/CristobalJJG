import { CommonModule } from '@angular/common';
import { AfterViewChecked, Component, ElementRef, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TranslatePipe } from '../i18n/translate.pipe';

interface Tool {
    name: string;
    icon: string;
}

@Component({
    selector: 'app-tools-carousel',
    standalone: true,
    imports: [CommonModule, TranslatePipe],
    templateUrl: './tools-carousel.component.html',
    styleUrls: ['./tools-carousel.component.scss']
})
export class ToolsCarouselComponent implements OnInit, AfterViewChecked, OnDestroy {

    @ViewChild('carousel', { static: false }) carousel?: ElementRef<HTMLDivElement>;
    tools: Tool[] = [];
    displayTools: Tool[] = [];
    private animationId = 0;
    private autoScrollStarted = false;
    private isPaused = false;
    private readonly scrollSpeed = 0.7;

    constructor(private ngZone: NgZone) { }

    async ngOnInit(): Promise<void> {
        try {
            const response = await fetch('/assets/data/tools.json');
            if (!response.ok) {
                throw new Error('No se pudo cargar tools.json');
            }
            this.tools = await response.json();
            this.displayTools = [...this.tools, ...this.tools];
        } catch (error) {
            console.error('Error cargando herramientas:', error);
        }
    }

    ngAfterViewChecked(): void {
        if (!this.autoScrollStarted && this.displayTools.length && this.carousel?.nativeElement) {
            this.autoScrollStarted = true;
            this.ngZone.runOutsideAngular(() => this.startAutoScroll());
        }
    }

    ngOnDestroy(): void {
        cancelAnimationFrame(this.animationId);
    }

    pauseAutoScroll(): void {
        this.isPaused = true;
    }

    resumeAutoScroll(): void {
        this.isPaused = false;
    }

    private startAutoScroll(): void {
        const container = this.carousel?.nativeElement;
        if (!container) {
            return;
        }

        const step = () => {
            if (!this.isPaused) {
                const halfWidth = container.scrollWidth / 2;
                if (halfWidth > container.clientWidth) {
                    container.scrollLeft += this.scrollSpeed;
                    if (container.scrollLeft >= halfWidth) {
                        container.scrollLeft -= halfWidth;
                    }
                }
            }
            this.animationId = requestAnimationFrame(step);
        };

        this.animationId = requestAnimationFrame(step);
    }
}
