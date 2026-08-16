import { Pipe, PipeTransform, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslateService } from './translate.service';

@Pipe({ name: 'translate', pure: false, standalone: true })
export class TranslatePipe implements PipeTransform, OnDestroy {
    private lastKey: string | null = null;
    private lastValue: string | null = null;
    private sub: Subscription;

    constructor(private translate: TranslateService, private cdr: ChangeDetectorRef) {
        this.sub = this.translate.currentLang$.subscribe(() => {
            // invalidate cached value and request change detection when language changes
            this.lastValue = null;
            this.cdr.markForCheck();
        });
    }

    transform(key: string): string {
        if (!key) return '';
        if (this.lastKey === key && this.lastValue) return this.lastValue;
        const val = this.translate.translate(key);
        this.lastKey = key;
        this.lastValue = val;
        return val;
    }

    ngOnDestroy(): void {
        this.sub?.unsubscribe();
    }
}
