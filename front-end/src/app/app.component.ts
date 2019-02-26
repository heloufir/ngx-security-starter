import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConfigService, ConfigObject } from './core/services/config.service';
import { Subscription } from 'rxjs/Subscription';
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  /**
   * On layout settings changed handler
   */
  onSettingsChanged: Subscription;

  /**
   * Current configuration object
   */
  settings: ConfigObject;

  /**
   * On route loading indicator
   */
  loading: boolean;

  constructor(
    public config: ConfigService,
    private router: Router
  ) {
    this.onSettingsChanged = this.config.onSettingsChanged
      .subscribe((newSettings: ConfigObject) => this.settings = newSettings);

    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }
        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.onSettingsChanged.unsubscribe();
  }

}
