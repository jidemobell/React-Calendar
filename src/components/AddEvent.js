import React, { useState } from "react";
import EventMenu from "./EventMenu";
// import bulCalendar from "bulma-calendar/dist/js/bulma-calendar"

const AddEvent = () => {
  const [dropView, setDropView] = useState(false);
  
  const toggle = () => setDropView(!dropView); 

  return (
    <div className="dropdown is-active">
      <div className="dropdown-trigger">
        <button
          onClick={toggle}
          className="button  is-light ml-7"
          aria-haspopup="true"
          aria-controls="dropdown-menu2"
        >
          <span>Add Event</span>
        </button>
      </div>
      {dropView && <EventMenu open={dropView} />}
    </div>
  );
};

export default AddEvent;
