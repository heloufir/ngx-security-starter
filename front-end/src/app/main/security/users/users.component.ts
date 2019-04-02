// Angular components
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

// Application services
import { UserService } from '@services/user.service';
import { ProfileService } from '@services/profile.service';

// Application models
import { PartialList } from '@models/common/partial-list.model';
import { User } from '@models/user.model';
import { Profile } from '@models/profile.model';

// Bootstrap modules
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// Toastr service and utilities
import { success, error, warning } from '@app/core/utils/toastr';
import { ToastrService } from 'ngx-toastr';

// Application constants
import { constants } from '@env/constants';
import { environment } from '@env/environment';

// Translation imports
import { TranslationLoaderService } from '@app/core/services/translation-loader.service';
import { locale as en } from './i18n/en';
import { locale as fr } from './i18n/fr';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  /**
   * The users partial list object
   */
  data: PartialList<User>;

  /**
   * Loading data indicator
   */
  loading: boolean;
  loadingProfiles: boolean;
  savingUser: boolean;
  deletingUser: boolean;

  /**
   * Current loaded page
   */
  page = 1;

  /**
   * Default page size
   */
  size = 10;

  /**
   * The form group
   */
  form: FormGroup;

  /**
   * Profiles list
   */
  profiles: Array<Profile>;

  /**
   * User object to save
   */
  selectedUser: User;

  /**
   * The selected picture preview
   */
  picturePreview: any;

  /**
   * Component constructor
   * 
   * @param userService The user service
   * @param profileService The profile service
   * @param modalService The bootstrap modal service
   * @param _fb The form builder object
   * @param _toastr The toastr service
   * @param titleService The title service
   * @param _translationLoader The translation loader
   * @param translateService The translate service
   * 
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  constructor(
    private userService: UserService,
    private profileService: ProfileService,
    private modalService: NgbModal,
    private _fb: FormBuilder,
    private _toastr: ToastrService,
    titleService: Title,
    private _translationLoader: TranslationLoaderService,
    private translateService: TranslateService
  ) {
    // Set the page title
    titleService.setTitle(constants.app_name + ' - Security - Users management');
    // Load translation
    this._translationLoader.loadTranslations(en, fr);
  }

  /**
   * Component OnInit phase
   * 
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  ngOnInit(): void {
    // Load users list
    this.loadData();
  }

  /**
   * Load users data
   * 
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  loadData(page?: number): void {
    this.page = page ? page : this.page;
    this.loading = true;
    this.userService.find({
      page: this.page,
      size: this.size
    }).subscribe((res: PartialList<User>) => {
      this.data = res;
      this.loading = false;
    });
  }

  /**
   * Open the user save modal
   * 
   * @param modal The user save modal object
   * 
   * @author EL OUFIR Hatim
   */
  initSave(modal: any, user?: User): void {
    // Initialize the form group with the user passed in parameter
    this.initSaveForm(user);
    // Get the profiles list
    this.loadingProfiles = true;
    this.profileService.find()
      .subscribe((res: PartialList<Profile>) => {
        this.profiles = res.data;
        this.loadingProfiles = false;
      });
    // Open the user save modal
    this.modalService
      .open(modal)
      .result
      .then((result) => {
        if (result) {
          this.loadData();
        } else {
          this.initSaveForm();
        }
      }, () => {
        // If the modal is dismissed
        this.initSaveForm();
      });
  }

  /**
   * Initialize the save form group
   * 
   * @param user The user object
   * 
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  initSaveForm(user?: User): void {
    // Initialize the selected user object
    if (user) {
      this.selectedUser = Object.assign({}, user);
    } else {
      this.selectedUser = new User();
    }
    if (!this.selectedUser.picture) {
      this.picturePreview = 'assets/images/faces/avatar.png';
    } else {
      this.picturePreview = environment.web_url + 'users/picture/' + this.selectedUser.id + '?v=' + Math.random();
    }
    // Initialize the form group object
    this.form = this._fb.group({
      email: [
        user ? user.email : '',
        [Validators.required, Validators.maxLength(255)]
      ],
      name: [
        user ? user.name : '',
        [Validators.required, Validators.maxLength(255)]
      ],
      password: [
        '',
        user && user.id ? [] : [Validators.required]
      ],
      password_confirmation: [
        '',
        user && user.id ? [] : [Validators.required]
      ]
    });
  }

  /**
   * Check if the selected user contains the profile passed in parameter
   * 
   * @param profile The profile object to check
   * 
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  selectedUserHasProfile(profile: Profile): boolean {
    return this.selectedUser.profiles.some((r: Profile) => r.id === profile.id);
  }

  /**
   * Select a profile
   * 
   * @param profile The profile selected
   * 
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  selectProfile(profile: Profile): void {
    if (this.selectedUserHasProfile(profile)) {
      this.selectedUser.profiles.splice(this.selectedUser.profiles.findIndex((r: Profile) => r.id === profile.id), 1);
    } else {
      this.selectedUser.profiles.push(profile);
    }
  }

  /**
   * Save the selected user
   * 
   * @param modal The user save modal object
   * 
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  save(modal: any): void {
    // Check if the form is valid
    if (this.form.valid) {
      this.savingUser = true;
      // Construct form data
      const formData = new FormData();
      if (this.selectedUser.picture instanceof File) {
        formData.append('picture', this.selectedUser.picture);
      }
      formData.append('id', this.selectedUser.id + '');
      formData.append('name', this.form.get('name').value);
      formData.append('email', this.form.get('email').value);
      formData.append('password', this.form.get('password').value);
      formData.append('password_confirmation', this.form.get('password_confirmation').value);
      formData.append('profiles', this.selectedUser.profiles.map((p: Profile) => p.id) + '');
      // Send save / update request to the service
      this.userService.save(formData, this.selectedUser.id ? true : false).subscribe((res: User) => {
        // Show success alert
        success('USERS.TOASTS.TITLE.SUCCESS', 'USERS.TOASTS.DESCRIPTION.SAVED', this._toastr, this.translateService);
        this.savingUser = false;
        // Close user save modal
        this.close(modal, true);
      }, (err: any) => {
        // Check if the error status is 403 (Form errors)
        if (err.status === 403) {
          // Show an error for each form validations errors list
          err.error.forEach((e: string) => {
            warning('USERS.TOASTS.TITLE.WARNING', e, this._toastr, this.translateService);
          });
        } else {
          // Else, show an internal server error alert
          error('USERS.TOASTS.TITLE.ERROR', 'USERS.TOASTS.DESCRIPTION.ERROR', this._toastr, this.translateService);
        }
        this.savingUser = false;
      });
    }
  }

  /**
   * On select user's image changed event
   * 
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  onImageChanged(file): void {
    this.selectedUser.picture = file;
    if (this.selectedUser && this.selectedUser.picture && this.selectedUser.picture instanceof File) {
      this.previewImage(this.selectedUser.picture);
    } else {
      this.picturePreview = 'assets/images/faces/avatar.png';
    }
  }

  /**
   * Build an image preview from the selected file
   * 
   * @param file The file selected by the user
   * 
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  private previewImage(file: File): void {
    if (file.type.match(/image\/*/) == null) {
      this.picturePreview = 'assets/images/faces/avatar.png';
    } else {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.picturePreview = reader.result;
      };
    }
  }

  /**
   * Open the user delete confirmation modal
   * 
   * @param modal The user delete confirmation modal object
   * @param user The user to delete
   * 
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  initDelete(modal: any, user: User): void {
    this.selectedUser = user;
    // Open the delete confirmation modal
    this.modalService
      .open(modal)
      .result
      .then((result) => {
        if (result) {
          this.loadData();
        }
        this.selectedUser = new User();
      }, () => {
        // If the modal is dismissed
        this.selectedUser = new User();
      });
  }

  /**
   * Delete a user
   * 
   * @param modal The user delete confirmation modal
   * 
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  delete(modal: any): void {
    this.deletingUser = true;
    this.userService.delete({
      id: this.selectedUser.id
    }).subscribe(() => {
      this.close(modal, true);
      this.deletingUser = false;
    });
  }

  /**
   * Close a given modal modal
   * 
   * @param modal The given modal object
   * @param flag A flag to send in the close event
   * 
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  close(modal: any, flag?: boolean): void {
    modal.close(flag ? true : false);
  }

}
