export class Job {
    private since: Date;
    private company: String;

    constructor(company: String, since: Date) {
        this.company = company;
        this.since = since;
    }

    public getCompany(): String {
        return this.company;
    }
}


export class FinishedJob extends Job{
    private to: Date;

    constructor(company: String, since: Date, to: Date){
        super(company, since);
        this.to = to;
    }


}