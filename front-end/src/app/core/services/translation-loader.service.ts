// Angular modules
import { Injectable } from '@angular/core';

// Translate service
import { TranslateService } from '@ngx-translate/core';

export interface Locale {
  lang: string;
  data: Object;
}

@Injectable({
  providedIn: 'root'
})
export class TranslationLoaderService {

  /**
   * Service constructor
   * 
   * @param _translateService The translate service
   */
  constructor(
    private _translateService: TranslateService
  ) { }

  /**
   * Load translations
   * 
   * @param args The translations data
   * 
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  loadTranslations(...args: Locale[]): void
  {
    const locales = [...args];
    locales.forEach((locale) => {
      // use setTranslation() with the third argument set to true
      // to append translations instead of replacing them
      this._translateService.setTranslation(locale.lang, locale.data, true);
    });
  }
}
