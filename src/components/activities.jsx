import React, { Component } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
class Activities extends Component {
  state = {};
  render() {
    return (
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab className="emg-a" eventKey="home" title="Markets">
          <h2>Markets</h2>
        </Tab>
        <Tab className="emg-a" eventKey="profile" title="Services">
          <h2>services</h2>
        </Tab>
        <Tab className="emg-a" eventKey="contact" title="Prices">
          <h2>Prices</h2>
        </Tab>
      </Tabs>
    );
  }
}

export default Activities;
