import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TranslateService {
    private translations: Record<string, any> = {};
    private _current = new BehaviorSubject<string>('es');
    public currentLang$ = this._current.asObservable();

    constructor() {
        this.load(this._current.value);
    }

    get current() {
        return this._current.value;
    }

    async load(lang: string) {
        try {
            // try absolute and relative paths (some dev servers resolve differently)
            const paths = [`/assets/i18n/${lang}.json`, `assets/i18n/${lang}.json`];
            let res: Response | null = null;
            for (const p of paths) {
                try {
                    res = await fetch(p);
                    if (res && res.ok) {
                        this.translations = await res.json();
                        console.log('i18n loaded', p);
                        this._current.next(lang);
                        return;
                    }
                } catch (e) {
                    console.warn('i18n fetch failed for', p, e);
                }
            }
            // if we reach here none worked
            console.error('i18n: no translation file found for', lang, 'paths tried:', paths);
            this.translations = {};
            this._current.next(lang);
        } catch (e) {
            console.error('i18n load unexpected error', e);
            this.translations = {};
            this._current.next(lang);
        }
    }

    setLang(lang: string) {
        if (lang === this._current.value) return;
        this.load(lang);
    }

    translate(key: string): string {
        if (!key) return '';
        const parts = key.split('.');
        let cur: any = this.translations;
        for (const p of parts) {
            if (cur && p in cur) cur = cur[p];
            else return key;
        }
        return typeof cur === 'string' ? cur : key;
    }
}
