import { Component, ViewContainerRef } from '@angular/core';
import { CurriculumVitaeComponent } from './components/curriculum-vitae/curriculum-vitae.component';
import domtoimage from 'dom-to-image';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private viewContainerRef: ViewContainerRef) {

  }

  downloadCurriculumVitae() {
    let c = this.viewContainerRef.createComponent<CurriculumVitaeComponent>(CurriculumVitaeComponent);
    let element = c.location.nativeElement;
    console.log();

    html2canvas(element, {
      windowWidth: 595,
      windowHeight: 842,
      scale: 5,
    }).then(canvas => {
        var pdf = new jsPDF('p', 'px',[595, 842]);

        var imgData  = canvas.toDataURL("image/jpeg", 1.0);
        pdf.addImage(imgData,0,0,595, 842);
        pdf.save('testcv.pdf');

    });


  }
}
