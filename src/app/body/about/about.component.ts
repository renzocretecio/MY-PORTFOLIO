import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  isTrue: boolean = false;
  constructor() { }

  ngOnInit() {
    this.fadeIn();
  }

  fadeIn() {
    $(window).scroll(() => {
      // let window = $(this).scrollTop() + $(this).innerHeight();
      // var objectBottom = $("#about").offset().top + $("#about").outerHeight();
      // if (window > 1000) {
      //   if ($("#about").css("opacity") == 0) { $("#about").fadeTo('slow', 1); }
      // }

      if ($(window).scrollTop() >= 600) {
        this.isTrue = true
        // alert('waw')
      }
      else if ($(window).scrollTop() === 0) {
        this.isTrue = false
      }

    })

  }

}
