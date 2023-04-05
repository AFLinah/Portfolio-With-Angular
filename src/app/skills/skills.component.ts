import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skill[]=[
    {
      name:'Javascript/HTML/CSS',
      level:'Expert',
      rating:80,
    },
    {
      name:'AngularJS',
      level:'Intermidiate',
      rating:60,
    },
    {
      name:'PostgreSQL',
      level:'Intermidiate',
      rating:70,
    },
    {
      name:'PHP',
      level:'Intermidiate',
      rating:70,
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
