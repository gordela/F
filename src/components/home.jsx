import React, { Component } from "react";
import ProjectFlex from "./projectFlex";
import Moment from "moment";

class Home extends Component {
  state = {};

  render() {
    const { projects, newss } = this.props;
    return (
      <React.Fragment>
        {/* "Komentari" */}

        <div className="fluid-container ">
          <header>
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner" role="listbox">
                {/* Slide One - Set the background image for this slide in the line below */}
                <div
                  className="carousel-item active carousel-item-left"
                  style={{
                    backgroundImage:
                      'url("http://emg.ge/wp-content/themes/emg/images/cover.jpg")'
                  }}
                >
                  <div className="carousel-caption d-none d-md-block">
                    <img
                      src="http://emg.ge/wp-content/themes/emg/images/cover-logo.png"
                      alt=""
                    />
                  </div>
                </div>
                {/* Slide Two - Set the background image for this slide in the line below */}
                <div
                  className="carousel-item carousel-item-next carousel-item-left"
                  style={{
                    backgroundImage:
                      'url("http://emg.ge/wp-content/themes/emg/images/cover.jpg")'
                  }}
                >
                  <div className="carousel-caption d-none d-md-block">
                    <img
                      src="http://emg.ge/wp-content/themes/emg/images/cover-logo.png"
                      alt=""
                    />
                  </div>
                </div>
                {/* Slide Three - Set the background image for this slide in the line below */}
                <div
                  className="carousel-item"
                  style={{
                    backgroundImage:
                      'url("http://emg.ge/wp-content/themes/emg/images/cover.jpg")'
                  }}
                >
                  <div className="carousel-caption d-none d-md-block">
                    <img
                      src="http://emg.ge/wp-content/themes/emg/images/cover-logo.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>

        {/* Komentari */}
        <div className="container">
          <h2 className="currentPageTitle">News</h2>
        </div>
        <div className="fluid-container  p-3">
          <div className="container">
            <div className="card-deck">
              {newss.slice(0, 3).map(news => (
                <div className="card">
                  <img
                    className="card-img-top"
                    src={news.shortImage}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{news.title}</h5>
                    <p className="card-text">{news.shortDesc}</p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">
                      {Moment(Date(news.publishDate)).format("MMM Do YYYY")}
                    </small>
                  </div>
                </div>
              ))}
            </div>
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
