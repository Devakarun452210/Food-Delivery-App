import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <div className="left">
        <span>Deva</span>

        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Agents</a>
      </div>
      <div className="right">
        <a href="">Sign in</a>
        <a href="" className="register">
          Sign up
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
