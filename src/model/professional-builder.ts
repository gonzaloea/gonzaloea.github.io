
import { ModelBuilder } from "./builder/model-builder";
import { Professional } from "./professional";

export class ProfessionalBuilder extends ModelBuilder<Professional> {
   
    private name: string;
    private surname: string;
    private educationBuilder: EducationBuilder;
    private experienceBuilder: ExperienceBuilder;
    private contactInformationBuilder: ContactInformationBuilder; 

    constructor(){
        super();


    }

    public Named(name: string) {
        this.name = name;
    }


    public WithSurname(surname: string) {
        this.surname = surname;
    }

    public thatWorkedIn(company: string, since:Date, to: Date){


    }

    public thatIsWorkingIn(company: string, since:Date){

    }

    public build(): Professional {
        return new Professional(this.name, this.surname);
    }

}