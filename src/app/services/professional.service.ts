import { Injectable } from '@angular/core';
import { Professional } from 'src/model/professional';
import { ProfessionalBuilder } from 'src/model/professional-builder';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {

  private _professional: Professional;
  
  constructor() {
    this._professional = ProfessionalBuilder
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
                        .describedAs('I am currently engaged in the creation of a new platform for the company\'s loan offering. This platform is being developed on Amazon Web Services, utilizing Java-based AWS Lambdas and infrastructure created with Terraform. To streamline our development process, we are also utilizing GitHub Actions for continuous integration.')
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
                        .describedAs('Vantek is a software development company that specializes in serving brokerage houses in Latin America. My role within the company included coaching and mentoring new developers, many of whom were new to the IT industry. I also had the opportunity to lead a mobile app development project from start to finish, using Ionic with Angular to create the app.')
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
                        .describedAs('As part of my responsibilities at the company, I was responsible for the development and maintenance of various products. This included working on the backend of one product, which was written in Java and built using the Spring framework. I also had the opportunity to work on the frontend of another product, which was written in JavaScript and based on Angular 7.')
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
                        .describedAs('As a member of the company\'s research and development team, I contributed to the creation of a configuration tool for an NLP engine used for social content moderation on platforms such as Facebook and Twitter. My responsibilities included developing new features for the tool and maintaining the server hosting the application.')
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
                        .describedAs('Mentoring and freelance software development.')
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
                        .describedAs('I was involved in the development and maintenance of the company\'s main product, a client-server application built in Java with an Oracle database. My responsibilities included performing maintenance tasks and adding new features to the product, which included both frontend and backend components written in Java.')
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

  public get professional() : Professional {
    return this._professional;
  }
}
