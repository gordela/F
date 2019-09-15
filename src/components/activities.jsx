import React, { Component } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ActivitiesIndex from "./activitiesIndex";
import Prices from "./prices";
import Services from "./services";
class Activities extends Component {
  state = {};
  render() {
    return (
      <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Markets">
          <ActivitiesIndex></ActivitiesIndex>
        </Tab>
        <Tab eventKey="services" title="Services">
          <Services></Services>
        </Tab>
        <Tab eventKey="prices" title="Prices">
          <Prices></Prices>
        </Tab>
      </Tabs>
    );
  }
}

export default Activities;
