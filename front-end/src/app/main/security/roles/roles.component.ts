// Angular components
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// Application services
import { RoleService } from '@services/role.service';

// Bootstrap modules
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// Application models
import { PartialList } from '@models/common/partial-list.model';
import { Role } from '@models/role.model';

// Toastr service and utilities
import { success, error, warning } from '@app/core/utils/toastr';
import { ToastrService } from 'ngx-toastr';

// Application constants
import { constants } from '@env/constants';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  /**
   * The roles partial list object
   */
  data: PartialList<Role>;

  /**
   * Loading data indicator
   */
  loading: boolean;
  savingRole: boolean;
  deletingRole: boolean;

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
   * Role object to save
   */
  selectedRole: Role;

  /**
   * Component constructor
   * 
   * @param roleService The role service
   * @param modalService The bootstrap modal service
   * @param _fb The form builder object
   * @param _toastr The toastr service
   * @param titleService The title service
   * 
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  constructor(
    private roleService: RoleService,
    private modalService: NgbModal,
    private _fb: FormBuilder,
    private _toastr: ToastrService,
    titleService: Title
  ) {
    // Set the page title
    titleService.setTitle(constants.app_name + ' - Security - Roles management');
  }

  /**
   * Component OnInit phase
   * 
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  ngOnInit(): void {
    // Load roles list
    this.loadData();
  }

  /**
   * Load roles data
   * 
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  loadData(page?: number): void {
    this.page = page ? page : 1;
    this.loading = true;
    this.roleService.find({
      page: this.page,
      size: this.size
    }).subscribe((res: PartialList<Role>) => {
      this.data = res;
      this.loading = false;
    });
  }

  /**
   * Open the role save modal
   * 
   * @param modal The role save modal object
   * 
   * @author EL OUFIR Hatim
   */
  initSave(modal: any, role?: Role): void {
    // Initialize the form group with the role passed in parameter
    this.initSaveForm(role);
    // Open the role save modal
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
  initSaveForm(role?: Role): void {
    // Initialize the selected role object
    if (role) {
      this.selectedRole = Object.assign(Role, role);
    } else {
      this.selectedRole = new Role();
    }
    // Initialize the form group object
    this.form = this._fb.group({
      code: [
        role ? role.code : '',
        [Validators.required, Validators.maxLength(255)]
      ],
      designation: [
        role ? role.designation : '',
        [Validators.required, Validators.maxLength(255)]
      ]
    });
  }

  /**
   * Save the selected role
   * 
   * @param modal The role save modal object
   * 
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  save(modal: any): void {
    // Check if the form is valid
    if (this.form.valid) {
      this.savingRole = true;
      // Send save / update request to the service
      this.roleService.save({
        id: this.selectedRole.id,
        code: this.form.get('code').value,
        designation: this.form.get('designation').value
      }, this.selectedRole.id ? true : false).subscribe((res: Role) => {
        // Show success alert
        success('Success!', 'The role is successfully saved.', this._toastr);
        this.savingRole = false;
        // Close role save modal
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
          error('Error!', 'An error has occured when saving the role, please contact system administrator.', this._toastr);
        }
        this.savingRole = false;
      });
    }
  }

  /**
   * Open the role delete confirmation modal
   * 
   * @param modal The role delete confirmation modal object
   * @param role The role to delete
   * 
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  initDelete(modal: any, role: Role): void {
    this.selectedRole = role;
    // Open the delete confirmation modal
    this.modalService
      .open(modal)
      .result
      .then((result) => {
        if (result) {
          this.loadData();
        }
        this.selectedRole = new Role();
      }, () => {
        // If the modal is dismissed
        this.selectedRole = new Role();
      });
  }

  /**
   * Delete a role
   * 
   * @param modal The role delete confirmation modal
   * 
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  delete(modal: any): void {
    this.deletingRole = true;
    this.roleService.delete({
      id: this.selectedRole.id
    }).subscribe(() => {
      this.close(modal, true);
      this.deletingRole = false;
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
