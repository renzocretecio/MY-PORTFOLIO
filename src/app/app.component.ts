import { Component, Inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { WINDOW } from '@ng-toolkit/universal';
import { RouterOutlet } from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(@Inject(WINDOW) private window: Window) { }

  top(event) {
    this.window.scroll(0, 0);
  }
}
