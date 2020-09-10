import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OktaAuthGuard, OktaCallbackComponent, OktaLoginRedirectComponent} from '@okta/okta-angular';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent
  },
  {
    path: 'login-alt',
    component: OktaLoginRedirectComponent
  }, {
    path: 'home',
    component: HomeComponent,
    canActivate: [OktaAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
