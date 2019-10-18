import { Component, OnInit } from '@angular/core';
// declare const $: any;
import * as $ from 'jquery';
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

  img = ["../../assets/img/Logo2.jpg",
    "../../assets/img/Mev2.jpg"];
  constructor() {


  }

  ngOnInit() {
    this.typeWriter(this);
  }

  flip() {
    $('#photo-logo').toggleClass('flipped');

  }


}
