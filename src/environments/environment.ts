// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,

  externalUrls: {
    authLogout: 'http://portal.mindseyesociety.org/logout',
    authLogin: 'http://api-stage.mindseyesociety.org/users/v1/auth/signin/ux-dev',
    userApi: 'https://ukqfspj0vc.execute-api.us-east-1.amazonaws.com/stage/users/v1',
    apiBallot: 'https://ukqfspj0vc.execute-api.us-east-1.amazonaws.com/stage/ballots/'
  }

};
