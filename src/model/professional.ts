import { Education } from "./education";
import { Experience } from "./experience";

export class Professional {
    private name: string;
    private experience: Experience;
    private education: Education;

    constructor(name: string, experience: Experience, education: Education){
        this.name = name;
        this.experience = experience;
        this.education = education;
    }

    public getName() : string {
        return this.name;
    }
}