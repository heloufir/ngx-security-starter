// Angular components
import { Component, OnInit } from '@angular/core';

// Bootstrap dropdown configuration
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from '@services/security/authentication.service';
import { JwtHelperService } from '@services/security/jwt-helper.service';

// Translate service
import { TranslateService } from '@ngx-translate/core';

// Lodash 
import * as _ from 'lodash';

// Application constants
import { constants } from '@env/constants';

// Translation imports
import { TranslationLoaderService } from '@app/core/services/translation-loader.service';
import { locale as en } from './i18n/en';
import { locale as fr } from './i18n/fr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [ NgbDropdownConfig ]
})
export class NavbarComponent implements OnInit {

  /**
   * Sidebar opened indicator
   */
  public sidebarOpened = false;

  /**
   * Languages container
   */
  languages: any[];

  /**
   * Selected language
   */
  selectedLanguage: any;
  
  /**
   * User's picture version
   */
  pictureVersion = Math.random();

  /**
   * Component constructor
   * 
   * @param config The bootstrap dopdown configuration
   * @param authenticationService The authentication service
   * @param jwtHelper The jwt helper service
   * @param _translationLoader The translation loader
   *
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  constructor(
    config: NgbDropdownConfig,
    private authenticationService: AuthenticationService,
    public jwtHelper: JwtHelperService,
    private _translateService: TranslateService,
    private _translationLoader: TranslationLoaderService
  ) {
    // Update configuration object
    config.placement = 'bottom-right';
    // Load translation
    this._translationLoader.loadTranslations(en, fr);
    // Instantiate languages
    this.languages = [
      {
        id   : 'en',
        title: 'English',
        flag : 'en'
      },
      {
        id   : 'fr',
        title: 'Français',
        flag : 'fr'
      }
    ];
  }

  /**
   * Component OnInit phase
   * 
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  ngOnInit(): void {
    // Set the selected language from default languages
    this.selectedLanguage = _.find(this.languages, {'id': this._translateService.currentLang});
  }

  /**
   * Toggle sidebar function
   * 
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  toggleOffcanvas(): void {
    this.sidebarOpened = !this.sidebarOpened;
    if (this.sidebarOpened) {
      document.querySelector('.sidebar-offcanvas').classList.add('active');
    }
    else {
      document.querySelector('.sidebar-offcanvas').classList.remove('active');
    }
  }

  /**
   * Select a language
   * 
   * @param lang The language selected
   * 
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  setLanguage(lang): void
  {
    // Set the selected language for the toolbar
    this.selectedLanguage = lang;
    // Use the selected language for translations
    this._translateService.use(lang.id);
    // Set selected language into the localstorage
    localStorage.setItem(constants.ls_lang, lang.id);
  }

  /**
   * Log out function
   */
  logout(): void {
    this.authenticationService.logout();
  }

}
