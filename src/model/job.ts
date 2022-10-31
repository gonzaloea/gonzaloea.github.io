import { TimeInterval } from "./time-interval";

export class Job {
    protected since: Date;
    private company: string;

    constructor(company: string, since: Date) {
        this.company = company;
        this.since = since;
    }

    public getCompany(): string {
        return this.company;
    }
}

export class FinishedJob extends Job{
    private to: Date;
    private duration: TimeInterval;

    constructor(company: string, since: Date, to: Date){
        super(company, since);
        this.to = to;
        this.duration = TimeInterval.between(this.since, this.to);
    }

    public yearsWorked() {
        return this.duration.yearsDifference();
    }

    public monthsWorked() {
        return this.duration.monthsDifference()
    }

}
