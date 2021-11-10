import React from "react";
import { NavLink } from "react-router-dom";

import "./Admin.css";

const Admin = () => {
  return (
    <div>
      <div className="header">
        <NavLink to="/seeall" activeClassName="activeLink">
          All Shiping
        </NavLink>
        <NavLink to="/addservice" activeClassName="activeLink">
          Add Service
        </NavLink>
        <NavLink to="/seeallservice" activeClassName="activeLink">
          See Service
        </NavLink>
      </div>
    </div>
  );
};

export default Admin;
