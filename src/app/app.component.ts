import { Component, ComponentRef, ViewContainerRef } from '@angular/core';
import { CurriculumVitaeComponent } from './components/curriculum-vitae/curriculum-vitae.component';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Professional } from 'src/model/professional';
import { ProfessionalBuilder } from 'src/model/professional-builder';
import { A4Pdf } from 'src/model/a4-pdf';
import { CurriculumVitaeService } from './services/curriculum-vitae.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  me: Professional;

  constructor(private viewContainerRef: ViewContainerRef, private curriculumVitaeService: CurriculumVitaeService) {
    this.me = ProfessionalBuilder
      .newProfessionalToBuild()
      .withCompleteName("Gonzalo", "Alvarez")
      .titledAs("Software Engineer")
      .describedAs("I like challenges of all kinds related to software development. My experience is mainly on web development, both backend and frontend, although in the latest years I've worked mainly in the backend.")
      .thatShowHisWorkIn("github.com/gonzaloea")
      .thatCanBeContactedViaEmail("gonzalo.e.alvarez@hotmail.com")
      .thatCanBeContactedViaLinkedIn("linkedin.com/in/gonzaloea")
      .thatIsWorkingIn('Ualá', 'Backend Developer', 'Currently working in the development of a totally new platform for the loans product of the company.', new Date("2022-6-2"), ["AWS Serverless", "Terraform", "Java"])
      .thatWorkedIn('Vantek', 'Technical Lead', 'I was responsible for the coaching of the developers that were in the learning proccess in the company. A big number of the developers were just starting in the IT environment so I had to work as a coach and teach them about software development.', new Date("2021-6-1"), new Date("2022-6-1"), ["Angular", "Coaching", "Leading", "Ionic", "Java"])
      .thatWorkedIn('Vantek', 'FullStack Engineer', 'I was responsible for the development and maintenance of different products of the company.', new Date("2019-7-1"), new Date("2021-6-1"), ["Bash", "Ionic", "Java", "Spring", "Angular", "PostgreSQL"])
      .thatWorkedIn('Keepcon', 'FullStack Developer', 'I was responsible for the development and maintenance of the platform that linguistics used to configure the robot that can analyze the social medias.', new Date("2017-11-1"), new Date("2019-7-1"), ["Ruby on Rails", "Vue.js", "Ruby", "PostgreSQL"])
      .thatWorkedIn('Codementor', 'Software Developer', 'I have helped users of the platform to understand software development. Sometimes explaining about an specific tool or language, and sometimes about algorithmic design.', new Date("2018-6-1"), new Date("2018-10-1"), ["Ruby", "Ruby on Rails", "Algorith Design", "Python", "Java", "SQL"])
      .thatWorkedIn('Lumina Americas', 'Software Developer', 'I was responsible for the development and maintenance of main product of the company.', new Date("2014-2-1"), new Date("2017-11-1"), ["Java", "Spring", "Swing", "Oracle PL/SQL"])
      .thatCreatedAProject('Ophrys', 'Cryptocurrency trading automation. Designed mainly to be adapted to any market. The main motivation was to explore Golang.', 'github.com/gonzaloea/ophrys', 'Golang')
      .thatCreatedAProject('Ophrys GUI', 'Ophrys graphical user interface. The main motivation was to explore new versions of Vue.js.', 'github.com/gonzaloea/ophrys-gui', 'Vue.js')
      .thatIsAttendingToUniversity('Universidad de Buenos Aires', 'Software Engineering', new Date("2015-3-17"))
      .withSoftSkill("Autonomy")
      .withSoftSkill("Fast learning")
      .withSoftSkill("Problem solving")
      .withSoftSkill("Team Player")
    .build();

  }

  async downloadCurriculumVitae() {
    this.curriculumVitaeService.download(this.viewContainerRef, this.me);
  }
}
