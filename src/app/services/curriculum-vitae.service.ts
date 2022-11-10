import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { A4Pdf } from 'src/model/a4-pdf';
import { Professional } from 'src/model/professional';
import { CurriculumVitaeComponent } from '../components/curriculum-vitae/curriculum-vitae.component';

@Injectable({
  providedIn: 'root'
})
export class CurriculumVitaeService {

  constructor() { }

  download(viewContainerRef: ViewContainerRef, professional: Professional) {
    let component = this.newProfessionalCurriculumVitaeComponent(viewContainerRef, professional);

    setTimeout(async () => {
      let pages = component.location.nativeElement.getElementsByClassName('page');

      let a4Pdf = new A4Pdf('CV - Gonzalo Alvarez.pdf');
      await a4Pdf.withPages([...pages]);
      a4Pdf.download();

      component.destroy();
    }, 200);
  }

  private newProfessionalCurriculumVitaeComponent(viewContainerRef: ViewContainerRef, professional: Professional) : ComponentRef<CurriculumVitaeComponent> {
    let component = viewContainerRef.createComponent<CurriculumVitaeComponent>(CurriculumVitaeComponent);
    component.instance.professional = professional;
    component.changeDetectorRef.detectChanges();
    return component;
  }
}
