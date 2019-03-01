// Angular modules
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

// Application services
import { ProfileService } from '@services/profile.service';
import { RoleService } from '@services/role.service';

// Application models
import { PartialList } from '@models/common/partial-list.model';
import { Profile } from 'selenium-webdriver/firefox';
import { Role } from '@models/role.model';

// Application constants
import { constants } from '@env/constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ],
})
export class DashboardComponent implements OnInit {

  /**
   * Profiles count statistics
   */
  profilesStatistics: number = null;

  /**
   * Roles count statistics
   */
  rolesStatistics: number = null;

  /**
   * Component constructor
   * 
   * @param profileService The profile service
   * @param roleService The role service
   * @param titleService The title service
   * 
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  constructor(
    private profileService: ProfileService,
    private roleService: RoleService,
    private titleService: Title
  ) {
    // Set the page title
    titleService.setTitle(constants.app_name + ' - Dashboard');
  }

  /**
   * Component OnInit phase
   *
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  ngOnInit(): void {
    // Load profiles count
    this.loadProfilesStatistics();
    // Load roles count
    this.loadRolesStatistics();
  }

  /**
   * Load profiles count statistics
   * 
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  private loadProfilesStatistics(): void {
    this.profilesStatistics = null;
    this.profileService.find({
      size: 0
    }).subscribe((res: PartialList<Profile>) => {
      this.profilesStatistics = res.count;
    });
  }

  /**
   * Load roles count statistics
   * 
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  private loadRolesStatistics(): void {
    this.rolesStatistics = null;
    this.roleService.find({
      size: 0
    }).subscribe((res: PartialList<Role>) => {
      this.rolesStatistics = res.count;
    });
  }

}
