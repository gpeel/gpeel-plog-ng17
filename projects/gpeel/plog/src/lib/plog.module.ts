import {CommonModule} from '@angular/common';
import {APP_INITIALIZER, InjectionToken, ModuleWithProviders, NgModule} from '@angular/core';
import {Plog, PlogConfig} from './plog';
import {initialize, plogProviders} from './plog.initialize';
import {PLOG_CONFIG_DEFAULT} from './PLOG_CONFIG_DEFAULT';

export const PLOG_CONFIG = new InjectionToken<any[]>('LOGGER_CONFIG');


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PlogModule {

  static forRoot(plogConfig: PlogConfig): ModuleWithProviders<PlogModule> {
    return {
      ngModule: PlogModule,
      providers: plogProviders(plogConfig)
    };

  }

}


