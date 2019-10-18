import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  hrisImages = ['../../assets/img/sc/hris1.png',
    '../../assets/img/sc/hris2.png',
    '../../assets/img/sc/hris3.png',
    '../../assets/img/sc/hris4.png',
    '../../assets/img/sc/hris5.png',
    '../../assets/img/sc/hris6.png'
  ]
  hrisPortrait = ['../../assets/img/sc/hris7.png',
    '../../assets/img/sc/hris8.png']

  egovPayImages = ['../../assets/img/sc/egovpay1.png',
    '../../assets/img/sc/egovpay2.png',
    '../../assets/img/sc/egovpay3.png',
    '../../assets/img/sc/egovpay4.png',
    '../../assets/img/sc/egovpay5.png',
    '../../assets/img/sc/egovpay6.png']

  egovPayPortrait = ['../../assets/img/sc/egovpay7.png',
    '../../assets/img/sc/egovpay8.png',
    '../../assets/img/sc/egovpay9.png']

  hrisConfig = {
    "centerMode": true,
    "slidesToShow": 4,
    "prevArrow": '.hris-prev',
    "nextArrow": '.hris-next',
    "dots": true,
    "infinite": true,
    "variableWidth": true,
    "responsive": [
      {
        "breakpoint": 1024,
        "settings": {
          "slidesToShow": 3,
          "slidesToScroll": 3,
          "infinite": true,
          "dots": true
        }
      },
      {
        "breakpoint": 600,
        "settings": {
          "slidesToShow": 2,
          "slidesToScroll": 2,
          "infinite": true,
          "dots": true
        }
      },
      {
        "breakpoint": 480,
        "settings": {
          "slidesToShow": 1,
          "slidesToScroll": 1,
          "infinite": true,
          "dots": true
        }
      }
    ]
  };

  egovpayConfig = {
    "centerMode": true,
    "slidesToShow": 3,
    "prevArrow": '.egovpay-prev',
    "nextArrow": '.egovpay-next',
    "dots": true,
    "infinite": true,
    "variableWidth": true,
    "responsive": [
      {
        "breakpoint": 1024,
        "settings": {
          "slidesToShow": 3,
          "slidesToScroll": 3,
          "infinite": true,
          "dots": true
        }
      },
      {
        "breakpoint": 600,
        "settings": {
          "slidesToShow": 2,
          "slidesToScroll": 2,
          "infinite": true,
          "dots": true
        }
      },
      {
        "breakpoint": 480,
        "settings": {
          "slidesToShow": 1,
          "slidesToScroll": 1,
          "infinite": true,
          "dots": true
        }
      }
    ]
  };
  constructor() { }

  ngOnInit() {
  }

}
