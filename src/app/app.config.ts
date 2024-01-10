import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';
import {PlogModule} from '@gpeel/plog';

import { routes } from './app.routes';
import {plogConfig} from './plog-config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(PlogModule.forRoot(plogConfig))
  ]
};
