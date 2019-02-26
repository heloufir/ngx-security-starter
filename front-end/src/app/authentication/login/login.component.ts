import { Component, OnInit, OnDestroy } from '@angular/core';
import { ConfigService } from 'src/app/core/services/config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor(
    private config: ConfigService
  ) {
    this.config.setSettings({
      navbar: false,
      sidebar: false,
      footer: false
    });
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.config.setSettings(this.config.defaultSettings());
  }

}
