import React, { useState } from "react";
import ThreeDotMenu from "../assets/icons_FEtask/down.svg";
import Display from "../assets/icons_FEtask/Display.svg";

const navbarStyle = {
  background: "whitesmoke",
  padding: "0.5rem",
  paddingLeft: "7rem",
  display: "flex",
  alignItems: "center",
};

const navbarItemsStyle = {
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
  color: "black",
  position: "relative",
};

const Navbar = () => {
  const [groupingValue, setGroupingValue] = useState("status"); 
  const [sortingValue, setSortingValue] = useState("priority"); // Default value

  const handleGroupingChange = (event) => {
    setGroupingValue(event.target.value);
    console.log("Selected grouping:", event.target.value);
  };

  const handleSortingChange = (event) => {
    setSortingValue(event.target.value);
    console.log("Selected sorting:", event.target.value);
  };

  return (
    <div className="navbar" style={navbarStyle}>
      <div className="navbar-items" style={navbarItemsStyle}>
        <div>
          <img src={Display} alt="Display Icon" />
        </div>
        <div>Display</div>
        <div>
          <img
            src={ThreeDotMenu}
            alt="Dropdown Menu"
            style={{ cursor: "pointer" }}
          />
          <div>
            <select
              name="grouping"
              id="grouping"
              value={groupingValue}
              onChange={handleGroupingChange}
            >
              <option value="status">Status</option>
              <option value="priority">Priority</option>
              <option value="users">Users</option>
            </select>
            <select
              name="sorting"
              id="sorting"
              value={sortingValue}
              onChange={handleSortingChange}
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
