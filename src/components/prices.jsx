import React, { Component } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

class Prices extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="fluid-container d-flex flex-row">
          <div className="col-lg-4">
            <img
              src="https://placeholder.com/wp-content/uploads/2019/06/stock-images.png"
              class="img-fluid"
              alt="Responsive image"
            ></img>
          </div>
          <div className="col-lg-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            reprehenderit unde perspiciatis ipsa error atque enim accusamus, ab,
            repellat deleniti quibusdam quo corrupti recusandae qui ea beatae
            eos sed impedit. Incidunt consequuntur voluptatem velit nemo ipsam
            eum esse perferendis voluptatum, a illo fugiat iusto harum eligendi
          </div>
        </div>

        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="Table #1">
            <h3>Table #1 Content</h3>
          </Tab>
          <Tab eventKey="2" title="Table #2">
            <h3>Table #2 Content</h3>
          </Tab>
          <Tab eventKey="3" title="Table #3">
            <h3>Table #3 Content</h3>
          </Tab>
          <Tab eventKey="4" title="Table #4">
            <h3>Table #4 Content</h3>
          </Tab>
          <Tab eventKey="5" title="Table #5">
            <h3>Table #5 Content</h3>
          </Tab>
        </Tabs>
      </React.Fragment>
    );
  }
}

export default Prices;
