import ThreeDotMenu from "../assets/icons_FEtask/down.svg";
import Display from "../assets/icons_FEtask/Display.svg";
import { useState } from "react";
const navbarStyle = {
  background: "whitesmoke",
  padding: "0.5rem",
  paddingLeft: "7rem",
};

const navbarItemsStyle = {
  display: "flex",
  alignItems: "center",
  // justifyContent: 'center', // Uncomment if needed
  padding: "0 0.3rem",
  gap: "0.5rem",
  border: "1px solid b",
  color: "black",
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="navbar" style={navbarStyle}>
        <button
          onClick={toggleDropdown}
          style={{
            background: "whitesmoke",
            border: "none",
            padding: "0",
            margin: "0",
            outline: "none",
            boxShadow: "none",
          }}
        >
          <div className="navbar-items" style={navbarItemsStyle}>
            <div>
              <img src={Display} alt="" />
            </div>
            <div>Display</div>
            <div>
              <img src={ThreeDotMenu} alt="" />
            </div>
            {isOpen && (
              <ul className="dropdown-menu">
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
              </ul>
            )}
          </div>
        </button>
      </div>
    </>
  );
};

export default Navbar;
