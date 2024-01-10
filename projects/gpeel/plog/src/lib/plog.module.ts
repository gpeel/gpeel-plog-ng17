import {CommonModule} from '@angular/common';
import {APP_INITIALIZER, InjectionToken, ModuleWithProviders, NgModule} from '@angular/core';
import {Plog, PlogConfig} from './plog';
import {PLOG_CONFIG_DEFAULT} from './PLOG_CONFIG_DEFAULT';

export const PLOG_CONFIG = new InjectionToken<any[]>('LOGGER_CONFIG');

interface Indexable {
  [key: string]: any;
}

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
      providers: [
        {
          provide: APP_INITIALIZER, // loop to force execution of rootPlogFactory
          useFactory: rootPlogFactory,
          multi: true,
          deps: [PLOG_CONFIG]
        },
        {
          provide: PLOG_CONFIG,
          useValue: plogConfig,
        },
      ]
    };

  }

}

let initialized = false;

export function rootPlogFactory(plogConfig: PlogConfig): (() => void) {
  return () => {
    if (!initialized) {

      if (!plogConfig) {
        console.log('****************************');
        console.log('YOU DID NOT initialize Plog explicitly =>  Fallback to using the default Plog config');
        console.log('If you want something else configure your plog-config.ts file');
        console.log('Example in node_module/@gpeel/plog/src/lib/PLOG_CONFIG_DEFAULT.ts');
        console.log('****************************');
        plogConfig = PLOG_CONFIG_DEFAULT;
      }

      initialize(plogConfig);
      initialized = true;
    }
  };
}

function initialize(plogConfig: PlogConfig): void {

  console.log('INIT');

  Object.keys(plogConfig).forEach(key => {
    const maybeArray = plogConfig[key];
    let prefix = key;
    let color: string;
    if (maybeArray instanceof Array) {
      prefix = maybeArray[1];
      color = maybeArray[0];
    } else {
      color = maybeArray;
    }
    // console.log('KEY', key, color);
    let prefixCapitalized = prefix.charAt(0).toUpperCase() + prefix.slice(1);
    // padEnd does not exists in IE11
    // <=> prefixCapitalized.padEnd(5, ' ')
    if (prefixCapitalized.length < 5) {
      while (prefixCapitalized.length < 5) {
        prefixCapitalized = prefixCapitalized + ' ';
      }
    }
    if (color === 'test' || color === 'no-css') {
      (Plog as Indexable)[key] = console.info.bind(console, prefixCapitalized);
    } else {
      (Plog as Indexable)[key] = console.info.bind(console, `%c${prefixCapitalized}`, `${color}`);
    }
  });
}
