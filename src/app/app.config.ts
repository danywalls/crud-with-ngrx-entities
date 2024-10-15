import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';

import { provideStoreDevtools } from '@ngrx/store-devtools';
import { placesReducer } from './places.state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    provideStore({
      places: placesReducer,
    }),
    provideStoreDevtools({
      name: 'placeApp',
      maxAge: 30,
      trace: true,
      connectInZone: true,
    }),
  ],
};
