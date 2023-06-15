import { DateRange } from "../types/types";

/**
 * Return an array of date from DateRange
 * @param dateRange 
 * @returns 
 */
export function getDayArrayFromDateRange(dateRange: DateRange) {
  for (
    var arr = [], dt = new Date(dateRange.from);
    dt <= new Date(dateRange.to);
    dt.setDate(dt.getDate() + 1)
  ) {
    arr.push(new Date(dt));
  }
  return arr;
}
