import { DatePipe } from "@angular/common";
import { Pipe } from "@angular/core";

@Pipe({
  name: 'communicativeDate',
})
export class CommunicativeDatePipe extends DatePipe{

  override transform(value: Date | string | number, format?: string, timezone?: string, locale?: string): string | null
  override transform(value: null | undefined, format?: string, timezone?: string, locale?: string): null
  override transform(value: Date | string | number | null | undefined, format?: string, timezone?: string, locale?: string): string | null {
    if(value instanceof Date && this.isToday(value as Date)){
      return "now"
    }
    return super.transform(value, format, timezone, locale);
  }

  isToday(date: Date) {
    return new Date().toDateString() === date.toDateString();
  }

}
