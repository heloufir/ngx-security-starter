// Angular modules
import { Component, OnInit } from '@angular/core';

// JWT helper service
import { JwtHelperService } from '@services/security/jwt-helper.service';

// Translation imports
import { TranslationLoaderService } from '@app/core/services/translation-loader.service';
import { locale as en } from './i18n/en';
import { locale as fr } from './i18n/fr';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  
  /**
   * User's picture version
   */
  pictureVersion = Math.random();

  /**
   * Component constructor
   * 
   * @param jwtHelper The jwt helper service
   * @param _translationLoader The translation loader
   * 
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  constructor(
    public jwtHelper: JwtHelperService,
    private _translationLoader: TranslationLoaderService
  ) {
    // Load translation
    this._translationLoader.loadTranslations(en, fr);
  }

  /**
   * Component OnInit phase
   *
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  ngOnInit(): void { }

  /**
   * Check if logged user has an authority based on a String
   * 
   * @param role The authority's code
   *
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  hasRole(role: string): Boolean {
    return this.jwtHelper.hasRole(role);
  }

}
