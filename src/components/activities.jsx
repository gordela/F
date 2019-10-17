import React, { Component } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ActivitiesIndex from "./activitiesIndex";
import Prices from "./prices";
import Services from "./services";
import highway from "../res/highway.png";
import cooling from "../res/cooling.png";

class Activities extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav className="container pt-8">
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <a
              className="nav-item nav-link nav-link-emg active"
              id="nav-home-tab"
              data-toggle="tab"
              href="#nav-home"
              role="tab"
              aria-controls="nav-governance"
              aria-selected="true"
            >
              MARKETS
            </a>
            <a
              className="nav-item nav-link nav-link-emg"
              id="nav-strategic-vision-tab"
              data-toggle="tab"
              href="#nav-strategic-vision"
              role="tab"
              aria-controls="nav-strategic-vision"
              aria-selected="false"
            >
              SERVICES
            </a>
            <a
              className="nav-item nav-link nav-link-emg"
              id="nav-quality-and-permits-tab"
              data-toggle="tab"
              href="#nav-quality-and-permits"
              role="tab"
              aria-controls="nav-quality-and-permits"
              aria-selected="false"
            >
              PRICES
            </a>
          </div>
        </nav>
        {/* NAV END */}
        <div className="tab-content" id="nav-tabContent">
          <div
            className="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <div className="container">
              <h1 className="currentPageTitle">ACTIVITIES</h1>
              <h5 className="color-emg pb-4">FIELD OF ACTIVITIES</h5>
            </div>
            <div className="fluid-container highlight p-3">
              <div className="container">
                <h5 className="pt-2 pb-2">
                  COMPANY ACTIVITY SECTORS AND INDUSTRIES
                </h5>
                <div className="row">
                  <div className="col-sm-6 col-md-3  p-1  ">
                    <div className="row justify-content-center">
                      <img
                        src="img/highway.png"
                        className="img-fluid align-self-center"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3  p-1  ">
                    <div className="row justify-content-center">
                      <img
                        src="img/cooling.png"
                        className="img-fluid align-self-center"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3  p-1  ">
                    <div className="row justify-content-center">
                      <img
                        src="img/railway.png"
                        className="img-fluid align-self-center"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3  p-1  ">
                    <div className="row justify-content-center">
                      <img
                        src="img/water.png"
                        className="img-fluid align-self-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-strategic-vision"
            role="tabpanel"
            aria-labelledby="nav-strategic-vision-tab"
          >
            <div className="container">
              <h1 className="currentPageTitle">ACTIVITIES</h1>
              <h5 className="color-emg pb-4">SERVICES</h5>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <h6>SHORT DESCRIPTION</h6>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Totam quibusdam aspernatur minus assumenda voluptate,
                    voluptatibus explicabo, deserunt provident quis ipsa placeat
                    numquam nobis quam ratione vel atque velit voluptatem ullam.
                    Quae, eum. Dolores aperiam debitis, cupiditate, repellendus
                    ab officia dolor quae tempora, voluptatem blanditiis nihil
                    voluptas quas? Est dolore molestiae omnis asperiores porro
                    facere possimus! Saepe suscipit sint ipsam nisi! Impedit,
                    cum asperiores ipsam eius beatae nobis, inventore minima
                    cumque est omnis tempora eveniet aperiam explicabo maxime.
                    Est eum iusto voluptas? Nesciunt corporis tenetur non natus
                    quos saepe perspiciatis
                  </p>
                </div>
                <div className="col-6">
                  <img
                    src="http://emg.ge/wp-content/uploads/2018/11/struktura.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <h6>LIST OF SERVICES</h6>
              <div className="row">
                <div className="col-6">
                  <div className="col" style={{ height: "50vh" }}>
                    <div className="row border border-dark m-2 h-50 justify-content-center">
                      <h3 className="color-emg ">
                        <img
                          src="/img/11.png"
                          alt=""
                          className="img-fluid p-1"
                        />
                        Inspection
                      </h3>
                    </div>
                    <div className="row border border-dark m-2 h-50 justify-content-center ">
                      <h3 className="color-emg ">
                        <img
                          src="/img/11.png"
                          alt=""
                          className="img-fluid p-1"
                        />
                        Inspection
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-6" style={{ height: "50vh" }}>
                  <div className="row border border-dark m-2 h-25 justify-content-center ">
                    <h3 className="color-emg ">
                      <img src="/img/11.png" alt="" className="img-fluid p-1" />
                      Inspection
                    </h3>
                  </div>
                  <div className="row border border-dark m-2 h-75 justify-content-center">
                    <h3 className="color-emg ">
                      <img src="/img/11.png" alt="" className="img-fluid p-1" />
                      Inspection
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="nav-quality-and-permits"
            role="tabpanel"
            aria-labelledby="nav-quality-and-permits-tab"
          >
            <div className="container">
              <h1 className="currentPageTitle ">ACTIVITIES</h1>
              <h5 className="color-emg pb-4">PRICES</h5>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <h6>SHORT DESCRIPTION</h6>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Totam quibusdam aspernatur minus assumenda voluptate,
                    voluptatibus explicabo, deserunt provident quis ipsa placeat
                    numquam nobis quam ratione vel atque velit voluptatem ullam.
                    Quae, eum. Dolores aperiam debitis, cupiditate, repellendus
                    ab officia dolor quae tempora, voluptatem blanditiis nihil
                    voluptas quas? Est dolore molestiae omnis asperiores porro
                    facere possimus! Saepe suscipit sint ipsam nisi! Impedit,
                    cum asperiores ipsam eius beatae nobis, inventore minima
                    cumque est omnis tempora eveniet aperiam explicabo maxime.
                    Est eum iusto voluptas? Nesciunt corporis tenetur non natus
                    quos saepe perspiciatis
                  </p>
                </div>
                <div className="col-6">
                  <img
                    src="http://emg.ge/wp-content/uploads/2018/11/struktura.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Activities;
