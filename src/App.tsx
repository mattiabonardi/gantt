import React from "react";
import Calendar from "./components/calendar";
import { CalendarProps } from "./types/types";

function App() {
  const calendarProps: CalendarProps = {
    dateRange: {
      from: new Date("2023-01-01"),
      to: new Date("2023-12-31"),
    },
    style: {},
  };

  return (
    <div className="App">
      <Calendar {...calendarProps}></Calendar>
    </div>
  );
}

export default App;
