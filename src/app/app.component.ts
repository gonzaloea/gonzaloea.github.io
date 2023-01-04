import { Component, ViewContainerRef } from '@angular/core';
import { Professional } from 'src/model/professional';
import { ProfessionalBuilder } from 'src/model/professional-builder';
import { CurriculumVitaeService } from './services/curriculum-vitae.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private curriculumVitaeService: CurriculumVitaeService) {
    

  }

  async downloadCurriculumVitae() {
    //this.curriculumVitaeService.download();
  }
}
