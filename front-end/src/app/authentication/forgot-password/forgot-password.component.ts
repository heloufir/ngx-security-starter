// Angular components
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

// Application layout configuration service
import { ConfigService } from '@app/core/services/config.service';

// Application services
import { AuthenticationService } from '@services/security/authentication.service';
import { Router } from '@angular/router';

// Application constants
import { constants } from '@env/constants';

// Toastr services
import { error, success, warning } from '@app/core/utils/toastr';
import { ToastrService } from 'ngx-toastr';

// Translation imports
import { TranslationLoaderService } from '@app/core/services/translation-loader.service';
import { locale as en } from './i18n/en';
import { locale as fr } from './i18n/fr';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit, OnDestroy {

  /**
   * Form
   */
  form: FormGroup;

  /**
   * An indicator for login in progress
   */
  loading: boolean;

  /**
   * Component constructor
   *
   * @param config The configuration service
   * @param authenticationService The authentication service
   * @param _fb The form builder object
   * @param _router The router object
   * @param _toastr The toastr service
   * @param titleService The title service
   * @param _translationLoader The translation loader
   * @param translateService The tarnslate service
   * 
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  constructor(
    private config: ConfigService,
    private authenticationService: AuthenticationService,
    private _fb: FormBuilder,
    private _router: Router,
    private _toastr: ToastrService,
    titleService: Title,
    private _translationLoader: TranslationLoaderService,
    private translateService: TranslateService
  ) {
    // Update application layout settings
    this.config.setSettings({
      navbar: false,
      sidebar: false,
      footer: false
    });
    // Build the login form
    this.buildForm();
    // Set the page title
    titleService.setTitle(constants.app_name + ' - Forgot password?');
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
   * Build the login form fields
   * 
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  private buildForm(): void {
    this.form = this._fb.group({
      username: [ '', [ Validators.required, Validators.email ] ]
    });
  }

  /**
   * Forgot password main function
   * 
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  forgot(): void {
    this.loading = true;
    this.authenticationService.forgotPassword(this.form.get('username').value)
      .subscribe(() => {
        this.buildForm();
        this.loading = false;
        success('Success!', 'An email was sent to you, containing the recover password steps.', this._toastr, this.translateService);
      }, (err: any) => {
        if (err.status === 422) {
          warning('Error!', 'The email address entered does not match with any account.', this._toastr, this.translateService);
        } else {
          error('Error!', 'An internal error has occurred, please contact system administrator.', this._toastr, this.translateService);
        }
        this.loading = false;
      });
  }

  /**
   * Component OnDestroy phase
   *
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  ngOnDestroy(): void {
    this.config.setSettings(this.config.defaultSettings());
  }

}
