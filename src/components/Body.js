import React, { useState } from "react";
import moment from "moment";
import Header from "./Header";

function Body(props) {
  const [rows, setRows] = useState([
    "row-one",
    "row-two",
    "row-three",
    "row-four",
    "row-five",
    "row-six",
  ]);
  const [days, setDays] = useState([0, 1, 2, 3, 4, 5, 6]);

  const [eventData, setEventData] = useState([
    {
      title: "Estonia Jazz Fest",
      date: "27-12-2017",
      description: "Annual Estonia Jazz festival",
    },
    {
      title: "Tallin Java Meetup",
      date: "1-1-2018",
      description: "A hangout for Java Devs",
    },
  ]);

  let { daysInMonth, now } = props;
  let k = 0;
  daysInMonth = now.daysInMonth();
  let firstDayWeek = now.startOf("month").weekday();

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
                    <td key={`row_${i}-day${j}`} name={`row_${i}-day${j}`}>
                      {l === firstDayWeek && i === 0
                        ? ""
                        : (i === 0 && l > firstDayWeek) ||
                          (i !== 0 && k <= daysInMonth - 1)
                        ? now
                            .startOf("month")
                            .add(k++, "days")
                            .format("D")
                        : ""}
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
