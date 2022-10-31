import { Year } from "./date/year";
import { TimeInterval } from "./time-interval";

export class Education {
    private highSchoolCourse: Course;
    private degree: Course;
    private certifications: Certification[];

    constructor(highSchoolCourse: Course, degree: Course, certifications: Certification[]){
        this.highSchoolCourse = highSchoolCourse;
        this.degree = degree;
        this.certifications = certifications;
    }
}

export class Course {
    institution: string;
    title: string;
    since: Date;

    constructor(institution: string, title: string, since: Date){
        this.institution = institution;
        this.since = since;
        this.title = title;
    }
}

export class FinishedCourse extends Course{
    to: Date;
    duration: TimeInterval;

    constructor(institution: string, title:string, since: Date, to: Date){
        super(institution, title, since);
        this.to = to;
        this.duration = TimeInterval.between(this.since, this.to);
    }
}

export class Certification{
    title: string;
    year: Year;

    constructor(title: string, year: Year) {
        this.title = title;
        this.year = year;
    }

}
