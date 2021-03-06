// Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular bootstrap module
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Application components
import { AppComponent } from './app.component';
import { NavbarComponent } from './main/navbar/navbar.component';
import { SidebarComponent } from './main/sidebar/sidebar.component';
import { FooterComponent } from './main/footer/footer.component';

// Material modules
import { MatProgressBarModule } from '@angular/material/progress-bar';

// Http modules, providers, interceptor
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { InterceptorService } from '@services/security/guards/interceptor.service';

// Toastr module
import { ToastrModule } from 'ngx-toastr';

// Translate module
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    // Main navigation bar component
    NavbarComponent,
    // Main sidebar component
    SidebarComponent,
    // Main footer component
    FooterComponent,
    // Main application component
    AppComponent
  ],
  imports: [
    // Browser module
    BrowserModule,
    // Browser animations module
    BrowserAnimationsModule,
    // Application routing module (containing the forRoot() routes)
    AppRoutingModule,
    // Inject the bootstrap
    NgbModule.forRoot(),
    // Http and HttpClient modules
    HttpModule,
    HttpClientModule,
    // Material progress bar module
    MatProgressBarModule,
    // Toastr module
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right'
    }),
    // Translate module
    TranslateModule.forRoot()
  ],
  providers: [
    // The HttpClient requests interceptor
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [
    // Inject the main application component in bootstrap phase
    AppComponent
  ]
})
export class AppModule { }
