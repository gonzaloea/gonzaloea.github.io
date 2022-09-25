import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = [
    {
      name: 'Ophrys',
      logo: '../../assets/logos/ophrys.svg',
      description: 'Cryptocurrency trading automation. Designed mainly to be adapted to any market. The main motivation was to explore Golang.',
      technologies: ['Golang'],
      url: 'https://github.com/gonzaloea/ophrys'
    },
    {
      name: 'Ophrys GUI',
      logo: '../../assets/logos/ophrys.svg',
      description: 'Ophrys graphical user interface. The main motivation was to explore new versions of Vue.js.',
      technologies: ['Vue.js'],
      url: 'https://github.com/gonzaloea/ophrys-gui'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
