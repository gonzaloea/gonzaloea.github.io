import { Month } from "./month";
import { Year } from "./year";

export class TimeInterval {
    static readonly ERROR_INVALID_INTERVAL : string = "Invalid dates interval";

    private from: Date;
    private to: Date;
    private timeDifference: TimeDifference;

    static between(from: Date, to: Date) : TimeInterval {
        this.assertToAfterFrom(from, to);
        return new this(from, to);
    }

    static  assertToAfterFrom(from: Date, to: Date) {
        if (from > to) throw new Error(TimeInterval.ERROR_INVALID_INTERVAL);
    }

    private constructor(from: Date, to: Date) {
        this.from = from;
        this.to = to;
        this.timeDifference = new TimeDifference(from, to);
    }

    public yearsDifference() : number {
        return this.timeDifference.yearsDifference();
    }

    public monthsDifference() : number {
        return this.timeDifference.monthsDifference();
    }

    public daysDifference() : number {
        return this.timeDifference.daysDifference();
    }

    public hoursDifference() : number {
        return this.timeDifference.hoursDifference();
    }

    public minutesDifference() : number {
        return this.timeDifference.minutesDifference();
    }

    public secondsDifference() : number {
        return this.timeDifference.secondsDifference();
    }

}

export class TimeDifference {
    private years: YearsDifference;
    private months: MonthsDifference;
    private days: DaysDifference;
    private hours: HoursDifference;
    private minutes: MinutesDifference;
    private seconds: SecondsDifference;

    constructor(from: Date, to: Date) {
        let yearFrom = Year.at(from.getFullYear());
        let monthFrom = yearFrom.monthByNumber(from.getMonth());
        let yearTo = Year.at(to.getFullYear());
        let monthTo = yearTo.monthByNumber(to.getMonth());
        this.seconds = SecondsDifference.between(from.getSeconds(), to.getSeconds());
        this.minutes = MinutesDifference.betweenWithSecondsDifference(from.getMinutes(), to.getMinutes(), this.seconds);
        this.hours = HoursDifference.betweenWithMinutesDifference(from.getHours(), to.getHours(), this.minutes);
        this.days = DaysDifference.betweenWithHoursDifference(from.getDate(), monthFrom, to.getDate(), monthTo, this.hours);
        this.months = MonthsDifference.betweenWithDaysDifference(monthFrom, monthTo, this.days);
        this.years = YearsDifference.betweenWithMonthsDifference(yearFrom, yearTo, this.months);
    }

    public yearsDifference(): number {
        return this.years.yearsDifference();
    }

    public monthsDifference(): number {
        return this.months.monthsDifference();
    }

    public daysDifference(): number {
        return this.days.daysDifference();
    }

    public hoursDifference(): number {
        return this.hours.hoursDifference();
    }

    public minutesDifference(): number {
        return this.minutes.minutesDifference();
    }

    public secondsDifference(): number {
        return this.seconds.secondsDifference();
    }
}

export class SecondsDifference {
    static readonly MIN_SECONDS: number = 0;
    static readonly MAX_SECONDS: number = 60;
    static readonly DEFAULT: SecondsDifference = new SecondsDifference(0,0);

    private from: number;
    private to: number;
    static readonly ERROR_INVALID_SECONDS_FORMAT: string = "The seconds should be a number between 0 and 59";

    static between(from: number, to: number){
        this.assertIsSeconds(from);
        this.assertIsSeconds(to);
        return new this(from, to);
    }

    static assertIsSeconds(seconds: number) {
        if(seconds < this.MIN_SECONDS || seconds >= this.MAX_SECONDS ) throw new Error(this.ERROR_INVALID_SECONDS_FORMAT);
    }

    constructor(from: number, to: number){
        this.from = from;
        this.to = to;
    }

    private difference() :number {
        return this.to - this.from;
    }

