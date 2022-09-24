import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  experiences = [
    {
      employer: 'Test',
      from: new Date(),
      to: new Date(),
      description: '',
      
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
