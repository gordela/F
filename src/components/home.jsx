import React, { Component } from "react";
import ProjectFlex from "./projectFlex";
import Moment from "moment";
import emgLogo from "../res/logo.png";
import certOne from "../res/ea.jpg";
import certTwo from "../res/gac.png";
import certThree from "../res/powerpoint.png";
import FontAwesome from "react-fontawesome";

class Home extends Component {
  state = {};

  render() {
    const { projects, newss } = this.props;
    return (
      <React.Fragment>
        {/* LOGO */}
        <div className="slider fluid-container row justify-content-center slider">
          <img
            src={emgLogo}
            className="align-self-center img-fluid p-4 logo"
            alt=""
          />
        </div>
        {/* END LOGO */}
        {/* Certs */}
        <div className="container p-3 justify-content-center rounded">
          <hr />
          <div className="align-self-center">
            <a href="#">
              <img src={certOne} className="rounded float-left wt" alt="..." />
            </a>
            <a href="#">
              <img
                src={certThree}
                className="rounded float-right wt"
                alt="..."
              />
            </a>
            <a href="#">
              <img
                src={certTwo}
                className="rounded mx-auto d-block wt"
                alt="..."
              />
            </a>
          </div>
          <hr />
        </div>
        {/* END CERTS */}

        {/* Komentari */}
        <div className="container">
          <h2 className="currentPageTitle">News & Media</h2>
        </div>
        <div class="fluid-container highlight p-5">
          <div class="container card-deck responsive">
            {newss.slice(0, 3).map(news => (
              <div className="card card-emg">
                <img
                  className="card-img-top"
                  src={news.shortImage}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    <span class="inner-shadow-emg">{news.title}</span>
                  </h5>
                  <p className="card-text">{news.shortDesc}</p>
                </div>
                <div className="card-body d-flex justify-content-between">
                  <div>
                    <a href="#" className="card-link color-emg">
                      <FontAwesome className="fab fa-facebook-f"></FontAwesome>
                    </a>
                    <a href="#" className="card-link color-emg">
                      <FontAwesome className="fab fa-twitter"></FontAwesome>
                    </a>
                  </div>
                  <div className="color-emg">
                    {Moment(Date(news.publishDate)).format("MMM Do YYYY")}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container p-3">
          <h2 className="currentPageTitle">Projects</h2>
          <ProjectFlex projects={projects.slice(0, 4)}></ProjectFlex>
          <hr />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
