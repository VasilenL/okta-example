import {HttpClientModule} from '@angular/common/http';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AuthModule, OidcConfigService} from 'angular-auth-oidc-client';
import {AppComponent} from './app.component';
import {routing} from './app.routes';
import {AutoLoginComponent} from './auto-login/auto-login.component';
import {ForbiddenComponent} from './forbidden/forbidden.component';
import {HomeComponent} from './home/home.component';
import {NavigationComponent} from './navigation/navigation.component';
import {UnauthorizedComponent} from './unauthorized/unauthorized.component';
import {environment} from '../environments/environment';
import {ProtectedComponent} from './protected/protected.component';

export function configureAuth(oidcConfigService: OidcConfigService) {
  return () =>
    oidcConfigService.withConfig(environment.oidc);
}

@NgModule({
  imports: [BrowserModule, routing, HttpClientModule, AuthModule.forRoot()],
  declarations: [AppComponent, ProtectedComponent, ForbiddenComponent, HomeComponent, AutoLoginComponent, NavigationComponent, UnauthorizedComponent],
  providers: [
    OidcConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: configureAuth,
      deps: [OidcConfigService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
