import {CommonModule} from '@angular/common';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {PlogConfig} from './plog.config';
import {plogProviders} from './plog.initialize';

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


