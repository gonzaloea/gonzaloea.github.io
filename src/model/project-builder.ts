import { Project } from "./project";

export class ProjectBuilder {
  private static readonly EMPTY_STRING: string = '';

  private _name: string;
  private _description: string;
  private _url: string;
  private _technologies: string[];

  constructor() {
    this._name = ProjectBuilder.EMPTY_STRING;
    this._description = ProjectBuilder.EMPTY_STRING;
    this._url = ProjectBuilder.EMPTY_STRING;
    this._technologies = [];
  }

  named(name: string){
    this._name = name;
    return this;
  }

  describedAs(description: string){
    this._description = description;
    return this;
  }

  exposedIn(url: string){
    this._url = url;
    return this;
  }

  thatIsBuildOnTopOf(technology : string) {
    this._technologies.push(technology);
    return this;
  }

  build() {
    return new Project(this._name, this._description, this._url, this._technologies);
  }

}
