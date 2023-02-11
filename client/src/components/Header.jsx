import React from "react";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="app-header">
        <h1>Note List</h1>
      </div>

      <Outlet />
    </div>
  );
};

export default Header;
