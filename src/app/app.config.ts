import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';
import {PlogModule} from '@gpeel/plog';
import {providePlog} from '../../projects/gpeel/plog/src/lib/plog.standalone';

import { routes } from './app.routes';
import {plogConfig} from './plog-config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // importProvidersFrom(PlogModule.forRoot(plogConfig)) // works OK
    providePlog(plogConfig) // also works OK with the standalone strategy
  ]
};

/**
 * packages/router/src/provide_router.ts
 *
 * export function provideRouter(routes: Routes, ...features: RouterFeatures[]): EnvironmentProviders {
 *   return makeEnvironmentProviders([
 *     {provide: ROUTES, multi: true, useValue: routes},
 *     (typeof ngDevMode === 'undefined' || ngDevMode) ?
 *         {provide: ROUTER_IS_PROVIDED, useValue: true} :
 *         [],
 *     {provide: ActivatedRoute, useFactory: rootRoute, deps: [Router]},
 *     {provide: APP_BOOTSTRAP_LISTENER, multi: true, useFactory: getBootstrapListener},
 *     features.map(feature => feature.ɵproviders),
 *   ]);
 * }
 */
