import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

const Header = () => {
  let [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(document.querySelector(".container") !== null);
  }, []);

  let changeMode = () => {
    const div = document.querySelector(".container");
    div.classList.toggle("dark");
    setIsDark(!isDark);
  };
  return (
    <div>
      <div className="app-header">
        <h1>Note List</h1>
        {isDark ? (
          <span className="mode-icon" onClick={changeMode}>
            Light Mode
          </span>
        ) : (
          <span className="mode-icon" onClick={changeMode}>
            Dark Mode
          </span>
        )}
      </div>

      <Outlet />
    </div>
  );
};

export default Header;
