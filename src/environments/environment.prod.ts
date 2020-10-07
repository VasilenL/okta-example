import {LogLevel} from 'angular-auth-oidc-client';

export const environment = {
  production: false,
  oidc: {
    stsServer: 'https://dreamix123.okta.com',
    redirectUrl: window.location.origin,
    clientId: 'bde65410-d966-0138-8ae8-0af85e5ef57b176949',
    scope: 'openid profile email',
    responseType: 'code',
    triggerAuthorizationResultEvent: true,
    postLogoutRedirectUri: `http://localhost:4201/unauthorized`,
    startCheckSession: false,
    silentRenew: true,
    silentRenewUrl: `http://localhost:4201/silent-renew.html`,
    postLoginRoute: '/home',
    forbiddenRoute: '/forbidden',
    unauthorizedRoute: '/unauthorized',
    historyCleanupOff: true
  }
};
export const environment = {
  production: false,
  oidc: {
    stsServer: 'https://openid-connect.onelogin.com/oidc',
    redirectUrl: 'http://localhost:4201',
    clientId: 'bde65410-d966-0138-8ae8-0af85e5ef57b176949',
    scope: 'openid profile email',
    responseType: 'code',
    triggerAuthorizationResultEvent: true,
    postLogoutRedirectUri: `http://localhost:4201/unauthorized`,
    startCheckSession: true,
    silentRenew: true,
    sessionChecksEnabled: true,
    silentRenewUrl: `http://localhost:4201/silent-renew.html`,
    postLoginRoute: '/home',
    forbiddenRoute: '/forbidden',
    unauthorizedRoute: '/unauthorized',
    logLevel: LogLevel.Debug,
    historyCleanupOff: true
  }
};
