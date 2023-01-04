import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { Professional } from 'src/model/professional';
import { CurriculumVitaeComponent } from '../components/curriculum-vitae/curriculum-vitae.component';

@Injectable({
  providedIn: 'root'
})
export class CurriculumVitaeService {

  constructor() { 


  }

  download(viewContainerRef: ViewContainerRef, professional: Professional) {
    
    
  }

  private newProfessionalCurriculumVitaeComponent(viewContainerRef: ViewContainerRef, professional: Professional) : ComponentRef<CurriculumVitaeComponent> {
    let component = viewContainerRef.createComponent<CurriculumVitaeComponent>(CurriculumVitaeComponent);
    component.instance.professional = professional;
    component.changeDetectorRef.detectChanges();
    return component;
  }
}
