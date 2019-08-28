import React, { Component } from "react";
import ProjectFlex from "./projectFlex";

class Home extends Component {
  state = {};

  render() {
    const { projects } = this.props;
    return (
      <React.Fragment>
        <header>
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to={0} />
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to={1}
                className="active"
              />
              <li data-target="#carouselExampleIndicators" data-slide-to={2} />
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
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </header>
        <div className="container">
          <h1 className="my-4">Welcome to Modern Business</h1>
          {/* Marketing Icons Section */}
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="card h-100">
                <h4 className="card-header">Card Title</h4>
                <div className="card-body">
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sapiente esse necessitatibus neque.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="#" className="btn btn-primary">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr />

          <h2>Projects</h2>

          <ProjectFlex projects={projects.slice(0, 4)}></ProjectFlex>
          <hr />

          {/* Features Section */}
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
