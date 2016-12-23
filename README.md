# ServicesUi

User interface for upcoming MES services

## Install

1. You must have nodejs and npm installed.
1. install angular-cli global with `npm install -g angular-cli@latest`
1. In repo directory run `npm install`

## Building

There are 3 different build scripts. All build to /dist (which should be your doc root).

* build.sh -- builds a dev build
* buildprod.sh -- builds a production build with AOT compilation
* watch.sh -- builds then watches for changes

You can also run `ng serve` as described below if you want node to run the server, or `ng build` directly.

## angular-cli info
This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.24.

### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
