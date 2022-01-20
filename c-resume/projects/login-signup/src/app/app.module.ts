import { NgModule, ApplicationRef, DoBootstrap, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { environment } from '../environments/environment';
import { MicroFrontendModule } from 'ng-micro-frontend';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './infrastructure/api/auth.service';
import { SignUpComponent } from './ui/pages/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MicroFrontendModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [
    AuthService
  ],
})
export class AppModule implements DoBootstrap { 
  public constructor(
    private readonly injector: Injector
  ) { }

  public ngDoBootstrap(appRef: ApplicationRef): void {
    if (environment.production) {
      const customElement = createCustomElement(AppComponent, { injector: this.injector });
      customElements.define('login-signup', customElement);
    } else {
      appRef.bootstrap(AppComponent);
    }
  }

}
