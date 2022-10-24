import { Education } from "./education";
import { Experience } from "./experience";

export class Professional {
    private name: String;
    private experience: Experience;
    private education: Education;

    constructor(name: String, experience: Experience, education: Education){
        this.name = name;
        this.experience = experience;
        this.education = education;
    }

    public getName() : String {
        return this.name;
    }
}