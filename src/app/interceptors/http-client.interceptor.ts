import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {OidcSecurityService} from 'angular-auth-oidc-client';

@Injectable()
export class HttpClientInterceptor implements HttpInterceptor {

  constructor(private oidcSecurityService: OidcSecurityService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const accessToken = this.oidcSecurityService.getToken();
    this.oidcSecurityService.revokeRefreshToken();

    console.log('TOKEN --------------->>>>>>>>>>>>>>>: ' + this.oidcSecurityService.getIdToken());

    if (accessToken) {
      request = request.clone({headers: request.headers.set('Authorization', 'Bearer ' + accessToken)});
    }
    return next.handle(request);
  }
}
