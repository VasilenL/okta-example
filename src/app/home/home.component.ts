import { Component, OnInit } from '@angular/core';
import {OktaAuthService, UserClaims} from '@okta/okta-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: Promise<UserClaims>;

  constructor(private oktaAuthService: OktaAuthService) { }

  ngOnInit(): void {
    this.user = this.oktaAuthService.getUser();
  }

  logout() {
    this.oktaAuthService.logout('/');
  }

}
