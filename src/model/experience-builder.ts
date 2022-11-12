import { Experience } from "./experience";
import { FinishedJob, Job } from "./job";
import { FinishedJobBuilder, JobBuilder } from "./job-builder";
import { Project } from "./project";
import { ProjectBuilder } from "./project-builder";

export class ExperienceBuilder {
    private _jobs: Job[];
    private _projects: Project[];

    constructor() {
        this._jobs = [];
        this._projects = [];
    }


    public withJob(jobConstruction: (jobBuilder : JobBuilder) => JobBuilder) {
      let job = jobConstruction(new JobBuilder()).build();
      this._jobs.push(job);
      return this;
    }

    public withFinishedJob(finishedJobConstruction: (finishedJobBuilder : FinishedJobBuilder) => FinishedJobBuilder) {
      let finishedJob = finishedJobConstruction(new FinishedJobBuilder()).build();
      this._jobs.push(finishedJob);
      return this;
    }

    public withCreatedProject(projectConstruction : (projectBuilder: ProjectBuilder) => ProjectBuilder) {
        let project =projectConstruction(new ProjectBuilder()).build();
        this._projects.push(project);
        return this;
    }

    public build(): Experience {
        return new Experience(this._jobs, this._projects);
    }
}
