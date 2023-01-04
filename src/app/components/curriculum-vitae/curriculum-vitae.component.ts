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

  public professional: Professional;

  constructor() {
    this.professional = ProfessionalBuilder
      .newProfessionalToBuild()
      .withCompleteName("Gonzalo", "Alvarez")
      .titledAs("Software Engineer")
      .describedAs("I like challenges of all kinds related to software development. My experience is mainly on web development, both backend and frontend, although in the latest years I've worked mainly in the backend.")
      .thatShowHisWorkIn("github.com/gonzaloea")
      .thatCanBeContactedViaEmail("gonzalo.e.alvarez@hotmail.com")
      .thatCanBeContactedViaLinkedIn("linkedin.com/in/gonzaloea")
      .thatIsWorkingIn( jobBuilder => {
        return jobBuilder.forTheCompany('Ualá')
                        .withTheTitle('Backend Developer')
                        .describedAs('Currently working in the development of a totally new platform for the loans product of the company.')
                        .thatWasFromDate(new Date("2022-6-2"))
                        .thatNeededTheSkill("AWS Serverless")
                        .thatNeededTheSkill("Terraform")
                        .thatNeededTheSkill("Java");
      })
      .thatWorkedIn( jobBuilder => {
        return jobBuilder.forTheCompany('Vantek')
                        .withTheTitle('Technical Lead')
                        .thatWasFromDate(new Date("2021-6-1"))
                        .thatWasToDate(new Date("2022-6-1"))
                        .describedAs('I was responsible for the coaching of the developers that were in the learning proccess in the company. A big number of the developers were just starting in the IT environment so I had to work as a coach and teach them about software development.')
                        .thatNeededTheSkill("Angular")
                        .thatNeededTheSkill("Coaching")
                        .thatNeededTheSkill("Leading")
                        .thatNeededTheSkill("Ionic")
                        .thatNeededTheSkill("Java")
      })
      .thatWorkedIn( jobBuilder => {
        return jobBuilder.forTheCompany('Vantek')
                        .withTheTitle('FullStack Engineer')
                        .thatWasFromDate(new Date("2019-7-1"))
                        .thatWasToDate(new Date("2021-6-1"))
                        .describedAs('I was responsible for the development and maintenance of different products of the company.')
                        .thatNeededTheSkill("Bash")
                        .thatNeededTheSkill("Ionic")
                        .thatNeededTheSkill("Java")
                        .thatNeededTheSkill("Spring")
                        .thatNeededTheSkill("Angular")
                        .thatNeededTheSkill("PostgreSQL")
      })
      .thatWorkedIn( jobBuilder => {
        return jobBuilder.forTheCompany('Keepcon')
                        .withTheTitle('FullStack Developer')
                        .thatWasFromDate(new Date("2017-11-1"))
                        .thatWasToDate(new Date("2019-7-1"))
                        .describedAs('I was responsible for the development and maintenance of the platform that linguistics used to configure the robot that can analyze the social medias.')
                        .thatNeededTheSkill("Ruby on Rails")
                        .thatNeededTheSkill("Vue.js")
                        .thatNeededTheSkill("Ruby")
                        .thatNeededTheSkill("PostgreSQL")
      })
      .thatWorkedIn( jobBuilder => {
        return jobBuilder.forTheCompany('Codementor')
                        .withTheTitle('Software Developer')
                        .thatWasFromDate(new Date("2018-6-1"))
                        .thatWasToDate(new Date("2018-10-1"))
                        .describedAs('I have helped users of the platform to understand software development. Sometimes explaining about an specific tool or language, and sometimes about algorithmic design.')
                        .thatNeededTheSkill("Ruby")
                        .thatNeededTheSkill("Ruby on Rails")
                        .thatNeededTheSkill("Algorithm Design")
                        .thatNeededTheSkill("Python")
                        .thatNeededTheSkill("Java")
                        .thatNeededTheSkill("SQL")
      })
      .thatWorkedIn( jobBuilder => {
        return jobBuilder.forTheCompany('Lumina Americas')
                        .withTheTitle('Software Developer')
                        .thatWasFromDate(new Date("2014-2-1"))
                        .thatWasToDate(new Date("2017-11-1"))
                        .describedAs('I was responsible for the development and maintenance of main product of the company.')
                        .thatNeededTheSkill("Java")
                        .thatNeededTheSkill("Spring")
                        .thatNeededTheSkill("Swing")
                        .thatNeededTheSkill("Oracle PL/SQL")
      })
      .thatCreatedAProject( projectBuilder => {
        return projectBuilder.named('Ophrys')
                            .describedAs('Cryptocurrency trading automation. Designed mainly to be adapted to any market. The main motivation was to explore Golang.')
                            .exposedIn('github.com/gonzaloea/ophrys')
                            .thatIsBuildOnTopOf('Golang')
      })
      .thatCreatedAProject( projectBuilder => {
        return projectBuilder.named('Ophrys GUI')
                            .describedAs('Ophrys graphical user interface. The main motivation was to explore new versions of Vue.js.')
                            .exposedIn('github.com/gonzaloea/ophrys-gui')
                            .thatIsBuildOnTopOf('Vue.js')
      })
      .thatIsAttendingToUniversity('Universidad de Buenos Aires', 'Software Engineering', new Date("2015-3-17"))
      .withSoftSkill("Autonomy")
      .withSoftSkill("Fast learning")
      .withSoftSkill("Problem solving")
      .withSoftSkill("Team Player")
    .build();
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
