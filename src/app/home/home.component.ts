import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
})
export class HomeComponent implements OnInit {
  userData$: Observable<any>;
  isAuthenticated$: Observable<boolean>;

  items: any;

  constructor(public oidcSecurityService: OidcSecurityService, private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.isAuthenticated$ = this.oidcSecurityService.isAuthenticated$;
    this.userData$ = this.oidcSecurityService.userData$;

    this.httpClient.get('http://localhost:8088/therapy-areas?products=true').subscribe((items) => this.items = items);
  }

  reloadItems() {
    this.httpClient.put('http://localhost:8088/congresses/5f02fdafc9d87d353d4cf3f4/edit', { }).subscribe((items) => this.items = items);
  }
}
