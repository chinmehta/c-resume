import { NgModule, ApplicationRef, DoBootstrap, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { environment } from '../environments/environment';
import { MicroFrontendModule } from 'ng-micro-frontend';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MicroFrontendModule,
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyBEQuS7fzK009d06ugN77_EAJUjOu6cAg0",
      authDomain: "c-resume.firebaseapp.com",
      projectId: "c-resume",
      storageBucket: "c-resume.appspot.com",
      messagingSenderId: "795927745187",
      appId: "1:795927745187:web:ee4b5a3815409a001e2516",
      measurementId: "G-S5J4QFN8P5"
    }))
  ],
  providers: [],
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
