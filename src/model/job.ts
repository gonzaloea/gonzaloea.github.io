import { TimeInterval } from "./date/time-interval";
export class Job {
    protected _since: Date;
    private _company: string;

    static with(company: string, since: Date) {
        return new this(company, since);
    }

    constructor(company: string, since: Date) {
        this._company = company;
        this._since = since;
    }

    public get company(): string {
        return this._company;
    }
}

export class FinishedJob extends Job{
    static readonly ERROR_INVALID_INTERVAL : string = "Invalid dates interval";
    private _to: Date;
    private duration: TimeInterval;

    static finishedWith(company: string, since: Date, to: Date) {
        return new this(company, since, to) as Job;
    }

    static  assertToAfterFrom(from: Date, to: Date) {
        if (from > to) throw new Error(FinishedJob.ERROR_INVALID_INTERVAL);
    }

    constructor(company: string, since: Date, to: Date){
        super(company, since);
        this._to = to;
        this.duration = TimeInterval.between(this._since, this._to);
    }

    public yearsWorked() {
        return this.duration.yearsDifference();
    }

    public monthsWorked() {
        return this.duration.monthsDifference()
    }

}
