import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import { getBranches } from "../services/branchService";
import MapGL from "react-map-gl";

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
      <div className="container">
        {/* Page Heading/Breadcrumbs */}
        <h1 className="currentPageTitle mt-4 mb-3">Contact</h1>
        {/* Content Row */}
        <div className="row">
          {/* Map Column */}
          <div className="col-lg-8 mb-4">
            {/* Embedded Google Map */}
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
          {/* Contact Details Column */}
          <div className="col-lg-4 mb-4">
            <h3>Details</h3>
            <p>
              8 Kalistrate Kutateladze
              <br />
              Tbilisi, 0101
              <br />
            </p>
            <p>
              <abbr title="Phone">P</abbr>: (995) 591 59 92 92 / (032) 2 709 709
            </p>
            <p>
              <abbr title="Email">E</abbr>:
              <a href="mailto:name@example.com"> INFO@EMG.GE</a>
            </p>
            <p>
              <abbr title="Hours">H</abbr>: Monday - Friday: 9:00 AM to 6:00 PM
            </p>
          </div>
        </div>
        {/* /.row */}
        {/* Contact Form */}
        {/* In order to set the email address and subject line for the contact form go to the bin/contact_me.php file. */}
        <div className="row">
          <div className="col-lg-4 mb-4">
            <h3>Branches</h3>
            <p>
              66/68 Tamar Mepe St. , Kutaisi
              <br />
            </p>
            <p>
              <abbr title="Phone">P</abbr>: (995) 598 08 78 74 / Lika Katsadze
            </p>
            <hr />
            <p>
              99 Rustaveli Street , Terjola
              <br />
            </p>
            <p>
              <abbr title="Phone">P</abbr>: (995) 599 00 12 94 / Sofo Gureshidze
            </p>
            <hr />

            <p>
              36 G. Nikoladze Street , Zestafoni
              <br />
            </p>
            <p>
              <abbr title="Phone">P</abbr>: (995) 591 04 17 13 / Davit
              Gelbakhiani
            </p>
            <hr />

            <p>
              5 Ninoshvili Street , Chiatura
              <br />
            </p>
            <p>
              <abbr title="Phone">P</abbr>: (995) 591 45 08 81 / Lasha Beridze
            </p>
            <hr />

            <p>
              86 Rustaveli Street , Telavi
              <br />
            </p>
            <p>
              <abbr title="Phone">P</abbr>: (995) 599 13 79 86 / Davit Tsiklauri
            </p>
            <hr />

            <p>
              74 Freedom Street , Tsnori
              <br />
            </p>
            <p>
              <abbr title="Phone">P</abbr>: (995) 557 12 24 77 / Vakhtang
              Kvantrishvili
            </p>
          </div>

          <div className="col-lg-8 mb-4">
            <h3>Send us a Message</h3>
            <form name="sentMessage" id="contactForm" noValidate>
              <div className="control-group form-group">
                <div className="controls">
                  <label>Full Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    required
                    data-validation-required-message="Please enter your name."
                  />
                  <p className="help-block" />
                </div>
              </div>
              <div className="control-group form-group">
                <div className="controls">
                  <label>Phone Number:</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    required
                    data-validation-required-message="Please enter your phone number."
                  />
                  <div className="help-block" />
                </div>
              </div>
              <div className="control-group form-group">
                <div className="controls">
                  <label>Email Address:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    required
                    data-validation-required-message="Please enter your email address."
                  />
                  <div className="help-block" />
                </div>
              </div>
              <div className="control-group form-group">
                <div className="controls">
                  <label>Message:</label>
                  <textarea
                    rows={10}
                    cols={100}
                    className="form-control"
                    id="message"
                    required
                    data-validation-required-message="Please enter your message"
                    maxLength={999}
                    style={{ resize: "none" }}
                    defaultValue={""}
                  />
                  <div className="help-block" />
                </div>
              </div>
              <div id="success" />
              {/* For success/fail messages */}
              <button
                type="submit"
                className="btn btn-primary"
                id="sendMessageButton"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        {/* /.row */}
      </div>
    );
  }
}

export default Contact;
