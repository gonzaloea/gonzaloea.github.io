import { Job } from "./job";

export class Experience {
    private jobs: Array<Job>;

    constructor(jobs: Array<Job>) {
        this.jobs = jobs;
    }
}