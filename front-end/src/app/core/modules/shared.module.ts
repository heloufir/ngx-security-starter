// Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Translate module
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [],
  imports: [
    // Angular modules
    CommonModule,
    // Translate module
    TranslateModule
  ],
  exports : [
    // Translate module
    TranslateModule
  ]
})
export class SharedModule { }
