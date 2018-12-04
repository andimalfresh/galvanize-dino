import React from "react";

const Header = () => {
  return (
    <div className="header">
      <img
        className="logoImg"
        alt="Galvanize Dinos Logo"
        src={require("../g-dino.png")}
      />
    </div>
  );
};

export default Header;
