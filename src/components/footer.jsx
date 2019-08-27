import React, { Component } from "react";
import FontAwesome from "react-fontawesome";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer id="sticky-footer" className="py-4 bg-dark text-white-50">
        <div className="container text-center">
          <small>Copyright © Your Website</small>
        </div>
      </footer>
    );
  }
}

export default Footer;
