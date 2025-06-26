/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
  export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080' // porta del backend Spring Boot
};
