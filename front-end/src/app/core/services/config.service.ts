import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Platform } from '@angular/cdk/platform';

export interface ConfigObject {
  navbar: boolean;
  sidebar: boolean;
  footer: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  settings: ConfigObject;
  onSettingsChanged: BehaviorSubject<ConfigObject>;

  /**
   * Config service constructor
   * 
   * @param platform 
   *    The angular/cdk platform object
   * 
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  constructor(
    public platform: Platform
  ) {
    // Set the settings
    this.settings = this.defaultSettings();

    // Create the behavior subject
    this.onSettingsChanged = new BehaviorSubject(this.settings);
  }

  /**
   * Sets settings
   * 
   * @param settings 
   *    The configuration object
   * 
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  setSettings(settings: ConfigObject) {
    // Set the settings from the given object
    this.settings = Object.assign({}, this.settings, settings);

    // Trigger the event
    this.onSettingsChanged.next(this.settings);
  }

  /**
   * Get default settings
   * 
   * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
   */
  defaultSettings(): ConfigObject {
    return {
      navbar: true,
      sidebar: true,
      footer: true
    };
  }
}
