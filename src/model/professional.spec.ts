import { Certification, Course, Education } from "./education";
import { Experience } from "./experience";
import { Job } from "./job";
import { Professional } from "./professional";
import { Project } from "./project";

describe('Professional', ()=> {
    it('should be created succesfully', () => {
        let jobs: Job[] = [];
        let projects: Project[] = [];
        let certifications: Certification[] = [];
        let c = new Professional("test",new Experience(jobs, projects), new Education(new Course('test', 'test', new Date()), new Course('test', 'test', new Date()), certifications));
        expect(c).toBeInstanceOf(Professional);
    })
})