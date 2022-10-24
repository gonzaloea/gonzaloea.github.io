import { Education } from "./education";
import { Experience } from "./experience";
import { Job } from "./job";
import { Professional } from "./professional";

describe('Professional', ()=> {
    it('should be created succesfully', () => {
        let jobs = new Array<Job>();
        let c = new Professional("test",new Experience(jobs), new Education());
        expect(c).toBeInstanceOf(Professional);
    })
})