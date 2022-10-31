import { Month } from "./month";
import { LeapYearMonths, YearMonths } from "./year-months";

export class Year {
    protected number: number;
    protected yearMonths: YearMonths;

    public static at(number: number) : Year {
        if(number % 4 === 0 ) return new LeapYear(number);
        return new this(number);
    }

    protected constructor(number: number){
        this.number = number;
        this.yearMonths = new YearMonths(this);
    }

    public monthByNumber(number: number) : Month{
        return this.yearMonths.monthByNumber(number);
    }

    public isLeap() {
        return false;
    }

    public next() {
        return Year.at(this.number + 1);
    }

    public previous() {
        return Year.at(this.number - 1);
    }

    public difference(year: Year): number {
        return this.number - year.number;
    }
}

class LeapYear extends Year{
    constructor(number: number){
        super(number);
        this.yearMonths = new LeapYearMonths(this);
    }

    public override isLeap() {
        return true;
    }

}