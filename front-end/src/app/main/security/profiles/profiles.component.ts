// Angular components
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

// Application services
import { ProfileService } from '@services/profile.service';
import { RoleService } from '@services/role.service';

// Application models
import { PartialList } from '@models/common/partial-list.model';
import { Profile } from '@models/profile.model';
import { Role } from '@models/role.model';

// Bootstrap modules
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// Toastr service and utilities
import { success, error, warning } from '@app/core/utils/toastr';
import { ToastrService } from 'ngx-toastr';

// Application constants
import { constants } from '@env/constants';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {

  /**
   * The profiles partial list object
   */
  data: PartialList<Profile>;

  /**
   * Loading data indicator
   */
  loading: boolean;
  loadingRoles: boolean;
  savingProfile: boolean;
  deletingProfile: boolean;

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
   * Roles list
   */
  roles: Array<Role>;

  /**
   * Profile object to save
   */
  selectedProfile: Profile;

  /**
   * Component constructor
   * 
   * @param profileService The profile service
   * @param roleService The role service
   * @param modalService The bootstrap modal service
   * @param _fb The form builder object
   * @param _toastr The toastr service
   * @param titleService The title service
   * 
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  constructor(
    private profileService: ProfileService,
    private roleService: RoleService,
    private modalService: NgbModal,
    private _fb: FormBuilder,
    private _toastr: ToastrService,
    titleService: Title
  ) {
    // Set the page title
    titleService.setTitle(constants.app_name + ' - Security - Profiles management');
  }

  /**
   * Component OnInit phase
   * 
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  ngOnInit(): void {
    // Load profiles list
    this.loadData();
  }

  /**
   * Load profiles data
   * 
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  loadData(page?: number): void {
    this.page = page ? page : this.page;
    this.loading = true;
    this.profileService.find({
      page: this.page,
      size: this.size
    }).subscribe((res: PartialList<Profile>) => {
      this.data = res;
      this.loading = false;
    });
  }

  /**
   * Open the profile save modal
   * 
   * @param modal The profile save modal object
   * 
   * @author EL OUFIR Hatim
   */
  initSave(modal: any, profile?: Profile): void {
    // Initialize the form group with the profile passed in parameter
    this.initSaveForm(profile);
    // Get the roles list
    this.loadingRoles = true;
    this.roleService.find()
      .subscribe((res: PartialList<Role>) => {
        this.roles = res.data;
        this.loadingRoles = false;
      });
    // Open the profile save modal
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
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  initSaveForm(profile?: Profile): void {
    // Initialize the selected profile object
    if (profile) {
      this.selectedProfile = Object.assign(Profile, profile);
    } else {
      this.selectedProfile = new Profile();
    }
    // Initialize the form group object
    this.form = this._fb.group({
      code: [
        profile ? profile.code : '',
        [Validators.required, Validators.maxLength(255)]
      ],
      designation: [
        profile ? profile.designation : '',
        [Validators.required, Validators.maxLength(255)]
      ]
    });
  }

  /**
   * Check if the selected profile contains the role passed in parameter
   * 
   * @param role The role object to check
   * 
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  selectedProfileHasRole(role: Role): boolean {
    return this.selectedProfile.roles.some((r: Role) => r.id === role.id);
  }

  /**
   * Select a role
   * 
   * @param role The role selected
   * 
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  selectRole(role: Role): void {
    if (this.selectedProfileHasRole(role)) {
      this.selectedProfile.roles.splice(this.selectedProfile.roles.findIndex((r: Role) => r.id === role.id), 1);
    } else {
      this.selectedProfile.roles.push(role);
    }
  }

  /**
   * Save the selected profile
   * 
   * @param modal The profile save modal object
   * 
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  save(modal: any): void {
    // Check if the form is valid
    if (this.form.valid) {
      this.savingProfile = true;
      // Send save / update request to the service
      this.profileService.save({
        id: this.selectedProfile.id,
        code: this.form.get('code').value,
        designation: this.form.get('designation').value,
        roles: this.selectedProfile.roles.map((r: Role) => r.id)
      }, this.selectedProfile.id ? true : false).subscribe((res: Profile) => {
        // Show success alert
        success('Success!', 'The profile object is successfully saved.', this._toastr);
        this.savingProfile = false;
        // Close profile save modal
        this.close(modal, true);
      }, (err: any) => {
        // Check if the error status is 403 (Form errors)
        if (err.status === 403) {
          // Show an error for each form validations errors list
          err.error.forEach((e: string) => {
            warning('Warning!', e, this._toastr);
          });
        } else {
          // Else, show an internal server error alert
          error('Error!', 'An error has occured when saving the profile, please contact system administrator.', this._toastr);
        }
        this.savingProfile = false;
      });
    }
  }

  /**
   * Open the profile delete confirmation modal
   * 
   * @param modal The profile delete confirmation modal object
   * @param profile The profile to delete
   * 
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  initDelete(modal: any, profile: Profile): void {
    this.selectedProfile = profile;
    // Open the delete confirmation modal
    this.modalService
      .open(modal)
      .result
      .then((result) => {
        if (result) {
          this.loadData();
        }
        this.selectedProfile = new Profile();
      }, () => {
        // If the modal is dismissed
        this.selectedProfile = new Profile();
      });
  }

  /**
   * Delete a profile
   * 
   * @param modal The profile delete confirmation modal
   * 
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  delete(modal: any): void {
    this.deletingProfile = true;
    this.profileService.delete({
      id: this.selectedProfile.id
    }).subscribe(() => {
      this.close(modal, true);
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
