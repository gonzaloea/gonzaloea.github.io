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
        return jobBuilder.forTheCompany('Compass')
                        .withTheTitle('Backend Software Engineer')
                        .describedAs('At Compass, I work as a Backend Software Engineer directly involved in the company’s M&A processes. I lead the automation of acquisitions by consolidating configurations across multiple services and coordinating communication with teams in the commissions and compliance domains. My role also requires close attention to QA strategies, both for service integration and for ensuring the reliability of each individual service.')
                        .thatWasFromDate(new Date("2024-10-17"))
                        .thatWasLocatedIn('New York, NY, USA')
                        .thatNeededTheSkill('Java')
                        .thatNeededTheSkill('Kotlin')
                        .thatNeededTheSkill('Python')
                        .thatNeededTheSkill('React')
                        .thatHadTheCoreResponsibility("Lead automation of acquisitions, consolidating service configurations to streamline post-merger integration.")
                        .thatHadTheCoreResponsibility("Coordinate with multiple teams in commissions and compliance to ensure smooth consolidation and regulatory alignment.")
                        .thatHadTheCoreResponsibility("Ensure QA strategies are applied consistently, covering both cross-service integration and individual service reliability.");
      })
      .thatWorkedIn( jobBuilder => {
        return jobBuilder.forTheCompany('Branch')
                        .withTheTitle('Backend Software Engineer')
                        .describedAs('At Branch, a mobile marketing firm, I worked on backend systems supporting revenue strategies. I integrated more than 10 ad networks in three months to ingest ad revenue data, which was processed asynchronously through Kafka in batch mode and consumed by the attribution platform. I implemented solutions with Kotlin, Micronaut, and SQLite to improve data-driven workflows, and developed Python- and Bazel-based tools to optimize insights for the mobile SDK, enabling more accurate ad delivery across mobile platforms.')
                        .thatWasFromDate(new Date("2024-10-17"))
                        .thatWasFromDate(new Date("2023-2-21"))
                        .thatWasLocatedIn('San Francisco, CA, USA')
                        .thatNeededTheSkill('Java')
                        .thatNeededTheSkill('Kotlin')
                        .thatNeededTheSkill('Python')
                        .thatNeededTheSkill('React')
                        .thatHadTheCoreResponsibility("Integrated 10+ ad networks in three months, enabling ingestion of ad revenue data for the attribution platform.")
                        .thatHadTheCoreResponsibility("Worked closely with data scientists to synergize backend systems that underpinned revenue generation strategies.")
                        .thatHadTheCoreResponsibility("Contributed to both backend development and frontend features, as well as data engineering, enhancing the overall functionality and user experience of the platform.");
      })
      .thatWorkedIn( jobBuilder => {
        return jobBuilder.forTheCompany('Ualá')
                        .withTheTitle('Backend Software Engineer')
                        .describedAs('I am currently engaged in the creation of a new platform for the company\'s loan offering. This platform is being developed on Amazon Web Services, utilizing Java-based AWS Lambdas and infrastructure created with Terraform. To streamline our development process, we are also utilizing GitHub Actions for continuous integration.')
                        .thatWasFromDate(new Date("2022-6-2"))
                        .thatWasToDate(new Date("2023-2-21"))
                        .thatWasLocatedIn('Buenos Aires, Argentina')
                        .thatNeededTheSkill("AWS Serverless")
                        .thatNeededTheSkill("Terraform")
                        .thatNeededTheSkill("Java")
                        .thatHadTheCoreResponsibility("Led the development of a new loan platform on Amazon Web Services (AWS), collaborating with cross-functional teams and intermediaries.")
                        .thatHadTheCoreResponsibility("Utilized Java-based AWS Lambdas and Terraform for infrastructure creation, while implementing streamlined development and enhanced collaboration through GitHub Actions for continuous integration.")
      })
      .thatWorkedIn( jobBuilder => {
        return jobBuilder.forTheCompany('Vantek')
                        .withTheTitle('Technical Lead')
                        .describedAs('Vantek is a software development company that specializes in serving brokerage houses in Latin America. My role within the company included coaching and mentoring new developers, many of whom were new to the IT industry. I also had the opportunity to lead a mobile app development project from start to finish, using Ionic with Angular to create the app.')
                        .thatWasFromDate(new Date("2021-6-1"))
                        .thatWasToDate(new Date("2022-6-1"))
                        .thatWasLocatedIn('Buenos Aires, Argentina')
                        .thatNeededTheSkill("Angular")
                        .thatNeededTheSkill("Leading")
                        .thatNeededTheSkill("Ionic")
                        .thatNeededTheSkill("Java")
                        .thatHadTheCoreResponsibility("Coached and mentored junior developers, many of whom were new to the IT industry.")
                        .thatHadTheCoreResponsibility("Led the end-to-end development of a mobile app using Ionic with Angular.")
                        .thatHadTheCoreResponsibility("Contributed to multiple projects by shaping the technical vision across backend and frontend.")
      })
      .thatWorkedIn( jobBuilder => {
        return jobBuilder.forTheCompany('Vantek')
                        .withTheTitle('FullStack Software Engineer')
                        .describedAs('As part of my responsibilities at the company, I was responsible for the development and maintenance of various products. This included working on the backend of one product, which was written in Java and built using the Spring framework. I also had the opportunity to work on the frontend of another product, which was written in JavaScript and based on Angular 7.')
                        .thatWasFromDate(new Date("2019-7-1"))
                        .thatWasToDate(new Date("2021-6-1"))
                        .thatWasLocatedIn('Buenos Aires, Argentina')
                        .thatNeededTheSkill("Bash")
                        .thatNeededTheSkill("Ionic")
                        .thatNeededTheSkill("Java")
                        .thatNeededTheSkill("Spring")
                        .thatNeededTheSkill("Angular")
                        .thatNeededTheSkill("PostgreSQL")
                        .thatHadTheCoreResponsibility("Managed multiple products, handling backend with Java and Spring framework. Also, contributed to frontend using JavaScript and Angular 7.")
      })
      .thatWorkedIn( jobBuilder => {
        return jobBuilder.forTheCompany('Keepcon')
                        .withTheTitle('FullStack Software Engineer')
                        .describedAs('As a member of the company\'s research and development team, I contributed to the creation of a configuration tool for an NLP engine used for social content moderation on platforms such as Facebook and Twitter. My responsibilities included developing new features for the tool and maintaining the server hosting the application.')
                        .thatWasFromDate(new Date("2017-11-1"))
                        .thatWasToDate(new Date("2019-7-1"))
                        .thatWasLocatedIn('Buenos Aires, Argentina')
                        .thatNeededTheSkill("Ruby on Rails")
                        .thatNeededTheSkill("Vue.js")
                        .thatNeededTheSkill("Ruby")
                        .thatNeededTheSkill("PostgreSQL")
                        .thatHadTheCoreResponsibility("Collaborated on an NLP engine's configuration tool for social content moderation, predominantly using Ruby and JavaScript. Developed features and maintained the hosting server.")
      })
      .thatWorkedIn( jobBuilder => {
        return jobBuilder.forTheCompany('Lumina Americas')
                        .withTheTitle('FullStack Software Engineer')
                        .describedAs('I was involved in the development and maintenance of the company\'s main product, a client-server application built in Java with an Oracle database. My responsibilities included performing maintenance tasks and adding new features to the product, which included both frontend and backend components written in Java.')
                        .thatWasFromDate(new Date("2014-2-1"))
                        .thatWasToDate(new Date("2017-11-1"))
                        .thatWasLocatedIn('Buenos Aires, Argentina')
                        .thatNeededTheSkill("Java")
                        .thatNeededTheSkill("Spring")
                        .thatNeededTheSkill("Swing")
                        .thatNeededTheSkill("Oracle PL/SQL")
                        .thatHadTheCoreResponsibility("Developed and maintained the company's main Java-based client-server product, involving both frontend and backend components.");
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
      .thatAttendedToUniversity('Universidad de Buenos Aires', 'Software Engineering', new Date("2015-3-17"), new Date("2022-3-17"))
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