    public secondsDifference() : number{
        let difference = this.difference();
        if(difference < 0){
            return SecondsDifference.MAX_SECONDS + difference;
        }
        return difference;
    }

    public getMinuteDiscount(): number {
        let difference = this.difference();
        if(difference < 0){
            return -1;
        }
        return 0;
    }

}

export class MinutesDifference {
    static readonly MIN_MINUTES: number = 0;
    static readonly MAX_MINUTES: number = 60;
    static readonly DEFAULT: MinutesDifference = new MinutesDifference(0,0, SecondsDifference.DEFAULT);

    private from: number;
    private to: number;
    private secondsDifference: SecondsDifference;
    static readonly ERROR_INVALID_MINUTES_FORMAT: string = "The minutes should be a number between 0 and 59";

    static betweenWithSecondsDifference(from: number, to: number, secondsDifference: SecondsDifference){
        this.assertIsMinutes(from);
        this.assertIsMinutes(to);
        return new this(from, to, secondsDifference);
    }

    static between(from: number, to: number){
        this.assertIsMinutes(from);
        this.assertIsMinutes(to);
        return new this(from, to, SecondsDifference.DEFAULT);
    }


    static assertIsMinutes(minutes: number) {
        if(minutes < this.MIN_MINUTES || minutes >= this.MAX_MINUTES ) throw new Error(this.ERROR_INVALID_MINUTES_FORMAT);
    }

    constructor(from: number, to: number, secondsDifference: SecondsDifference ){
        this.from = from;
        this.to = to;
        this.secondsDifference = secondsDifference;
    }

    private difference() :number {
        return this.to - this.from + this.secondsDifference.getMinuteDiscount();
    }

    public minutesDifference() : number{
        let difference = this.difference();
        if(difference < 0){
            return MinutesDifference.MAX_MINUTES + difference;
        }
        return difference;
    }

    public getHourDiscount(): number {
        let difference = this.difference();
        if(difference < 0){
            return -1;
        }
        return 0;
    }
}


export class HoursDifference {
    static readonly MIN_HOURS: number = 0;
    static readonly MAX_HOURS: number = 24;
    static readonly DEFAULT: HoursDifference = new HoursDifference(0,0, MinutesDifference.DEFAULT);

    private from: number;
    private to: number;
    private minutesDifference: MinutesDifference;
    static readonly ERROR_INVALID_HOURS_FORMAT: string = "The hours should be a number between 0 and 23";

    static betweenWithMinutesDifference(from: number, to: number, minutesDifference: MinutesDifference){
        this.assertIsHours(from);
        this.assertIsHours(to);
        return new this(from, to, minutesDifference);
    }

    static between(from: number, to: number){
        this.assertIsHours(from);
        this.assertIsHours(to);
        return new this(from, to, MinutesDifference.DEFAULT);
    }

    static assertIsHours(hours: number) {
        if(hours < this.MIN_HOURS || hours >= this.MAX_HOURS ) throw new Error(this.ERROR_INVALID_HOURS_FORMAT);
    }

    constructor(from: number, to: number, minutesDifference: MinutesDifference ){
        this.from = from;
        this.to = to;
        this.minutesDifference = minutesDifference;
    }

    private difference() :number {
        return this.to - this.from + this.minutesDifference.getHourDiscount();
    }

    public hoursDifference() : number{
        let difference = this.difference();
        if(difference < 0){
            return HoursDifference.MAX_HOURS + difference;
        }
        return difference;
    }

    public getDayDiscount(): number {
        let difference = this.difference();
        if(difference < 0){
            return -1;
        }
        return 0;
    }
}

export class DaysDifference {
    static readonly MIN_DAYS: number = 0;
    static readonly DEFAULT: DaysDifference = new DaysDifference(0, Year.at(1900).monthByNumber(1), 0, Year.at(1900).monthByNumber(1), HoursDifference.DEFAULT);
    static readonly ERROR_INVALID_DAYS_FORMAT: string = "The day should be a number between 0 and max day of the month";

