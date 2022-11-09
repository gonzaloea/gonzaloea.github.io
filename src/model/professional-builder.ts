import { ModelBuilder } from './builder/model-builder';
import { ContactInformationBuilder } from './contact-information-builder';
import { Year } from './date/year';
import { EducationBuilder } from './education-builder';
import { ExperienceBuilder } from './experience-builder';
import { Professional } from './professional';

export class ProfessionalBuilder extends ModelBuilder<Professional> {
  private readonly EMPTY_STRING: string = '';

  private name: string;
  private surname: string;
  private title: string;
  private description: string;
  private portfolio: string;
  private educationBuilder: EducationBuilder;
  private experienceBuilder: ExperienceBuilder;
  private contactInformationBuilder: ContactInformationBuilder;
  private softSkills: string[];

  static newProfessionalToBuild() {
    return new this();
  }

  private constructor() {
    super();
    this.name = this.EMPTY_STRING;
    this.surname = this.EMPTY_STRING;
    this.title = this.EMPTY_STRING;
    this.description = this.EMPTY_STRING;
    this.portfolio = this.EMPTY_STRING;
    this.educationBuilder = new EducationBuilder();
    this.experienceBuilder = new ExperienceBuilder();
    this.contactInformationBuilder = new ContactInformationBuilder();
    this.softSkills = [];
  }

  public withCompleteName(name: string, surname: string) {
    this.withName(name);
    this.withSurname(surname);
    return this;
  }

  public withName(name: string) {
    this.name = name;
    return this;
  }

  public titledAs(title: string) {
    this.title = title;
    return this;
  }

  public describedAs(description: string) {
    this.description = description;
    return this;
  }

  public withSurname(surname: string) {
    this.surname = surname;
    return this;
  }

  public thatWorkedIn(
    company: string,
    title: string,
    description: string,
    since: Date,
    to: Date,
    skills: string[]
  ) {
    this.experienceBuilder.withFinishedJob(
      company,
      title,
      description,
      since,
      to,
      skills
    );
    return this;
  }

  public thatIsWorkingIn(
    company: string,
    title: string,
    description: string,
    since: Date,
    skills: string[]
  ) {
    this.experienceBuilder.withJob(company, title, description, since, skills);
    return this;
  }

  public thatCreatedAProject(name: string, description: string, url: string, ...technologies: string[]) {
    this.experienceBuilder.withCreatedProject(name, description, url,...technologies);
    return this;
  }

  public thatAttendedToHighSchool(
    institution: string,
    title: string,
    since: Date,
    to: Date
  ) {
    this.educationBuilder.withFinishedHighSchoolCourse(
      institution,
      title,
      since,
      to
    );
    return this;
  }

  public thatIsCertified(
    title: string,
    year: number
  ) {
    this.educationBuilder.withACertification(
      title,
      Year.at(year)
    );
    return this;
  }

  public thatIsAttendingToHighSchool(
    institution: string,
    title: string,
    since: Date
  ) {
    this.educationBuilder.withHighSchoolCourse(institution, title, since);
    return this;
  }

  public thatAttendedToUniversity(
    institution: string,
    title: string,
    since: Date,
    to: Date
  ) {
    this.educationBuilder.withFinishedDegreeCourse(
      institution,
      title,
      since,
      to
    );
    return this;
  }

  public thatIsAttendingToUniversity(
    institution: string,
    title: string,
    since: Date
  ) {
    this.educationBuilder.withDegreeCourse(institution, title, since);
    return this;
  }

  public thatShowHisWorkIn(portfolio: string) {
    this.portfolio = portfolio;
    return this;
  }

  public thatCanBeContactedViaEmail(email: string) {
    this.contactInformationBuilder.withEmail(email);
    return this;
  }

  public thatCanBeContactedViaPhone(phone: string) {
    this.contactInformationBuilder.withPhoneNumber(phone);
    return this;
  }

  public thatCanBeContactedViaLinkedIn(linkedIn: string) {
    this.contactInformationBuilder.withLinkedIn(linkedIn);
    return this;
  }

  public withSoftSkill(softSkill: string) {
    this.softSkills.push(softSkill);
    return this;
  }

  public build(): Professional {
    return new Professional(
      this.name,
      this.surname,
      this.title,
      this.description,
      this.portfolio,
      this.experienceBuilder.build(),
      this.educationBuilder.build(),
      this.contactInformationBuilder.build(),
      this.softSkills
    );
  }
}
