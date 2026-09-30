import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  LOCALE_ID
} from '@angular/core';

import {
  provideRouter,
  withInMemoryScrolling
} from '@angular/router';

import { routes } from './app.routes';

import { provideClientHydration } from '@angular/platform-browser';


export const appConfig: ApplicationConfig = {

  providers: [

    provideBrowserGlobalErrorListeners(),

    provideRouter(
      routes,

      // =====================================================
      // ROLAGEM DAS PÁGINAS
      //
      // Sempre que mudar de rota, a nova página começa
      // automaticamente no topo.
      // =====================================================

      withInMemoryScrolling({
        scrollPositionRestoration: 'top'
      })
    ),

    provideClientHydration(),

    { provide: LOCALE_ID, useValue: 'pt-BR' }

  ]

};

