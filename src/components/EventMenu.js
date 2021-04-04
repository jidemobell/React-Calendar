import React, { useState, useEffect, useReducer } from "react";
import onClickOutside from "react-onclickoutside";


const EventMenu = ({ open }) => {
  const [allEvents, setAllEvents] = useState(
    JSON.parse(localStorage.getItem("events"))
  );
  const [isOpen, setIsOpen] = useState(open);
  const [eventName, setEventName] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [eventDescription, setEventDescription] = useState("");



  const toggle = () => setIsOpen(false);
  EventMenu.handleClickOutside = () => setIsOpen(false);

  const forceUpdate = useReducer(() => ({}))[1]

  const handleSubmit = (e) => {
    console.log("events in menu", allEvents)
    e.preventDefault();
    let old = allEvents;
    let newEvent = {
      title: eventName,
      date: date.split("-").reverse().join("-"),
      description: eventDescription,
      time,
    };
    old.push(newEvent);
    localStorage.setItem("events", JSON.stringify(old));
    setAllEvents(old);
    forceUpdate()
    toggle();
  };

  useEffect(() => {
    console.log("calling update inside menu");
    localStorage.setItem("events", JSON.stringify(allEvents));
  }, [allEvents, setAllEvents]);

  return (
    <>
      {isOpen && (
        <form
          className="dropdown-menu has-text-danger edit-drop-container"
          id="dropdown-menu"
          role="menu"
          onSubmit={handleSubmit}
        >
          <div className="dropdown-content edit-drop-content pl-2 py-3 pr-4">
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Text input"
                  id="name"
                  defaultValue={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                />
              </div>
            </div>
            <hr className="dropdown-divider" />
            <div className="field">
              <label className="label">Description</label>
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="Textarea"
                  rows="2"
                  id="description"
                  defaultValue={eventDescription}
                  onChange={(e) => setEventDescription(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className="field">
              <label className="label">Date</label>
              <div className="control">
                <input
                  className="input"
                  type="Date"
                  defaultValue={date}
                  onChange={(e) => setDate(e.target.value)}
                  placeholder="Text input"
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Time</label>
              <div className="control">
                <input
                  className="input"
                  id="time"
                  defaultValue={time}
                  type="text"
                  placeholder="Text input"
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link">Submit</button>
              </div>
              <div className="control">
                <button onClick={toggle} className="button is-link is-light">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

EventMenu.prototype = {};

const clickOutsideConfig = {
  handleClickOutside: () => EventMenu.handleClickOutside,
};

export default onClickOutside(EventMenu, clickOutsideConfig);
