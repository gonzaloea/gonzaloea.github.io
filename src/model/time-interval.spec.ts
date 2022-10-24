import { TimeInterval } from "./time-interval";

describe('TimeInterval', ()=> {
    it('should be created succesfully', () => {
        let interval = TimeInterval.between(new Date(2021, 10, 22), new Date(2022, 10, 22))
        expect(interval).toBeInstanceOf(TimeInterval);
    })

    it('should throw error when creating with invalid dates', () => {
        expect(() => {
            TimeInterval.between(new Date(2023, 10, 22), new Date(2022, 10, 22))
        }).toThrow(new Error(TimeInterval.ERROR_INVALID_INTERVAL));
    })

    it('should return the correct years difference', () => {
        let interval = TimeInterval.between(new Date(2021, 9, 22), new Date(2022, 10, 22))
        expect(interval.yearsDifference()).toBe(1);
    })
    
    it('should return the correct months difference with fromMonth lower than toMonth', () => {
        let interval = TimeInterval.between(new Date(2021, 9, 22), new Date(2022, 10, 22))
        expect(interval.monthsDifference()).toBe(13);
    })

    it('should return the correct months difference with fromMonth higher than toMonth', () => {
        let interval = TimeInterval.between(new Date(2021, 11, 22), new Date(2022, 10, 22))
        expect(interval.monthsDifference()).toBe(11);
    })
})