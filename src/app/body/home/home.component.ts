import { Component, OnInit } from '@angular/core';
// declare const $: any;
import * as $ from 'jquery';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  img = ["../../assets/img/Logo2.jpg",
    "../../assets/img/Mev2.jpg"];
  constructor() { }

  ngOnInit() {
  }

  flip() {
    $('#photo-logo').toggleClass('flipped');

  }


}
