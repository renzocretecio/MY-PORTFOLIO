import { Component, OnInit, Inject } from '@angular/core';
import * as $ from 'jquery';
import { WINDOW } from '@ng-toolkit/universal';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(@Inject(WINDOW) private window: Window, ) { }

  ngOnInit() {
  }

  goTop() {
    this.window.scroll(0, 0);
  }

}
