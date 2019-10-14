import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import auth from "../services/authService";

class NavBar extends Component {
  state = {
    user: {
      _id: "",
      bag: "",
      email: "",
      isAdmin: "",
      name: ""
    },
    isOpen: false
  };
  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  handleSearch = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div className="fluid-container navv fixed-top bg-emg-blue">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-dark">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink to="/home" className="nav-link">
                    HOME
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className="nav-link">
                    ABOUT US
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/activities" className="nav-link">
                    ACTIVITIES
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/projects" className="nav-link">
                    PROJECTS
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/news" className="nav-link">
                    NEWS & MEDIA
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/career" className="nav-link">
                    CAREER
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" className="nav-link">
                    CONTACT
                  </NavLink>
                </li>
                <li className={this.state.isOpen ? "search open" : "search"}>
                  <input type="search" className="search-box" />
                  <span className="search-button" onClick={this.handleSearch}>
                    <span className="search-icon"></span>
                  </span>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    REGISTER
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    PORTAL
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    EN
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default NavBar;
