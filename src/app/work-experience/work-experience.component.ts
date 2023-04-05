import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  workExpList: WorkExperience[]=[
    {
      role: 'Freelance Data Entry',
      company: 'Remotasks',
      duration: '07/2020 - 02/2022',
      description: [
        'Preparing unstructured data for train AI models',
        'Using technologies such as CVAT and RT online Platform'
      ],
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
