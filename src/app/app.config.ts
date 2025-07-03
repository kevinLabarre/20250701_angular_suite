import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideIcons } from '@ng-icons/core';
// import { heroTrash, heroUsers } from '@ng-icons/heroicons/outline';
import * as heroIcons from '@ng-icons/heroicons/outline';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),
    // provideIcons({ heroUsers, heroTrash }) // Pour importer les icons 1 par 1
    provideIcons({ ...heroIcons }) // Pour importer tous les icons
  ]
};
