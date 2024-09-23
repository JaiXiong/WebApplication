import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: 
  [
    importProvidersFrom([BrowserAnimationsModule]), //interesitng this is where you import the BrowserAnimationsModule for the error... for matab?
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration()
  ]
};
