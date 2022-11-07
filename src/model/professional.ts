import { ContactInformation } from "./contact-information";
import { Course, Education } from "./education";
import { Experience } from "./experience";
import { Job } from "./job";
import { Project } from "./project";

export class Professional {
    private _name: string;
    private _surname: string;
    private _description: string;
    private _title: string;
    private _experience: Experience;
    private _education: Education;
    private _contactInformation: ContactInformation;

    constructor(name: string, surname: string, title: string, description: string, experience: Experience, education: Education, contactInformation: ContactInformation){
        this._name = name;
        this._surname = surname;
        this._title = title;
        this._description = description;
        this._experience = experience;
        this._education = education;
        this._contactInformation = contactInformation;
    }

    public get name() : string {
        return this._name;
    }

    public get description() : string {
      return this._description;
  }

    public get surname(): string {
        return this._surname;
    }

    public get title(): string {
      return this._title;
  }

    public get jobs(): Job[] {
        return this._experience.jobs;
    }

    public get projects(): Project[] {
        return this._experience.projects;
    }

    public get highSchool(): Course {
        return this._education.highSchool;
    }

    public get email(): string {
        return this._contactInformation.email;
    }

    public get phoneNumber(): string {
        return this._contactInformation.phoneNumber;
    }

}
