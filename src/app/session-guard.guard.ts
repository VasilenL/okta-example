import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {OidcSecurityService} from 'angular-auth-oidc-client';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SessionGuardGuard implements CanActivate {
  constructor(private oidcSecurityService: OidcSecurityService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    // return checkAuth() again should be possible
    return this.oidcSecurityService.checkAuthIncludingServer().pipe(
      map((isAuthorized: boolean) => {
        console.log('Session: ' + isAuthorized);

        if (isAuthorized) {
          this.router.navigate(['/autologin']);
          return false;
        }

        return true;
      })
    );
  }
}
