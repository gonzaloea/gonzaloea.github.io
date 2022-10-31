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

        it('should be lasted for 0 years', () => {
            let job = new FinishedJob("companyName", new Date(2020,10,22), new Date(2021,9,22));
            expect(job.yearsWorked()).toBe(0);
        })

        it('should be worked for 2 years', () => {
            let job = new FinishedJob("companyName", new Date(2019,10,22), new Date(2021,10,22));
            expect(job.yearsWorked()).toBe(2);
        })

        it('should be worked for 2 months', () => {
            let job = new FinishedJob("companyName", new Date(2019,8,22), new Date(2021,10,22));
            expect(job.monthsWorked()).toBe(2);
        })
    })
})