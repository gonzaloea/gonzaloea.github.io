import { Component, Input, OnInit } from '@angular/core';
import { TimeInterval } from 'src/model/date/time-interval';
import { Professional } from 'src/model/professional';

@Component({
  selector: 'app-beta-layout',
  templateUrl: './beta-layout.component.html',
  styleUrls: ['./beta-layout.component.scss']
})
export class BetaLayoutComponent implements OnInit {

  @Input()
  professional!: Professional;
  
  today: Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

  durationFormat(duration: TimeInterval): string{
    if(duration.yearsDifference() > 0) {
      if(duration.monthsDifference() > 0 ) {
        return `${duration.yearsDifference() } yrs ${duration.monthsDifference()} mos`;
      }

      return `${duration.yearsDifference() } yrs`;
    }
    return `${duration.monthsDifference()} mos`;
  }

  allSkills() : Set<string> {
    return new Set(this.professional.jobs.flatMap( j => j.skills))
  }

}
