import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';
import logo from '../images/logo6.png';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
        </div>
        <div className="navbar-nav">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/about">About</Link>
          <Link className="nav-link" to="/education">Education</Link>
          <Link className="nav-link" to="/skills">Skills</Link>
          <Link className="nav-link" to="/experience">Experience</Link>
          <Link className="nav-link" to="/projects">Projects</Link>
          <Link className="nav-link" to="/courses">Courses</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
