import { FinishedJob, Job } from "./job";
describe('Job', ()=> {
    it('should be created succesfully', () => {
        let job = new Job("companyName", new Date(2020,10,22));
        expect(job).toBeInstanceOf(Job);
    })

    describe('FinishedJob', () =>{
        it('should be created succesfully', () => {
            let job = new FinishedJob("companyName", new Date(2020,10,22), new Date(2021,10,22));
            expect(job).toBeInstanceOf(FinishedJob);
        })

        it('should be instance of Job', () => {
            let job = new FinishedJob("companyName", new Date(2020,10,22), new Date(2021,10,22));
            expect(job).toBeInstanceOf(Job);
        })
    })
})