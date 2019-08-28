import React, { Component } from "react";
import ProjectFlex from "./projectFlex";
import Moment from "moment";

class Home extends Component {
  state = {};

  render() {
    const { projects, newss } = this.props;
    return (
      <React.Fragment>
        <div className="row flex">
          <div className="col-sm-12 col-md-2 d-flex flex-column justify-content-around">
            <div class="col-md-auto">
              <img
                className="img-thumbnail "
                src="https://ogplus.com.ge/images/ea-logo-1.png"
                alt=""
              />
            </div>
            <div class="col-md-auto">
              {" "}
              <img
                src="https://matsne.gov.ge/document-image/documentImage?img=/0/64/908_files/image005.gif"
                className="img-thumbnail"
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-10">
            {" "}
            <header>
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to={0}
                  />
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to={1}
                    className="active"
                  />
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to={2}
                  />
                </ol>
                <div className="carousel-inner" role="listbox">
                  {/* Slide One - Set the background image for this slide in the line below */}
                  <div
                    className="carousel-item active carousel-item-left"
                    style={{
                      backgroundImage: 'url("http://placehold.it/1900x1080")'
                    }}
                  >
                    <div className="carousel-caption d-none d-md-block">
                      <h3>First Slide</h3>
                      <p>This is a description for the first slide.</p>
                    </div>
                  </div>
                  {/* Slide Two - Set the background image for this slide in the line below */}
                  <div
                    className="carousel-item carousel-item-next carousel-item-left"
                    style={{
                      backgroundImage: 'url("http://placehold.it/1900x1080")'
                    }}
                  >
                    <div className="carousel-caption d-none d-md-block">
                      <h3>Second Slide</h3>
                      <p>This is a description for the second slide.</p>
                    </div>
                  </div>
                  {/* Slide Three - Set the background image for this slide in the line below */}
                  <div
                    className="carousel-item"
                    style={{
                      backgroundImage: 'url("http://placehold.it/1900x1080")'
                    }}
                  >
                    <div className="carousel-caption d-none d-md-block">
                      <h3>Third Slide</h3>
                      <p>This is a description for the third slide.</p>
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </header>
          </div>
        </div>
        <div className="container">
          <h1 className="my-4">
            <span class="first-letter">N</span>ews
          </h1>
        </div>
        <div className="fluid-container bg-light p-3">
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
          <h2>
            <span class="first-letter">P</span>rojects
          </h2>
          <ProjectFlex projects={projects.slice(0, 4)}></ProjectFlex>
          <hr />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
