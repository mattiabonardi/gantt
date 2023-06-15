export interface CalendarProps {
  viewMode?: ViewMode;
  dateRange: DateRange;
  /** styling options */
  style: {
    height?: number;
    columnSize?: number;
  };
}

export interface DateRange {
  from: Date;
  to: Date;
}

export enum ViewMode {
  YEAR,
  MONTH,
  DAY,
}
