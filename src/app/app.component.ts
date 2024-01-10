import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {Plog} from '@gpeel/plog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: '<h2>{{ title }} app is running!</h2>\n',
})
export class AppComponent {
  title = 'gpeel-plog-ng17';

  constructor() {
    Plog.info('My info!', 'info2', 'info3');
    Plog.warn('My Warn!');
    Plog.error('My Error!');
    Plog.perf('computing for 34 times');
    Plog.ngOnChanges('To test no css');
    Plog.ngOnInit('To test test');
  }
}
