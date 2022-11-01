import { Year } from "./date/year";
import { TimeInterval } from "./date/time-interval";

export class Education {
    private _highSchoolCourse: Course;
    private _degree: Course;
    private _certifications: Certification[];

    constructor(highSchoolCourse: Course, degree: Course, certifications: Certification[]){
        this._highSchoolCourse = highSchoolCourse;
        this._degree = degree;
        this._certifications = certifications;
    }

    public get highSchool() : Course {
        return this._highSchoolCourse;
    }

    public get degree() : Course {
        return this._degree;
    }

    public get certifications() : Certification[] {
        return this._certifications;
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
    _title: string;
    _year: Year;

    constructor(title: string, year: Year) {
        this._title = title;
        this._year = year;
    }

    public get title(): string {
        return this.title;
    }

    public get year(): number {
        return this._year.number;
    }
}
