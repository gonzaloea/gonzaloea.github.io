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
    _since: Date;

    constructor(institution: string, title: string, since: Date){
        this.institution = institution;
        this._since = since;
        this.title = title;
    }
    public get since(): Date {
        return this._since;
    }

    public get to(): Date  {
        return new Date();
    }
}

export class NoCourse extends Course {
    constructor(){
        super("", "", new Date())
    }
}


export class FinishedCourse extends Course{
    private _to: Date;
    private _duration: TimeInterval;

    constructor(institution: string, title:string, since: Date, to: Date){
        super(institution, title, since);
        this._to = to;
        this._duration = TimeInterval.between(this.since, this.to);
    }

    public override get to(): Date {
        return this._to;
    }

    public get duration(): TimeInterval {
        return this._duration;
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
