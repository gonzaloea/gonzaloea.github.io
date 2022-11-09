export class Project {

    private _name: string;
    private _description: string;
    private _url;
    private _technologies: string[];

    constructor(name: string, description: string, url: string, technologies: string[]){
        this._name = name;
        this._technologies = technologies;
        this._description = description;
        this._url = url;
    }

    public get name() {
      return this._name;
    }

    public get description() {
      return this._description;
    }

    public get url() {
      return this._url;
    }

    public get technologies() {
      return this._technologies;
    }
}
