import React from "react";
import "./navbar.css";
import { AiOutlineSearch } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="nav">
      <div className="company_logo">
        <img src="/assets/logo.svg" alt="windbnd_logo" />
      </div>
      <div className="search">
        <div className="location">Helsinki,Finland</div>
        <div>
          <input placeholder="Add Guest" type="number" className="guest" />
        </div>
        <div className="srch_button">
          <AiOutlineSearch />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
