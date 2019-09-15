import React, { Component } from "react";
import FontAwesome from "react-fontawesome";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="fluid-container">
        <section style={{ height: "80px" }} />
        {/*--------- Footer ----------*/}
        <footer className="footer-bs">
          <div className="row">
            <div className="col-md-6 footer-nav animated fadeInUp">
              <h4>Contact</h4>
              <div className="col-md-12">
                <ul className="pages">
                  <li>
                    <FontAwesome className="fas fa-phone"></FontAwesome>
                    <a href="/contact"> (995) 591 59 92 92 / (032) 2 709 709</a>
                  </li>
                  <li>
                    <FontAwesome className="fas fa-envelope"></FontAwesome>
                    <a href="/contact"> info@emg.ge</a>
                  </li>
                  <li>
                    <FontAwesome className="fas fa-location-arrow"></FontAwesome>
                    <a href="/contact">8 K. Kutateladze Street, Tbilisi 0101</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 footer-ns animated fadeInRight">
              <h4>Newsletter</h4>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.9219520194015!2d44.74112131535616!3d41.72220298313488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40447310d0442439%3A0x741ac75e14ceafaa!2zOCDhg5nhg5Dhg5rhg5jhg6Hhg6Lhg6Dhg5Dhg6Lhg5Qg4YOl4YOj4YOX4YOQ4YOX4YOU4YOa4YOQ4YOr4YOY4YOhIOGDpeGDo-GDqeGDkCwg4YOX4YOR4YOY4YOa4YOY4YOh4YOYIDAxNzc!5e0!3m2!1ska!2sge!4v1568553145362!5m2!1ska!2sge"
                width={400}
                height={150}
                frameBorder={0}
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>
          </div>
        </footer>
        <section
          style={{ color: "#7cb34d", textAlign: "center", margin: "10px auto" }}
        >
          <p>2019 Engineering Monitoring Group. All rights reserved</p>
        </section>
      </div>
    );
  }
}

export default Footer;
