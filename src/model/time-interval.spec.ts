import { Month } from "./date/month";
import { Year } from "./date/year";
import { DaysDifference, HoursDifference, MinutesDifference, MonthsDifference, SecondsDifference, TimeInterval, YearsDifference } from "./time-interval";

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
        expect(interval.monthsDifference()).toBe(1);
    })

    it('should return the correct months difference with fromMonth higher than toMonth', () => {
        let interval = TimeInterval.between(new Date(2021, 11, 22), new Date(2022, 10, 22))
        expect(interval.monthsDifference()).toBe(11);
    })

});

describe('SecondsDifference', ()=> {
    
    it('should be created succesfully', () => {
        let difference = SecondsDifference.between(54, 59);
        expect(difference).toBeInstanceOf(SecondsDifference);
    })

    it('should calculate difference between numbers when to is higher than from', () => {
        let difference = SecondsDifference.between(54, 59);
        expect(difference.secondsDifference()).toBe(5);
    })

    it('should calculate difference between numbers when to is lower than from', () => {
        let difference = SecondsDifference.between(54, 30);
        expect(difference.secondsDifference()).toBe(36);
    })

    it('should throw an error when from has not seconds format', () => {
        expect(() => {
            SecondsDifference.between(70, 30);
        }).toThrow(new Error(SecondsDifference.ERROR_INVALID_SECONDS_FORMAT));
    })

    it('should throw an error when to has not seconds format', () => {
        expect(() => {
            SecondsDifference.between(30, 70);
        }).toThrow(new Error(SecondsDifference.ERROR_INVALID_SECONDS_FORMAT));
    })

    it('should calculate correct discount for hours when to is higher than from', () => {
        let difference = SecondsDifference.between(54, 59);
        expect(difference.getMinuteDiscount()).toBe(0);
    })

    it('should calculate correct discount for hours when to is lower than from', () => {
        let difference = SecondsDifference.between(59, 45);
        expect(difference.getMinuteDiscount()).toBe(-1);
    })
});

describe('MinutesDifference', ()=> {
    it('should be created succesfully', () => {
        let difference = MinutesDifference.between(54, 59);
        expect(difference).toBeInstanceOf(MinutesDifference);
    })

    it('should calculate difference between numbers when to is higher than from', () => {
        let difference = MinutesDifference.between(54, 59);
        expect(difference.minutesDifference()).toBe(5);
    })

    it('should calculate difference between numbers when to is lower than from', () => {
        let difference = MinutesDifference.between(54, 30);
        expect(difference.minutesDifference()).toBe(36);
    })

    it('should throw an error when from has not minutes format', () => {
        expect(() => {
            MinutesDifference.between(70, 30);
        }).toThrow(new Error(MinutesDifference.ERROR_INVALID_MINUTES_FORMAT));
    })

    it('should throw an error when to has not minutes format', () => {
        expect(() => {
            MinutesDifference.between(30, 70);
        }).toThrow(new Error(MinutesDifference.ERROR_INVALID_MINUTES_FORMAT));
    })


    it('should calculate correct discount for hours when to is higher than from', () => {
        let difference = MinutesDifference.between(54, 59);
        expect(difference.getHourDiscount()).toBe(0);
    })

    it('should calculate correct discount for hours when to is lower than from', () => {
        let difference = MinutesDifference.between(59, 45);
        expect(difference.getHourDiscount()).toBe(-1);
    })

    it('should calculate correct discount for hours when to is higher than from and seconds provide a discount', () => {
        let difference = MinutesDifference.betweenWithSecondsDifference(40, 45, SecondsDifference.between(45,40));
        expect(difference.minutesDifference()).toBe(4);
    })

    it('should calculate correct discount for hours when to is lower than from and seconds provide a discount', () => {
        let difference = MinutesDifference.betweenWithSecondsDifference(59, 45, SecondsDifference.between(45,40));
        expect(difference.minutesDifference()).toBe(45);
    })
})

describe('HoursDifference', ()=> {
    it('should be created succesfully', () => {
        let difference = HoursDifference.between(20, 22);
        expect(difference).toBeInstanceOf(HoursDifference);
    })

    it('should calculate difference between numbers when to is higher than from', () => {
        let difference = HoursDifference.between(20, 22);
        expect(difference.hoursDifference()).toBe(2);
    })

    it('should calculate difference between numbers when to is lower than from', () => {
        let difference = HoursDifference.between(22, 17);
        expect(difference.hoursDifference()).toBe(19);
    })

    it('should throw an error when from has not days format', () => {
        expect(() => {
            HoursDifference.between(30, 22);
        }).toThrow(new Error(HoursDifference.ERROR_INVALID_HOURS_FORMAT));
    })

    it('should throw an error when to has not days format', () => {
        expect(() => {
            HoursDifference.between(22, 30);
        }).toThrow(new Error(HoursDifference.ERROR_INVALID_HOURS_FORMAT));
    })

    it('should calculate correct discount for days when to is higher than from', () => {
        let difference = HoursDifference.between(20, 22);
        expect(difference.getDayDiscount()).toBe(0);
    })

    it('should calculate correct discount for days when to is lower than from', () => {
        let difference = HoursDifference.between(22, 11);
        expect(difference.getDayDiscount()).toBe(-1);
    })

    it('should calculate correct discount for days when to is higher than from and minutes provide a discount', () => {
        let difference = HoursDifference.betweenWithMinutesDifference(20, 23, MinutesDifference.between(45,40));
        expect(difference.hoursDifference()).toBe(2);
    })

    it('should calculate correct discount for days when to is lower than from and minutes provide a discount', () => {
        let difference = HoursDifference.betweenWithMinutesDifference(23, 2, MinutesDifference.between(45,40));
        expect(difference.hoursDifference()).toBe(2);
    }) 
});

