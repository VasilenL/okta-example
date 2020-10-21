// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


import {LogLevel} from 'angular-auth-oidc-client';

export const environment = {
  production: false,
  BACKEND_URL: 'http://localhost:8088',
  oidc: {
    stsServer: 'https://dreamix2.onelogin.com/oidc/2',
    redirectUrl: 'http://localhost:4201',
    clientId: '2c3e5da0-f4e3-0138-abd4-02d209b95df3179040',
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
