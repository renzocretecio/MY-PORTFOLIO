import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  navActive() {
    $('.menu-item a').click(function () {
      $('a.active').removeClass('active');
      $(this).addClass('active');
    })
  }

  goTop() {
    // let scrollTop = window.setInterval(() => {
    //   let pos = window.pageYOffset;
    //   if (pos > 0) {
    //     window.scrollTo(0, pos - 20);;
    //   } else {
    //     window.clearInterval(scrollTop);
    //   }
    // }, 16);
    window.scroll(0, 0);
  }
  // ({ top: 0, behavior: 'smooth' })
}
