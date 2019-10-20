import { Component, OnInit } from '@angular/core';
// declare const $: any;
import * as $ from 'jquery';
import { IfStmt } from '@angular/compiler';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeH1: string = "RENZO R. CRETECIO";
  displayTextH1: string = "";

  typeWriter(that) {
    let totalLengthH1 = that.homeH1.length;
    let currentLengthH1 = that.displayTextH1.length;

    if (currentLengthH1 < totalLengthH1) {
      that.displayTextH1 += that.homeH1[currentLengthH1];
    }
    setTimeout(that.typeWriter, 200, that);
  }

  fadeIn() {
    $(window).scroll(function () {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      var objectBottom = $("#about").offset().top + $("#about").outerHeight();
      if (windowBottom > 1000) {
        if ($("#about").css("opacity") == 0) { $("#about").fadeTo('slow', 1); }
      }
      // else {
      //   if ($("#about").css("opacity") == 1) { $("#about").fadeTo('slow', 0); }
      // }
    })
  }

  img = ["../../assets/img/Logo2.jpg",
    "../../assets/img/Mev2.jpg"];
  constructor() {


  }

  ngOnInit() {
    this.typeWriter(this);
    this.fadeIn();
  }

  flip() {
    $('#photo-logo').toggleClass('flipped');

  }


}
