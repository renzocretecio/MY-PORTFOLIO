import { Component, OnInit, Inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as $ from 'jquery';
import { WINDOW } from '@ng-toolkit/universal';
import { ActivatedRoute } from '@angular/router';
import { slideInAnimation } from '../route-animation';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  animations: [slideInAnimation]
})
export class NavigationComponent implements OnInit {

  constructor(@Inject(WINDOW) private window: Window, private titleService: Title) { }
  ngOnInit() {
    this.hamburger()
    this.buttonItem()
  }

  navActive() {
    $('.menu-item a').click(function () {
      $('a.active').removeClass('active');
      $(this).addClass('active');
    })
  }

  goTop(newTitle: string) {
    // let scrollTop = window.setInterval(() => {
    //   let pos = window.pageYOffset;
    //   if (pos > 0) {
    //     window.scrollTo(0, pos - 20);;
    //   } else {
    //     window.clearInterval(scrollTop);
    //   }
    // }, 16);
    this.titleService.setTitle(newTitle);
    this.window.scroll(0, 0);
  }
  // ({ top: 0, behavior: 'smooth' })

  hamburger() {
    $('.hamburger').click(() => {
      if ($('.fixed-header ul').hasClass('nav-active')) {
        $('.fixed-header ul').removeClass('nav-active')
        $('.fixed-header ul').addClass('menu-primary')
      } else {
        $('.fixed-header ul').addClass('nav-active')
        $('.fixed-header ul').removeClass('menu-primary')
      }
      // $('.fixed-header ul').toggleClass('nav-active')
    })
  }

  buttonItem() {
    $('.fixed-header li').click(() => {
      if ($('.fixed-header ul').hasClass('nav-active')) {
        $('.fixed-header ul').removeClass('nav-active')
        $('.fixed-header ul').addClass('menu-primary')
      }
    })
  }
}
