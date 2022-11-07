import { TimeInterval } from "./date/time-interval";
export class Job {
    protected _since: Date;
    private _description: string;
    private _title: string;
    private _company: string;

    static with(company: string, title: string, description: string, since: Date) {
        return new this(company, title, description, since);
    }

    constructor(company: string, title: string, description: string, since: Date) {
        this._company = company;
        this._description = description;
        this._since = since;
        this._title = title;
    }

    public get company(): string {
        return this._company;
    }

    public get title(): string {
        return this._title;
    }

    public get description(): string {
        return this._description;
    }

    public get since(): Date {
      return this._since;
    }

    public get to(): Date {
      return new Date();
    }

    public yearsWorked() {
        return TimeInterval.between(this._since, new Date()).yearsDifference();
    }

    public monthsWorked() {
        return TimeInterval.between(this._since, new Date()).monthsDifference()
    }

    public get duration() {
      return TimeInterval.between(this._since, new Date());
    }
}

export class FinishedJob extends Job{
    static readonly ERROR_INVALID_INTERVAL : string = "Invalid dates interval";
    private _to: Date;
    private _duration: TimeInterval;

    static finishedWith(company: string, title: string, description: string, since: Date, to: Date) {
        return new this(company, title, description, since, to);
    }

    static  assertToAfterFrom(from: Date, to: Date) {
        if (from > to) throw new Error(FinishedJob.ERROR_INVALID_INTERVAL);
    }

    constructor(company: string, title: string, description: string, since: Date, to: Date){
        super(company, title, description, since);
        this._to = to;
        this._duration = TimeInterval.between(this._since, this._to);
    }

    public override yearsWorked() {
        return this.duration.yearsDifference();
    }

    public override monthsWorked() {
        return this.duration.monthsDifference()
    }

    public override get to(): Date {
      return this._to;
    }

    public override get duration() {
      return this._duration;
    }

}
