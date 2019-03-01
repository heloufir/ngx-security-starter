// Angular components
import { Component, OnInit } from '@angular/core';

// Bootstrap dropdown configuration
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from '@services/security/authentication.service';
import { JwtHelperService } from '@services/security/jwt-helper.service';

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
   * Component constructor
   * 
   * @param config The bootstrap dopdown configuration
   * @param authenticationService The authentication service
   * @param jwtHelper The jwt helper service
   *
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  constructor(
    config: NgbDropdownConfig,
    private authenticationService: AuthenticationService,
    public jwtHelper: JwtHelperService
  ) {
    config.placement = 'bottom-right';
  }

  /**
   * Component OnInit phase
   * 
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  ngOnInit(): void { }

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
   * Log out function
   */
  logout(): void {
    this.authenticationService.logout();
  }

}
