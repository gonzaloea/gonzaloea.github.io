import { Experience } from "./experience";
import { FinishedJob, Job } from "./job";
import { Project } from "./project";

export class ExperienceBuilder {
    private _jobs: Job[];
    private _projects: Project[];

    constructor() {
        this._jobs = [];
        this._projects = [];
    }

    public withJob(company: string, title: string, description:string, since: Date, skills: string[]) {
        this._jobs.push(Job.with(company, title, description, since, skills));
        return this;
    }

    public withFinishedJob(company: string, title: string, description: string, since: Date, to: Date, skills: string[]) {
        this._jobs.push(FinishedJob.finishedWith(company, title, description, since, to, skills));
        return this;
    }

    public withCreatedProject(name: string, ...technologies: string[]) {
        this._projects.push(new Project(name, technologies));
        return this;
    }

    public build(): Experience {
        return new Experience(this._jobs, this._projects);
    }
}
