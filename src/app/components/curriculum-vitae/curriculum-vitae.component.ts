import { Component, Input, OnInit } from '@angular/core';
import { TimeDifference, TimeInterval } from 'src/model/date/time-interval';
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
    console.log(this.professional);
  }


  durationFormat(duration: TimeInterval): string{
    if(duration.yearsDifference() > 0) return `${duration.yearsDifference() } yrs ${duration.monthsDifference()} mos`;
    return `${duration.monthsDifference()} mos`;
  }
}
