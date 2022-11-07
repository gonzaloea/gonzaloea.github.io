import { ModelBuilder } from "./builder/model-builder";
import { Job } from "./job";
import { Project } from "./project";

export class Experience {

    private _jobs: Job[];
    private _projects: Project[];

    constructor(jobs: Job[], projects: Project[]) {
        this._jobs = jobs;
        this._projects = projects;
    }

    public get jobs() : Job[]{
        return this._jobs;
    } 

    public get projects() : Project[]{
        return this._projects;
    } 
}