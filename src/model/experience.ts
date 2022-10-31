import { Job } from "./job";
import { Project } from "./project";

export class Experience {
    private jobs: Job[];
    private projects: Project[];

    constructor(jobs: Job[], projects: Project[]) {
        this.jobs = jobs;
        this.projects = projects;
    }
}