describe('DaysDifference', ()=> {
    let january: Month;
    beforeEach(()=>{
        january = Year.at(1999).monthByNumber(1);

    });

    it('should be created succesfully', () => {
        let difference = DaysDifference.between(20, january, 22, january);
        expect(difference).toBeInstanceOf(DaysDifference);
    })

    it('should calculate difference between numbers when to is higher than from', () => {
        let difference = DaysDifference.between(20, january, 22, january);
        expect(difference.daysDifference()).toBe(2);
    })

    it('should calculate difference between numbers when to is lower than from', () => {
        let difference = DaysDifference.between(22, january, 17, january);
        expect(difference.daysDifference()).toBe(26);
    })

    it('should throw an error when from has not days format', () => {
        expect(() => {
            DaysDifference.between(30, Year.at(1999).monthByNumber(2), 22, january);
        }).toThrow(new Error(DaysDifference.ERROR_INVALID_DAYS_FORMAT));
    })

    it('should throw an error when to has not days format', () => {
        expect(() => {
            DaysDifference.between(22, january, 30, Year.at(1999).monthByNumber(2));
        }).toThrow(new Error(DaysDifference.ERROR_INVALID_DAYS_FORMAT));
    })

    it('should calculate correct discount for days when to is higher than from', () => {
        let difference = DaysDifference.between(20, january, 22, january);
        expect(difference.getMonthDiscount()).toBe(0);
    })

    it('should calculate correct discount for days when to is lower than from', () => {
        let difference = DaysDifference.between(22, january, 11, january);
        expect(difference.getMonthDiscount()).toBe(-1);
    })

    it('should calculate correct discount for days when to is higher than from and hours provide a discount', () => {
        let difference = DaysDifference.betweenWithHoursDifference(20, january, 23, january, HoursDifference.between(23,11));
        expect(difference.daysDifference()).toBe(2);
    })

    it('should calculate correct discount for days when to is lower than from and hours provide a discount', () => {
        let difference = DaysDifference.betweenWithHoursDifference(23, january, 2, january, HoursDifference.between(23,11));
        expect(difference.daysDifference()).toBe(9);
    }) 
 
});

describe('MonthsDifference', ()=> {
    let january: Month;
    let march: Month;
    beforeEach(()=>{
        january = Year.at(1999).monthByNumber(1);
        march = Year.at(1999).monthByNumber(3);
    });
    it('should be created succesfully', () => {
        let difference = MonthsDifference.between(january, march);
        expect(difference).toBeInstanceOf(MonthsDifference);
    })

    it('should calculate difference between numbers when to is higher than from', () => {
        let difference = MonthsDifference.between(january, march);
        expect(difference.monthsDifference()).toBe(2);
    })

    it('should calculate difference between numbers when to is lower than from', () => {
        let difference = MonthsDifference.between(march, january);
        expect(difference.monthsDifference()).toBe(10);
    })

    it('should calculate correct discount for months when to is higher than from', () => {
        let difference = MonthsDifference.between(january, march);
        expect(difference.getYearDiscount()).toBe(0);
    })

    it('should calculate correct discount for months when to is lower than from', () => {
        let difference = MonthsDifference.between(march, january);
        expect(difference.getYearDiscount()).toBe(-1);
    })

    it('should calculate correct discount for months when to is higher than from and days provide a discount', () => {
        let difference = MonthsDifference.betweenWithDaysDifference(january, march, DaysDifference.between(23, january, 2, march));
        expect(difference.monthsDifference()).toBe(1);
    })

    it('should calculate correct discount for months when to is lower than from and days provide a discount', () => {
        let difference = MonthsDifference.betweenWithDaysDifference(march, january, DaysDifference.between(23, january, 2, march));
        expect(difference.monthsDifference()).toBe(9);
    }) 

});

describe('YearsDifference', ()=> {

    it('should be created succesfully', () => {
        let difference = YearsDifference.between(Year.at(1999), Year.at(2001));
        expect(difference).toBeInstanceOf(YearsDifference);
    })

    it('should calculate difference between years', () => {
        let difference = YearsDifference.between(Year.at(1999), Year.at(2001));
        expect(difference.yearsDifference()).toBe(2);
    })

    it('should throw error when from is higher than to', () => {
        expect(() => {
            YearsDifference.between(Year.at(2001), Year.at(1999));
        }).toThrow(new Error(YearsDifference.ERROR_FROMYEAR_HIGHER_THAN_TOYEAR));
    })

    it('should calculate correct discount for years when months provide a discount', () => {
        let difference = YearsDifference.betweenWithMonthsDifference(Year.at(1999), Year.at(2001), MonthsDifference.between(Year.at(1999).monthByNumber(4), Year.at(2001).monthByNumber(1)));
        expect(difference.yearsDifference()).toBe(1);
    })

});
