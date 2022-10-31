import { Year } from "./year";

describe('Year', ()=> {
    it('should be created succesfully', () => {
        let year = Year.at(1995)
        expect(year).toBeInstanceOf(Year);
    });

    it('should not be leap when is not multiple of 4', () => {
        let year = Year.at(1961)
        expect(year.isLeap()).toBeFalse();
    });

    it('should have february with 28 days', () => {
        let february = Year.at(1961).monthByNumber(2);
        expect(february.getMaxDays()).toBe(28);
    });

    describe('LeapYear', ()=> {

        it('should have february with 29 days', () => {
            let february = Year.at(1960).monthByNumber(2);
            expect(february.getMaxDays()).toBe(29);
        });

        it('should be leap when is multiple of 4', () => {
            let year = Year.at(1960)
            expect(year.isLeap()).toBeTrue();
        });
    })
});
