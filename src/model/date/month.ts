import { Year } from "./year";

export class Month {
    private number: number;
    private maxDays: number;
    protected year: Year;

    constructor(number: number, maxDays: number, year: Year) {
        this.number = number;
        this.maxDays = maxDays;
        this.year = year;
    }


    public getNumber(): number {
        return this.number;
    }

    public getMaxDays(): number{
        return this.maxDays;
    }

    public previous() {
        return this.year.monthByNumber(this.number -1);
    }

    public next() {
        return this.year.monthByNumber(this.number +1);
    }

    public numberDifference(month: Month){
        return this.getNumber() - month.getNumber();
    }
}



export class January extends Month {
    constructor(year: Year){
        super(1, 31, year);
    }

    public override previous() {
        return this.year.previous().monthByNumber(12);
    }

}

export class December extends Month {

    constructor(year: Year){
        super(12, 31, year);
    }

    public override next() {
        return this.year.next().monthByNumber(1);
    }
    
}




