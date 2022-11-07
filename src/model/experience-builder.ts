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

    public withJob(company: string, since: Date) {
        this._jobs.push(Job.with(company, since));
        return this;
    }

    public withFinishedJob(company: string, since: Date, to: Date) {
        this._jobs.push(FinishedJob.finishedWith(company, since, to));
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