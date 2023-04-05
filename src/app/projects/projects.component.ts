import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: Project[]=[
    {
      title: 'Daily specials',
      technologies: 'HTML | CSS | JS',
      description: [
        'Design of a user interface for a web application that allows users to discover daily specials',
        'The interface design is modern and user-friendly, with intuitive navigation elements and a clear presentation of dish information.',
        'The goal is to create a pleasant user experience and highlight daily specials.'
      ],
    },
    {
      title: 'Calculator machine',
      technologies: 'HTML | CSS | JS',
      description: [
        'A web application to do the basics of numerical calculations',
        'The interface design is modern and clean, with clear and easy to use calculation buttons.',
        'The goal is to create a pleasant and efficient user experience for users who want to perform calculations quickly and easily.'
      ],
    },
    {
      title: 'Bookshalves',
      technologies: 'AngularJS',
      description: [
        'Enables users to manage their book collection by adding books to their personal library and organizing them by categories or based on their reading status',
        ' The goal is to provide a pleasant and intuitive user experience for book lovers, while offering efficient and easy-to-use library management features.'
      ],
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
