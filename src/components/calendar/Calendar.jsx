import { useState, useEffect } from "react";
import moment from "moment";

import { buildCalendar } from "./build";

const Calendar = () => {
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);

  function isSelected(day) {
    return value.isSame(day, "day");
  }

  function isToday(day) {
    return day.isSame(new Date(), "day");
  }

  function isSameMonth(day) {
    return value.isSame(day, "month");
  }

  function dayStyles(day) {
    if (isSelected(day)) return "selected";
    if (isToday(day)) return "today";
    if (!isSameMonth(day)) return "faded";
    return "";
  }

  function currMonthName() {
    return value.format("MMMM");
  }

  function currYear() {
    return value.format("YYYY");
  }

  function prevMonth() {
    return value.clone().subtract(1, "month");
  }

  function nextMonth() {
    return value.clone().add(1, "month");
  }

  return (
    <div className="calendar">
      <div className="calendar__header">
        <button class="arrow" onClick={() => setValue(prevMonth())}>
          <img src="icons/keyboard_arrow_left.svg" alt="prev month" />
        </button>

        <div>
          {currMonthName()} {currYear()}
        </div>

        <button class="arrow" onClick={() => setValue(nextMonth())}>
          <img src="icons/keyboard_arrow_right.svg" alt="next month" />
        </button>
      </div>
      <div className="calendar__body">
        {calendar.map((week) => (
          <>
            {week.map((day) => (
              <div
                className={"day" + " " + dayStyles(day)}
                onClick={() => setValue(day)}
              >
                {day.format("D").toString()}
              </div>
            ))}
          </>
        ))}
      </div>
    </div>
  );
};

export { Calendar };
