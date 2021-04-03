import React, { useState, useContext } from "react";
import { EventsContext } from "./HOC/EventProvider";
import Body from "./components/Body";
import AddEvent from "./components/AddEvent";
import moment from "moment";
import "bulma/css/bulma.css";
import "bulma-calendar/dist/css/bulma-calendar.min.css";

function App() {
  const { events } = useContext(EventsContext);
  const [now, setNow] = useState(moment());
  const [month, setMonth] = useState(now.format("MMMM YYYY"));
  const [daysInMonth] = useState(null);
  const [allEvents,] = useState(events);



  const handleBackClick = (e) => {
    e.preventDefault();
    setNow(now.subtract(1, "month"));
    setMonth(now.format("MMMM YYYY"));
  };

  function handleFrontClick(e) {
    e.preventDefault();
    setNow(now.add(1, "month"));
    setMonth(now.format("MMMM YYYY"));
  }

  function handleCurrentClick(e) {
    e.preventDefault();
    setNow(moment());
    setMonth(now.format("MMMM YYYY"));
  }


  return (
    <div>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">{""}</a>
          <button className="button navbar-burger">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="navbar-start">
          <div className="navbar-item">
            <div className="control is-flex is-flex-direction-row">
              <strong>
                <span className="all-months has-text-danger">
                  <p className="title">{month}</p>
                </span>
                <span className="all-years"></span>
              </strong>
              {/* <button class="button is-light">Light</button> */}
              <div className="ml-5">
                {" "}
                <AddEvent  />{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <a className="button is-primary"  onClick={handleBackClick}>
                  <i className="fa fa-arrow-circle-left" aria-hidden="true"></i>
                </a>
              </p>
              <p className="control">
                <a
                  className="button is-primary current-month"
                  onClick={handleCurrentClick}
                >
                  Current Month
                </a>
              </p>
              <p className="control">
                <a
                  className="button is-primary next-month"
                  onClick={handleFrontClick}
                >
                  <i
                    className="fa fa-arrow-circle-right"
                    aria-hidden="true"
                  ></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </nav>
      <Body 
        now={now} 
        daysInMonth={daysInMonth} 
        eventsData={allEvents}  
        
      />
    </div>
  );
}

export default App;
