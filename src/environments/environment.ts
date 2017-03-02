// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,

  externalUrls: {
    authLogin: 'https://api-stage.mindseyesociety.org/users/v1/auth/signin/ux-dev',
    authLogout: 'https://portal.mindseyesociety.org/logout',
    apiBase: 'https://api-stage.mindseyesociety.org',
    apiBallot: 'https://ukqfspj0vc.execute-api.us-east-1.amazonaws.com/stage/ballots/'
  }

};
