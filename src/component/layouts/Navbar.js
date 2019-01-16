import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SingedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-1">
      <div className="container">
        <Link to="/" className="brand-logo left">
          Project Manager
        </Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  );
};

export default Navbar;
