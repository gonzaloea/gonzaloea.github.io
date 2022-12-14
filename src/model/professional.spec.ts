import { ContactInformation } from "./contact-information";
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
        let contactInformation: ContactInformation = ContactInformation.with("test@test.com", "5411111111", "linked.in/test");
        let professional = new Professional("test", "surname", "title", "description", "portfolio.com",new Experience(jobs, projects), new Education(new Course('test', 'test', new Date()), new Course('test', 'test', new Date()), certifications), contactInformation, []);
        expect(professional).toBeInstanceOf(Professional);
    })
})
