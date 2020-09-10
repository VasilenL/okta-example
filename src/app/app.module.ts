import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {environment} from '../environments/environment';
import {Router} from '@angular/router';
import {OKTA_CONFIG, OktaAuthModule} from '@okta/okta-angular';

const oktaConfig = Object.assign({
  onAuthRequired: ({oktaAuth, injector}) => {
    const router = injector.get(Router);
    router.navigate(['/login-alt']);
  }
}, environment.oidc);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OktaAuthModule
  ],
  providers: [
    {provide: OKTA_CONFIG, useValue: oktaConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
