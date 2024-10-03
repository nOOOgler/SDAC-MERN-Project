import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-custom">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/home">
        BlogIt.
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              SignUp
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              SignIn
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/new">
              New Blog
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
