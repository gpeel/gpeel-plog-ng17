import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {PlogConfig} from '@gpeel/plog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: '<h2>{{ title }} app is running!</h2>\n',
})
export class AppComponent {
  title = 'gpeel-plog-ng17';

  constructor() {
    PlogConfig.info('My info!', 'info2', 'info3');
    PlogConfig.warn('My Warn!');
    PlogConfig.error('My Error!');
    PlogConfig.perf('computing for 34 times');
    PlogConfig.ngOnChanges('To test no css');
    PlogConfig.ngOnInit('To test test');
  }
}
