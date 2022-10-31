import { December, January, Month } from "./month";
import { Year } from "./year";


export class YearMonths {
    static readonly ERROR_NOT_VALID_MONTH_NUMBER = "The month number should be a number between 1 and 12.";

    protected year: Year;

    private january: Month;  
    private february: Month; 
    private march: Month;    
    private april: Month;    
    private may: Month;      
    private june: Month;     
    private july: Month;     
    private august: Month;   
    private september: Month;
    private october: Month;  
    private november: Month; 
    private december: Month; 

    private months: Month[];


    constructor(year: Year) {
        this.year = year;

        this.january     = this.newJanuary();
        this.february    = this.newFebruary();
        this.march       = this.newMarch();
        this.april       = this.newApril();
        this.may         = this.newMay();
        this.june        = this.newJune();
        this.july        = this.newJuly();
        this.august      = this.newAugust();
        this.september   = this.newSeptember();
        this.october     = this.newOctober();
        this.november    = this.newNovember();
        this.december    = this.newDecember();

        this.months = [
            this.january,
            this.february,
            this.march,
            this.april,
            this.may,
            this.june,
            this.july,
            this.august,
            this.september,
            this.october,
            this.november,
            this.december
        ];
    }

    private assertValidMonthNumber(number: number) {
        if(number<1 || number > 12) throw new Error(YearMonths.ERROR_NOT_VALID_MONTH_NUMBER);
    }

    private newJanuary(): Month {
        return  new January(this.year);
    }

    public newFebruary(): Month {
        return  new Month(2, 28, this.year);
    }

    public newMarch(): Month {
        return  new Month(3, 31, this.year);
    }

    public newApril(): Month {
        return  new Month(4, 30, this.year);
    }

    public newMay(): Month {
        return  new Month(5, 31, this.year);
    }

    public newJune(): Month {
        return  new Month(6, 30, this.year);
    }

    public newJuly(): Month {
        return  new Month(7, 31, this.year);
    }

    public newAugust(): Month {
        return  new Month(8, 31, this.year);
    }

    public newSeptember(): Month {
        return  new Month(9, 30, this.year);
    }

    public newOctober(): Month {
        return  new Month(10, 31, this.year);
    }

    public newNovember(): Month {
        return  new Month(11, 30, this.year);
    }

    public newDecember(): Month {
        return  new December(this.year);
    }

    monthByNumber(number: number): Month {
        this.assertValidMonthNumber(number);
        return this.months[number-1];
    }
}

export class LeapYearMonths extends YearMonths{

    public override newFebruary(): Month {
        return  new Month(2, 29, this.year);
    }

}