import React, { useEffect, useState } from "react"
import { initStorage } from "../data/store"
export const EventsContext = React.createContext()




export const EventsProvider = ({ children }) => {
  const prevEvent = () => {
    console.log(localStorage.getItem("events"))
    if(localStorage.getItem("events") === null){
      initStorage()
    }
     console.log("checked storage", localStorage.getItem("events"))
     return JSON.parse(localStorage.getItem("events"))
  }
  const [events, setEvents] = useState(prevEvent());

  function updateEvents(update) {
     setEvents(update);
     return events
  }

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const defaultContext = {
    events,
    updateEvents
  };

  return (
    <EventsContext.Provider value={defaultContext}>
      {children}
    </EventsContext.Provider>
  );
};