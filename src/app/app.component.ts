import { Component, ComponentRef, ViewContainerRef } from '@angular/core';
import { CurriculumVitaeComponent } from './components/curriculum-vitae/curriculum-vitae.component';
import domtoimage from 'dom-to-image';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Professional } from 'src/model/professional';
import { ProfessionalBuilder } from 'src/model/professional-builder';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  me: Professional;

  // {
  //   name: 'Ophrys',
  //   logo: '../../assets/logos/ophrys.svg',
  //   description: 'Cryptocurrency trading automation. Designed mainly to be adapted to any market. The main motivation was to explore Golang.',
  //   technologies: ['Golang'],
  //   url: 'https://github.com/gonzaloea/ophrys'
  // },
  // {
  //   name: 'Ophrys GUI',
  //   logo: '../../assets/logos/ophrys.svg',
  //   description: 'Ophrys graphical user interface. The main motivation was to explore new versions of Vue.js.',
  //   technologies: ['Vue.js'],
  //   url: 'https://github.com/gonzaloea/ophrys-gui'
  // }

  constructor(private viewContainerRef: ViewContainerRef) {
    this.me = ProfessionalBuilder
      .newProfessionalToBuild()
      .withCompleteName("Gonzalo", "Alvarez")
      .titledAs("Software Engineer")
      .describedAs("I like challenges of all kinds related to software development. My experience is mainly on web development, both backend and frontend, although in the latest years I've worked mainly in the backend.")
      .thatCanBeContactedViaEmail("gonzalo.e.alvarez@hotmail.com")
      .thatIsWorkingIn('Uala\u0301', 'Backend Developer', 'Currently working in the development of a totally new platform for the loans product of the company.', new Date(2022,6,2))
      .thatWorkedIn('Vantek', 'Technical Lead', 'I was responsible for the coaching of the developers that were in the learning proccess in the company. A big number of the developers were just starting in the IT environment so I had to work as a coach and teach them about software development.', new Date(2021,6,1), new Date(2022,6,1))
      .thatWorkedIn('Vantek', 'FullStack Engineer', 'I was responsible for the development and maintenance of different products of the company.', new Date(2019,7,1), new Date(2021,6,1))
      .thatWorkedIn('Keepcon', 'FullStack Developer', 'I was responsible for the development and maintenance of different products of the company.', new Date(2017,11,1), new Date(2019,7,1))
      .thatWorkedIn('Codementor', 'Software Developer', 'I was responsible for the development and maintenance of different products of the company.', new Date(2018,6,1), new Date(2018,10,1))
      .thatWorkedIn('Lumina Americas', 'Software Developer', 'I was responsible for the development and maintenance of different products of the company.', new Date(2014,2,1), new Date(2017,11,1))
      .thatCreatedAProject('Ophrys', 'Golang')
      .thatCreatedAProject('Ophrys GUI', 'Vue.js')
      .thatIsAttendingToUniversity('Universidad de Buenos Aires', 'Software Engineering', new Date(2015, 3, 17))
    .build();
  }

  downloadCurriculumVitae() {
    let component = this.newProfessionalCurriculumVitaeComponent();
    let element = component.location.nativeElement;

    html2canvas(element, {
      windowWidth: 595,
      windowHeight: 842,
      scale: 5,
    }).then(canvas => {
        var pdf = new jsPDF('p', 'px',[595, 842]);

        var imgData  = canvas.toDataURL("image/jpeg", 1.0);
        pdf.addImage(imgData, 0, 0, 595, 842);
        pdf.save('testcv.pdf');
        component.destroy();

    });

  }

  newProfessionalCurriculumVitaeComponent() :ComponentRef<CurriculumVitaeComponent> {
    let component = this.viewContainerRef.createComponent<CurriculumVitaeComponent>(CurriculumVitaeComponent);
    component.instance.professional = this.me;
    component.changeDetectorRef.detectChanges();
    return component;
  }
}
