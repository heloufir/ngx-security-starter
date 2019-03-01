// Angular components
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

// Application layout configuration service
import { ConfigService } from '@app/core/services/config.service';

// Application services
import { AuthenticationService } from '@services/security/authentication.service';

// Application constants
import { constants } from '@env/constants';

// Toastr services
import { error, success, warning } from '@app/core/utils/toastr';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.scss']
})
export class RecoverComponent implements OnInit, OnDestroy {

  /**
   * Password token
   */
  token: string;

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
   * @param _toastr The toastr service
   * @param _router The router object
   * @param _route The route object
   * @param titleService The title service
   * 
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  constructor(
    private config: ConfigService,
    private authenticationService: AuthenticationService,
    private _fb: FormBuilder,
    private _toastr: ToastrService,
    private _route: ActivatedRoute,
    private _router: Router,
    titleService: Title
  ) {
    // Update application layout settings
    this.config.setSettings({
      navbar: false,
      sidebar: false,
      footer: false
    });
    // Build the login form
    this.buildForm();
    this.token = this._route.snapshot.paramMap.get('token');
    if (!this.token) {
      this._router.navigate([constants.auth_url]);
    }
    // Set the page title
    titleService.setTitle(constants.app_name + ' - Forgot password?');
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
      password: [ '', Validators.required ],
      password_confirmation: [ '', Validators.required ]
    });
  }

  /**
   * Forgot password main function
   * 
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  recover(): void {
    this.loading = true;
    this.authenticationService.recoverPassword({
      password: this.form.get('password').value,
      password_confirmation: this.form.get('password_confirmation').value
    }, this.token)
      .subscribe(() => {
        this.buildForm();
        this.loading = false;
        this._router.navigate([constants.auth_url]);
        success('Success!', 'Your password is successfully recovered. Please login to your account using your new password.', this._toastr);
      }, (err: any) => {
        if (err.status === 403) {
          JSON.parse(err._body).errors.forEach((e: string) => {
            warning('Error!', e, this._toastr);
          });
        } else {
          error('Error!', 'An internal error has occured, please contact system administrator.', this._toastr);
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
