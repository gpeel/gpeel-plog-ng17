import {EnvironmentProviders, makeEnvironmentProviders} from '@angular/core';
import {PlogConfig} from '@gpeel/plog';
import {plogProviders} from './plog.initialize';

export function providePlog(plogConfig: PlogConfig): EnvironmentProviders{

  const providers = plogProviders(plogConfig);

  return makeEnvironmentProviders(providers);

}

/**
 * Source for inspiration:
 * <angulat17>/packages/router/src/provide_router.ts
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