    private from: number;
    private monthFrom: Month;
    private to: number;
    private hoursDifference: HoursDifference;


    static betweenWithHoursDifference(from: number, monthFrom: Month, to: number, monthTo: Month, hoursDifference: HoursDifference){
        this.assertIsDays(from, monthFrom);
        this.assertIsDays(to, monthTo);
        return new this(from, monthFrom, to, monthTo, hoursDifference);
    }

    static between(from: number, monthFrom: Month, to: number, monthTo: Month){
        this.assertIsDays(from, monthFrom);
        this.assertIsDays(to, monthTo);
        return new this(from, monthFrom, to, monthTo, HoursDifference.DEFAULT);
    }

    static assertIsDays(days: number, month: Month) {
        if(days < this.MIN_DAYS || days >= month.getMaxDays() ) throw new Error(this.ERROR_INVALID_DAYS_FORMAT);
    }

    constructor(from: number, monthFrom: Month, to: number, monthTo: Month, hoursDifference: HoursDifference ){
        this.from = from;
        this.monthFrom = monthFrom;
        this.to = to;
        this.hoursDifference = hoursDifference;
    }

    private difference() :number {
        return this.to - this.from + this.hoursDifference.getDayDiscount();
    }

    public daysDifference() : number{
        let difference = this.difference();
        if(difference < 0){
            return this.monthFrom.previous().getMaxDays() + difference;
        }
        return difference;
    }

    public getMonthDiscount(): number {
        let difference = this.difference();
        if(difference < 0){
            return -1;
        }
        return 0;
    }
}

export class MonthsDifference {
    static readonly MAX_MONTHS: number = 12;
    static readonly DEFAULT: MonthsDifference = new MonthsDifference(Year.at(1900).monthByNumber(1), Year.at(1900).monthByNumber(1), DaysDifference.DEFAULT);

    private from: Month;
    private to: Month;
    private daysDifference: DaysDifference;


    static betweenWithDaysDifference(from: Month, to: Month, daysDifference: DaysDifference){
        return new this(from, to, daysDifference);
    }

    static between(from: Month, to: Month){
        return new this(from, to, DaysDifference.DEFAULT);
    }

    constructor(from: Month, to: Month, daysDifference: DaysDifference ){
        this.from = from;
        this.to = to;
        this.daysDifference = daysDifference;
    }

    private difference() :number {
        return this.to.numberDifference(this.from) + this.daysDifference.getMonthDiscount();
    }

    public monthsDifference() : number{
        let difference = this.difference();
        if(difference < 0){
            return MonthsDifference.MAX_MONTHS + difference;
        }
        return difference;
    }

    public getYearDiscount(): number {
        let difference = this.difference();
        if(difference < 0){
            return -1;
        }
        return 0;
    }
}

export class YearsDifference {
    static readonly ERROR_FROMYEAR_HIGHER_THAN_TOYEAR: string = "The fromYear must be lower than toYear.";

    private from: Year;
    private to: Year;
    private monthsDifference: MonthsDifference;


    static betweenWithMonthsDifference(from: Year, to: Year, monthsDifference: MonthsDifference){
        this.assertValidRange(from,to);
        return new this(from, to, monthsDifference);
    }

    static assertValidRange(from: Year, to: Year) {
        if(to.difference(from) < 0 ) throw new Error(this.ERROR_FROMYEAR_HIGHER_THAN_TOYEAR);
    }

    static between(from: Year, to: Year){
        this.assertValidRange(from,to);
        return new this(from, to, MonthsDifference.DEFAULT);
    }

    constructor(from: Year, to: Year, monthsDifference: MonthsDifference ){
        this.from = from;
        this.to = to;
        this.monthsDifference = monthsDifference;
    }

    public yearsDifference() : number{
        return this.to.difference(this.from) + this.monthsDifference.getYearDiscount();
    }
}
