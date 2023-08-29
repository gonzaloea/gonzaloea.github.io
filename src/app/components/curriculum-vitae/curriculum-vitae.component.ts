import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { from, map, mergeMap, Observable } from 'rxjs';
import { ProfessionalService } from 'src/app/services/professional.service';
import { TimeInterval } from 'src/model/date/time-interval';
import { Professional } from 'src/model/professional';
import { ProfessionalBuilder } from 'src/model/professional-builder';

@Component({
  selector: 'app-curriculum-vitae',
  templateUrl: './curriculum-vitae.component.html',
  styleUrls: ['./curriculum-vitae.component.scss']
})
export class CurriculumVitaeComponent {

  professional: Professional;

  constructor(private professionalService: ProfessionalService) {
    this.professional = this.professionalService.professional;
  }

}
