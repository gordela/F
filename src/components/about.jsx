import React, { Component } from "react";
import NavBar from "./navBar";
import { Route, Redirect, Switch } from "react-router-dom";
import AboutIndex from "./aboutIndex";
import Governance from "./aboutGovernance";
import { NavLink, Link } from "react-router-dom";

class About extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="fluid-container">
          <img src="http://emg.ge/wp-content/themes/emg/images/header-bg.jpg"></img>
        </div>
        <div className="container">
          {/* Page Heading/Breadcrumbs */}
          {/* NAVBAR */}
          <div className="submenu-main hide-small">
            <div className="widthControl">
              <ul className="submenu-items clearfix">
                <li className="menu-item menu-item-type-post_type menu-item-object-page">
                  <NavLink to="/about/governance" className="nav-link">
                    Governance
                  </NavLink>
                </li>
                <li className=" menu-item menu-item-type-post_type menu-item-object-page">
                  <a
                    href="http://emg.ge/%e1%83%a9%e1%83%95%e1%83%94%e1%83%9c-%e1%83%a8%e1%83%94%e1%83%a1%e1%83%90%e1%83%ae%e1%83%94%e1%83%91/%e1%83%a1%e1%83%a2%e1%83%a0%e1%83%90%e1%83%a2%e1%83%94%e1%83%92%e1%83%98%e1%83%a3%e1%83%9a%e1%83%98-%e1%83%ae%e1%83%94%e1%83%93%e1%83%95%e1%83%90/"
                    data-text="სტრატეგიული ხედვა"
                  >
                    Strategic Vision
                  </a>
                </li>
                <li className=" menu-item menu-item-type-post_type menu-item-object-page">
                  <a
                    href="http://emg.ge/%e1%83%a9%e1%83%95%e1%83%94%e1%83%9c-%e1%83%a8%e1%83%94%e1%83%a1%e1%83%90%e1%83%ae%e1%83%94%e1%83%91/quality-and-permits/"
                    data-text="ხარისხი და ნებართვა"
                  >
                    Quality and permits
                  </a>
                </li>
                <li className=" menu-item menu-item-type-post_type menu-item-object-page">
                  <a
                    href="http://emg.ge/%e1%83%a9%e1%83%95%e1%83%94%e1%83%9c-%e1%83%a8%e1%83%94%e1%83%a1%e1%83%90%e1%83%ae%e1%83%94%e1%83%91/%e1%83%9b%e1%83%93%e1%83%94%e1%83%91%e1%83%90%e1%83%a0%e1%83%94%e1%83%9d%e1%83%91%e1%83%90/"
                    data-text="ფილიალები"
                  >
                    Training
                  </a>
                </li>
                <li className=" menu-item menu-item-type-post_type menu-item-object-page">
                  <a
                    href="http://emg.ge/%e1%83%a9%e1%83%95%e1%83%94%e1%83%9c-%e1%83%a8%e1%83%94%e1%83%a1%e1%83%90%e1%83%ae%e1%83%94%e1%83%91/%e1%83%a2%e1%83%a0%e1%83%94%e1%83%9c%e1%83%98%e1%83%9c%e1%83%92%e1%83%98/"
                    data-text="ტრენინგი"
                  >
                    Partners
                  </a>
                </li>
                <li className=" menu-item menu-item-type-post_type menu-item-object-page">
                  <a
                    href="http://emg.ge/%e1%83%a9%e1%83%95%e1%83%94%e1%83%9c-%e1%83%a8%e1%83%94%e1%83%a1%e1%83%90%e1%83%ae%e1%83%94%e1%83%91/%e1%83%9e%e1%83%90%e1%83%a0%e1%83%a2%e1%83%9c%e1%83%98%e1%83%9d%e1%83%a0%e1%83%94%e1%83%91%e1%83%98/"
                    data-text="პარტნიორები"
                  >
                    Branches
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* NAVBAR */}
          {/* SWITCH */}
          <Switch>
            <Route path="/about" exact component={AboutIndex}></Route>
            <Route path="/about/governance" component={Governance}></Route>
          </Switch>
          {/* SWITCH END */}
          {/* /.row */}
        </div>
      </React.Fragment>
    );
  }
}

export default About;
