import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Google Book Search
      </a>
      <Link to="/saved" className="right nav-link">Your Saved Books</Link>
    </nav>
  );
}

export default Nav;
