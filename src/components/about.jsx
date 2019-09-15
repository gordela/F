import React, { Component } from "react";
import NavBar from "./navBar";
import { Route, Redirect, Switch } from "react-router-dom";
import AboutIndex from "./aboutIndex";
import Governance from "./aboutGovernance";
import { Link } from "react-router-dom";
import Partners from "./aboutPartners";
import QualityAndPermits from "./aboutQuality";
import StrategicVision from "./strategicVision";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Branches from "./branches";

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

          <Tabs defaultActiveKey="about" id="uncontrolled-tab-example">
            <Tab eventKey="about" title="About">
              <AboutIndex></AboutIndex>
            </Tab>
            <Tab eventKey="governance" title="Governance">
              <Governance></Governance>
            </Tab>
            <Tab eventKey="strategicVision" title="Strategic Vision">
              <StrategicVision></StrategicVision>
            </Tab>
            <Tab eventKey="qualityAndPermits" title="Quality and Permits">
              <QualityAndPermits></QualityAndPermits>
            </Tab>
            <Tab eventKey="training" title="Training"></Tab>
            <Tab eventKey="partners" title="Partners">
              <Partners></Partners>
            </Tab>

            <Tab eventKey="branches" title="Branches">
              <Branches></Branches>
            </Tab>
          </Tabs>
          {/* NAVBAR */}

          {/* /.row */}
        </div>
      </React.Fragment>
    );
  }
}

export default About;
