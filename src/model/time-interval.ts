import { ThisReceiver } from "@angular/compiler";

export class TimeInterval {
    static readonly ERROR_INVALID_INTERVAL = "Invalid dates interval";

    private from: Date;
    private to: Date;


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
    }

    public yearsDifference() : number {
        return this.to.getFullYear() - this.from.getFullYear();
    }

    public monthsDifference() : number {
        return (this.yearsDifference() * 12) + (this.to.getMonth() - this.from.getMonth());
    }

}


