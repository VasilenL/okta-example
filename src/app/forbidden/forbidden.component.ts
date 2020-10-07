import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Component({
    selector: 'app-forbidden',
    templateUrl: 'forbidden.component.html',
})
export class ForbiddenComponent implements OnInit {
    public authenticated$: Observable<boolean>;

    constructor(private oidcSecurityService: OidcSecurityService, private httpClient: HttpClient) {}

    ngOnInit() {
        this.authenticated$ = this.oidcSecurityService.isAuthenticated$;

        this.httpClient.get(environment.BACKEND_URL + '/therapy-areas');
    }
}
