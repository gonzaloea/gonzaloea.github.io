import { Year } from "./date/year";
import { Certification, Course, Education, FinishedCourse, NoCourse } from "./education";

export class EducationBuilder {

    private _highSchoolCourse: Course;
    private _degree: Course;
    private _certifications: Certification[];

    constructor() {
        this._certifications = [];
        this._highSchoolCourse = new NoCourse();
        this._degree = new NoCourse();
    }

    public withACertification(title: string, year: Year) {
        this._certifications.push(new Certification(title, year));
        return this;
    }

    public withHighSchoolCourse(institution: string, title: string, since: Date){
        this._highSchoolCourse = new Course(institution, title, since);
        return this;
    }

    public withFinishedHighSchoolCourse(institution: string, title: string, since: Date, to: Date){
        this._highSchoolCourse = new FinishedCourse(institution, title, since, to);
        return this;
    }

    public withDegreeCourse(institution: string, title: string, since: Date){
        this._degree = new Course(institution, title, since);
        return this;
    }

    public withFinishedDegreeCourse(institution: string, title: string, since: Date, to: Date){
        this._degree = new FinishedCourse(institution, title, since, to);
        return this;
    }

    build(): Education {
        return new Education(this._highSchoolCourse, this._degree, this._certifications);
    }


}