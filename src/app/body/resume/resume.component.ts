import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})

export class ResumeComponent implements OnInit {
  isFifth: boolean;
  firstItems = ['../../assets/img/technologies/angular.png',
    '../../assets/img/technologies/html.png',
    '../../assets/img/technologies/css.png',
    '../../assets/img/technologies/bootstrap.png',
    '../../assets/img/technologies/jquery.png'
  ];
  firstRow = ['Angular', 'html', 'css3', 'Bootstrap',
    'Jquery'];

  secondItems = ['../../assets/img/technologies/java.png',
    '../../assets/img/technologies/spring-boot.png',
    '../../assets/img/technologies/mysql.png'];

  secondRow = ['Java', 'Spring Boot', 'mysql'];

  thirdItems = ['../../assets/img/technologies/vscode.png',
    '../../assets/img/technologies/ps.png',
    '../../assets/img/technologies/git.png'];
  thirdRow = ['vs code', 'photoshop', 'git'];

  constructor() { }

  ngOnInit() {
  }

}
