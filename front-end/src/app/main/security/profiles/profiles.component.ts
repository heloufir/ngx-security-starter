// Angular components
import { Component, OnInit } from '@angular/core';

// Application services
import { ProfileService } from '@services/profile.service';

// Application models
import { PartialList } from '@models/common/partial-list.model';
import { Profile } from '@models/profile.model';

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

  /**
   * Current loaded page
   */
  page = 1;

  /**
   * Default page size
   */
  size = 10;

  /**
   * Component constructor
   * 
   * @param profileService The profile service
   * 
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  constructor(
    private profileService: ProfileService
  ) { }

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
    this.page = page ? page : 1;
    this.loading = true;
    this.profileService.find({
      page: this.page,
      size: this.size
    }).subscribe((res: PartialList<Profile>) => {
      this.data = res;
      this.loading = false;
    });
  }

}
