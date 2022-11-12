import { Title } from "@angular/platform-browser";
import { FinishedJob, Job } from "./job";

export class JobBuilder{
  private static readonly EMPTY_STRING: string = '';

  protected _since: Date;
  protected _description: string;
  protected _title: string;
  protected _company: string;
  protected _skills: string[];


  constructor() {
    this._since = new Date();
    this._description = JobBuilder.EMPTY_STRING;
    this._title = JobBuilder.EMPTY_STRING;
    this._company = JobBuilder.EMPTY_STRING;
    this._skills = [];
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

  build() : Job{
    return Job.with(this._company, this._title, this._description, this._since, this._skills);
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
    return FinishedJob.finishedWith(this._company, this._title, this._description, this._since, this._to, this._skills);
  }
}
