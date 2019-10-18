import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goTop() {
    let scrollTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        window.clearInterval(scrollTop);
      }
    }, 16);
    // window.scroll(0, 0);
  }

}
