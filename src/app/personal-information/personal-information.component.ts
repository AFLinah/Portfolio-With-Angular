import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Andriamanonjamanana F. Linah'],
    ['Birthday', '27/03/1998'],
    ['Education', 'L3 in Database and Software engineering'],
    ['Interest', 'Flower'],
  ];

  aboutMe: string[] = [
    'Hi, I\'m a front end developer with a strong interest in Angular.',
    'I have a passion for creating intuitive and responsive user interfaces that enhance the user experience.',
    'My technical skills include HTML5, CSS3 and Javascript. I am constantly learning and exploring new technologies to stay up-to-date with the latest trends in web development.',
    'I am excited to embark on a career in web development and am open to any opportunities that come my way. Thank you for considering my profile.'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
