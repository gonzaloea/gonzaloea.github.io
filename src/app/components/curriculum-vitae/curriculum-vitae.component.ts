import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { from, map, mergeMap, Observable } from 'rxjs';
import { TimeInterval } from 'src/model/date/time-interval';
import { Professional } from 'src/model/professional';
import { ProfessionalBuilder } from 'src/model/professional-builder';

@Component({
  selector: 'app-curriculum-vitae',
  templateUrl: './curriculum-vitae.component.html',
  styleUrls: ['./curriculum-vitae.component.scss']
})
export class CurriculumVitaeComponent implements OnInit {

  @Input()
  public professional: Professional;

  constructor() {
    this.professional = ProfessionalBuilder.newProfessionalToBuild().build();
  }

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

}
