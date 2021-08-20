import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import moment from "moment";

import { buildCalendar } from "./build";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../../redux/reducers/schedule";

const Calendar = () => {
  const dispatch = useDispatch();
  const date = useSelector((state) => state.schedule.date);
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());

  useEffect(() => {
    if (!!date) {
      setValue(moment(date));
    }
  }, []);

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

  const handleClickDate = (day) => {
    setValue(day);
    const date = convertDateToRequest(day);
    dispatch(fetchItems(date));
  };

  const convertDateToRequest = (day) => {
    const format = "YYYY-MM-DD";
    return day.format(format);
  };

  return (
    <div className="calendar">
      <div className="calendar__header">
        <button className="arrow" onClick={() => setValue(prevMonth())}>
          <img src="icons/keyboard_arrow_left.svg" alt="prev month" />
        </button>

        <div>
          {currMonthName()} {currYear()}
        </div>

        <button className="arrow" onClick={() => setValue(nextMonth())}>
          <img src="icons/keyboard_arrow_right.svg" alt="next month" />
        </button>
      </div>
      <div className="calendar__body">
        {calendar.map((week) => (
          <React.Fragment key={week}>
            {week.map((day) => (
              <div
                key={day}
                className={"day" + " " + dayStyles(day)}
                onClick={() => handleClickDate(day)}
              >
                {day.format("D").toString()}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const CalendarContainer = () => {
  const loaded = useSelector((state) => state.schedule.loaded);
  return <>{loaded ? <Redirect to="/schedule" /> : <Calendar />}</>;
};

export { CalendarContainer as Calendar };
