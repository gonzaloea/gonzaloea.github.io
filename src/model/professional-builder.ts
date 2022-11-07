
import { ModelBuilder } from "./builder/model-builder";
import { ContactInformationBuilder } from "./contact-information-builder";
import { EducationBuilder } from "./education-builder";
import { ExperienceBuilder } from "./experience-builder";
import { Professional } from "./professional";

export class ProfessionalBuilder extends ModelBuilder<Professional> {

    private readonly EMPTY_STRING : string = ""; 
   
    private name: string;
    private surname: string;
    private educationBuilder: EducationBuilder;
    private experienceBuilder: ExperienceBuilder;
    private contactInformationBuilder: ContactInformationBuilder; 

    constructor(){
        super();
        this.name = this.EMPTY_STRING;
        this.surname = this.EMPTY_STRING;
        this.educationBuilder = new EducationBuilder();
        this.experienceBuilder = new ExperienceBuilder();
        this.contactInformationBuilder = new ContactInformationBuilder();
    }

    public named(name: string) {
        this.name = name;
        return this;
    }


    public withSurname(surname: string) {
        this.surname = surname;
        return this;
    }

    public thatWorkedIn(company: string, since:Date, to: Date){
        this.experienceBuilder.withFinishedJob(company, since, to);
        return this;

    }

    public thatIsWorkingIn(company: string, since:Date){
        this.experienceBuilder.withJob(company, since);
        return this;
    }

    public thatCreatedAProject(name: string, ...technologies: string[]) {
        this.experienceBuilder.withCreatedProject(name, ...technologies);
        return this;
    }

    public thatAttendedToHighSchool(institution: string, title: string, since: Date, to: Date) {
        this.educationBuilder.withFinishedHighSchoolCourse(institution, title, since, to);
        return this;
    }

    public thatIsAttendedingToHighSchool(institution: string, title: string, since: Date) {
        this.educationBuilder.withHighSchoolCourse(institution, title, since);
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

    public build(): Professional {
        return new Professional(this.name, this.surname, this.experienceBuilder.build(), this.educationBuilder.build(), this.contactInformationBuilder.build());
    }

}