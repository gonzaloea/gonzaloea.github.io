import { FinishedJob, Job } from "./job";

export class JobBuilder{
  private static readonly EMPTY_STRING: string = '';

  protected _since: Date;
  protected _description: string;
  protected _title: string;
  protected _company: string;
  protected _location: string;
  protected _skills: string[];
  protected _coreResponsibilities: string[];


  constructor() {
    this._since = new Date();
    this._description = JobBuilder.EMPTY_STRING;
    this._title = JobBuilder.EMPTY_STRING;
    this._company = JobBuilder.EMPTY_STRING;
    this._location = JobBuilder.EMPTY_STRING;
    this._skills = [];
    this._coreResponsibilities = [];
  }


  forTheCompany(company: string) {
    this._company = company;
    return this;
  }

  withTheTitle(title: string) {
    this._title = title;
    return this;
  }

  thatWasFromDate(since: Date) {
    this._since = since;
    return this;
  }

  describedAs(description: string) {
    this._description = description;
    return this;
  }

  thatNeededTheSkill(skill: string) {
    this._skills.push(skill);
    return this;
  }

  thatHadTheCoreResponsibility(coreResponsibility: string){
    this._coreResponsibilities.push(coreResponsibility);
    return this;
  }

  thatWasLocatedIn(location: string) {
    this._location = location;
    return this;
  }

  build() : Job{
    return Job.with(this._company, this._title, this._description, this._location, this._since, this._skills, this._coreResponsibilities);
  }
}

export class FinishedJobBuilder extends JobBuilder {
  protected _to: Date;

  constructor() {
    super();
    this._to = new Date();
  }

  thatWasToDate(to: Date) {
    this._to = to;
    return this;
  }

  override build() : Job{
    return FinishedJob.finishedWith(this._company, this._title, this._description, this._location, this._since, this._to, this._skills, this._coreResponsibilities);
  }
}
