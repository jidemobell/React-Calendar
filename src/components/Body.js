import React, { useState, useEffect } from "react";
import moment from "moment";
import Header from "./Header";

function Body(props) {
  const [rows] = useState([
    "row-one",
    "row-two",
    "row-three",
    "row-four",
    "row-five",
    "row-six",
  ]);
  const [days] = useState([0, 1, 2, 3, 4, 5, 6]);

  let { daysInMonth, now, eventsData } = props;
  let k = 0,
    d = 0,
    dattr;

  daysInMonth = now.daysInMonth();
  const today = moment(new Date().getTime()).format("D-MM-YYYY");
  let firstDayWeek = now.startOf("month").weekday();
  let parsedEvents = JSON.parse(eventsData);

  const eventDates = parsedEvents.map((x) => x.date);
  console.log(eventDates);
  return (
    <div>
      <table className="table is-bordered is-hoverable has-background-white-bis">
        <Header />
        <tbody>
          {rows.map((row, i) => {
            let j = firstDayWeek;
            return (
              <tr key={`row ${i}`} className={row}>
                {days.map((day, l) => {
                  if (j === 6) {
                    j = 0;
                  } else {
                    j++;
                  }
                  return (
                    <td
                      key={`row_${i}-day${j}`}
                      name={`row_${i}-day${j}`}
                      data-day={
                        l === firstDayWeek && i === 0
                          ? ""
                          : (i === 0 && l > firstDayWeek) ||
                            (i !== 0 && d <= daysInMonth - 1)
                          ? (dattr = now
                              .startOf("month")
                              .add(d++, "days")
                              .format("D-MM-YYYY"))
                          : (dattr = undefined)
                      }
                      className={
                        eventDates.includes(dattr) ? "time-capsule" : ""
                      }
                    >
                      {!(dattr === undefined) ? (
                        eventDates.includes(dattr) ? (
                          <div className=" is-flex is-flex-direction-column">
                            <span
                              className={
                                today === dattr
                                  ? "checked is-size-7"
                                  : "is-size-7"
                              }
                            >
                              {dattr.split("-")[0]}
                            </span>
                            <span className="is-size-5">Meeting</span>
                            <span className="is-size-7">
                              {parsedEvents.find((e) => e.date === dattr).title}
                            </span>
                            <span className="is-size-4">
                              {parsedEvents.find((e) => e.date === dattr).time}
                            </span>
                          </div>
                        ) : (
                          <span className="is-size-7">
                            {dattr.split("-")[0]}
                          </span>
                        )
                      ) : (
                        ""
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
  // }
}

export default Body;
