import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models'

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educationList: Education[]=[
    {
      university: 'CNTMAD',
      course: 'Informatique',
      duration: 'Apr 2022 - Feb 2023',
    },
    {
      university: 'CNTMAD',
      course: 'Gestion',
      duration: '2017-2018',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
