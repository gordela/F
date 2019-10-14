import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import { getBranches } from "../services/branchService";
import MapGL from "react-map-gl";
import locationImage from "../res/location.png";
import contactImageOne from "../res/ccc1.jpg";
import contactImageTwo from "../res/ccc2.jpg";
import contactImageThree from "../res/ccc3.jpg";

class Contact extends Component {
  state = {
    branches: [],
    style: "mapbox://styles/mapbox/light-v9",
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      longitude: -74,
      latitude: 40.7,
      zoom: 11,
      maxZoom: 16
    }
  };

  async componentDidMount() {
    const { data: branches } = await getBranches();
    this.setState({ branches });
  }
  render() {
    return (
      <React.Fragment>
        <div className="container pt-5">
          <h1 className="currentPageTitle">Contact</h1>

          <div className="row">
            <div className="col-12 ">
              <iframe
                width="100%"
                height="400px"
                frameBorder={0}
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.9221375752163!2d44.74112131543614!3d41.72219897923487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40447310d0442439%3A0x741ac75e14ceafaa!2zOCDhg5nhg5Dhg5rhg5jhg6Hhg6Lhg6Dhg5Dhg6Lhg5Qg4YOl4YOj4YOX4YOQ4YOX4YOU4YOa4YOQ4YOr4YOY4YOhIOGDpeGDo-GDqeGDkCwg4YOX4YOR4YOY4YOa4YOY4YOh4YOYIDAxNzc!5e0!3m2!1ska!2sge!4v1568564871496!5m2!1ska!2sge"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="fluid-container highlight">
            <div className="container ">
              <div className="row justify-content-center">
                <img
                  className="col-sm-12 col-md-4 img-fluid"
                  src={contactImageOne}
                  alt=""
                />
                <img
                  className="col-sm-12 col-md-4 img-fluid"
                  src={contactImageTwo}
                  alt=""
                />
                <img
                  className="col-sm-12 col-md-4 img-fluid"
                  src={contactImageThree}
                  alt=""
                />
              </div>
              <form className="p-4">
                <div className="form-row ">
                  <div className="form-group col-md-6 ">
                    <label htmlFor="inputEmail4" className="color-emg">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputEmail4"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4" className="color-emg">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputPassword4"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="color-emg"
                  >
                    Your Message
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    defaultValue={""}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary emg-button pl-3 pr-3 pt-1 pb-1"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
          <div className="fluid-container">
            <div className="container">
              <h1 className="currentPageTitle">Branches</h1>
              <div className="row">
                <div className="col-12 row">
                  <div className="col-6 col-md-3 row">
                    <img className="location" src={locationImage} alt="" />
                    <div className="column mt-3">
                      <p className="color-emg" style={{ margin: 0 }}>
                        Head office
                      </p>
                      <p>Head office</p>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 row">
                    <img className="location" src={locationImage} alt="" />
                    <div className="column mt-3">
                      <p className="color-emg" style={{ margin: 0 }}>
                        Head office
                      </p>
                      <p>Head office</p>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 row">
                    <img className="location" src={locationImage} alt="" />
                    <div className="column mt-3">
                      <p className="color-emg" style={{ margin: 0 }}>
                        Head office
                      </p>
                      <p>Head office</p>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 row">
                    <img className="location" src={locationImage} alt="" />
                    <div className="column mt-3">
                      <p className="color-emg" style={{ margin: 0 }}>
                        Head office
                      </p>
                      <p>Head office</p>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 row">
                    <img className="location" src={locationImage} alt="" />
                    <div className="column mt-3">
                      <p className="color-emg" style={{ margin: 0 }}>
                        Head office
                      </p>
                      <p>Head office</p>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 row">
                    <img className="location" src={locationImage} alt="" />
                    <div className="column mt-3">
                      <p className="color-emg" style={{ margin: 0 }}>
                        Head office
                      </p>
                      <p>Head office</p>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 row">
                    <img className="location" src={locationImage} alt="" />
                    <div className="column mt-3">
                      <p className="color-emg" style={{ margin: 0 }}>
                        Head office
                      </p>
                      <p>Head office</p>
                    </div>
                  </div>
                  <div className="col-6 col-md-3 row">
                    <img className="location" src={locationImage} alt="" />
                    <div className="column mt-3">
                      <p className="color-emg" style={{ margin: 0 }}>
                        Head office
                      </p>
                      <p>Head office</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
