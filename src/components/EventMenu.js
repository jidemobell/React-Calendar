import React, { useState } from "react";
import onClickOutside from "react-onclickoutside";

const EventMenu = ({ open }) => {
  const [isOpen, setIsOpen] = useState(open);

  const toggle = () => setIsOpen(false); 
  EventMenu.handleClickOutside = () => setIsOpen(false);

  return (
    <>
      {isOpen && (
        <div
          className="dropdown-menu has-text-danger edit-drop-container"
          id="dropdown-menu"
          role="menu"
        >
          <div className="dropdown-content edit-drop-content pl-2 py-3 pr-4">
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input className="input" type="text" placeholder="Text input" />
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
                ></textarea>
              </div>
            </div>
            <div className="field">
              <label className="label">Date</label>
              <div className="control">
                <input className="input" type="Date" placeholder="Text input" />
              </div>
            </div>
            <div className="field">
              <label className="label">Time</label>
              <div className="control">
                <input className="input" type="text" placeholder="Text input" />
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link">Submit</button>
              </div>
              <div className="control">
                <button 
                onClick={toggle}
                className="button is-link is-light">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

EventMenu.prototype = {};

const clickOutsideConfig = {
  handleClickOutside: () => EventMenu.handleClickOutside,
};

export default onClickOutside(EventMenu, clickOutsideConfig);
