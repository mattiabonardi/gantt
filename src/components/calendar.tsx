import React from "react";
import { CalendarProps, DateRange, ViewMode } from "../types/types";
import { getDayArrayFromDateRange } from "../utils/dateUtils";

const Calendar: React.FC<CalendarProps> = ({
  viewMode = ViewMode.MONTH,
  dateRange,
  style: { height = 350, columnSize = 50 },
}) => {
  return (
    <React.Fragment>
      <div></div>
    </React.Fragment>
  );
};

const calendarHeader = (dateRange: DateRange, viewMode: ViewMode) => {
  switch (viewMode) {
    case ViewMode.DAY: {
      //      month      |      month
      // day | day | day | day | day | day |
      const dates = getDayArrayFromDateRange(dateRange);
      
    }
  }
};

export default Calendar;
