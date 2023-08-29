import { Component, Input, OnInit } from '@angular/core';
import { TimeInterval } from 'src/model/date/time-interval';
import { Professional } from 'src/model/professional';

@Component({
  selector: 'app-alpha-layout',
  templateUrl: './alpha-layout.component.html',
  styleUrls: ['./alpha-layout.component.scss']
})
export class AlphaLayoutComponent {

  @Input()
  professional!: Professional;

  constructor() { }
  
  durationFormat(duration: TimeInterval): string{
    if(duration.yearsDifference() > 0) {
      if(duration.monthsDifference() > 0 ) {
        return `${duration.yearsDifference() } yrs ${duration.monthsDifference()} mos`;
      }

      return `${duration.yearsDifference() } yrs`;
    }
    return `${duration.monthsDifference()} mos`;
  }

}
