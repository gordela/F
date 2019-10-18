import React, { Component } from "react";
import Moment from "react-moment";
import emgLogo from "../res/logo.png";
import certOne from "../res/ea.jpg";
import certTwo from "../res/gac.png";
import certThree from "../res/powerpoint.png";
import FontAwesome from "react-fontawesome";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.min.js";
import { Link } from "react-router-dom";
import Slider from "react-slick";

class Home extends Component {
  state = {};

  render() {
    const projectsResponsive = {
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1210,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true
          }
        },
        {
          breakpoint: 990,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    };
    const responsive = {
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true
          }
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 590,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    };
    const { projects, newss } = this.props;
    return (
      <React.Fragment>
        {/* LOGO */}
        <div className="slider fluid-container row justify-content-center slider">
          <img
            src={emgLogo}
            className="align-self-center img-fluid p-4 logo"
            alt=""
          />
        </div>
        {/* END LOGO */}
        {/* Certs */}
        <div className="container p-3 justify-content-center rounded">
          <hr />
          <div className="align-self-center">
            <a href="#">
              <img src={certOne} className="rounded float-left wt" alt="..." />
            </a>
            <a href="#">
              <img
                src={certThree}
                className="rounded float-right wt"
                alt="..."
              />
            </a>
            <a href="#">
              <img
                src={certTwo}
                className="rounded mx-auto d-block wt"
                alt="..."
              />
            </a>
          </div>
          <hr />
        </div>
        {/* END CERTS */}

        {/* Komentari */}
        <div className="container">
          <h2 className="currentPageTitle">News & Media</h2>
        </div>
        <div className="fluid-container highlight p-5">
          <Slider className="container" {...responsive}>
            {newss.slice(0, 8).map(news => (
              <div>
                <div className="card card-emg mr-4">
                  <img
                    className="card-img-top"
                    src={news.shortImage}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      <span className="inner-shadow-emg">
                        <Link
                          className="home-news-link"
                          to={"/news/" + news._id}
                        >
                          {news.title}
                        </Link>
                      </span>
                    </h5>
                    <p className="card-text">{news.shortDesc}</p>
                  </div>
                  <div className="card-body d-flex justify-content-between">
                    <div>
                      <a href="#" className="card-link color-emg">
                        <FontAwesome className="fab fa-facebook-f"></FontAwesome>
                      </a>
                      <a href="#" className="card-link color-emg">
                        <FontAwesome className="fab fa-twitter"></FontAwesome>
                      </a>
                    </div>
                    <div className="color-emg">
                      <Moment format="DD MM YYYY" withTitle>
                        {news.publishDate}
                      </Moment>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* PROJECTS START */}
        <div className="container">
          <h2 className="currentPageTitle">Projects</h2>
        </div>
        <div className="fluid-container p-5 ">
          <Slider className="container" {...projectsResponsive}>
            {projects.slice(0, 8).map(project => (
              <div>
                <div className="card card-emg-dark mr-4">
                  <img
                    className="card-img-top"
                    src={project.shortImage}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      <span className="inner-shadow-emg">
                        <Link
                          className="home-news-link"
                          to={"/project/" + project._id}
                        >
                          {project.title}
                        </Link>
                      </span>
                    </h5>
                    <p className="card-text">{project.shortDesc}</p>
                  </div>
                  <div className="card-body d-flex justify-content-between">
                    <div>
                      <a href="#" className="card-link color-emg">
                        <FontAwesome className="fab fa-facebook-f"></FontAwesome>
                      </a>
                      <a href="#" className="card-link color-emg">
                        <FontAwesome className="fab fa-twitter"></FontAwesome>
                      </a>
                    </div>

                    <button className="emg-button">Make Feedback</button>
                    <div className="color-emg">
                      <Moment format="DD MM YYYY" withTitle>
                        {project.publishDate}
                      </Moment>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        {/* PROJECTS END */}
        {/* Reviews start */}
        <div className="fluid-container highlight p-5">
          <div className="d-flex justify-content-center">
            <h1 className="p-5">WHAT CUSTOMERS SAY</h1>
          </div>
          <div className="container card-deck reviews-slick">
            <div className="card card-emg-dark">
              <div className="row no-gutters">
                <div className="col-sm-4">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Valeriy_Konovalyuk_3x4.jpg"
                    className="card-img rounded-circle"
                    alt="..."
                  />
                </div>
                <div className="col-sm-8">
                  <div className="card-body">
                    <h5 className="card-title">NAME SURNAME</h5>
                    <p className="p-customers">COMPANY NAME</p>
                    <p className="p-customers">
                      <small className="text-muted">POSITION</small>
                    </p>
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                  </div>
                </div>
                <div className="col-sm-12">
                  <p className="p-customers">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              </div>
            </div>

            <div className="card card-emg-dark">
              <div className="row no-gutters">
                <div className="col-sm-4">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Valeriy_Konovalyuk_3x4.jpg"
                    className="card-img rounded-circle"
                    alt="..."
                  />
                </div>
                <div className="col-sm-8">
                  <div className="card-body">
                    <h5 className="card-title">NAME SURNAME</h5>
                    <p className="p-customers">COMPANY NAME</p>
                    <p className="p-customers">
                      <small className="text-muted">POSITION</small>
                    </p>
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                  </div>
                </div>
                <div className="col-sm-12">
                  <p className="p-customers">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              </div>
            </div>
            <div className="card card-emg-dark">
              <div className="row no-gutters">
                <div className="col-sm-4">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Valeriy_Konovalyuk_3x4.jpg"
                    className="card-img rounded-circle"
                    alt="..."
                  />
                </div>
                <div className="col-sm-8">
                  <div className="card-body">
                    <h5 className="card-title">NAME SURNAME</h5>
                    <p className="p-customers">COMPANY NAME</p>
                    <p className="p-customers">
                      <small className="text-muted">POSITION</small>
                    </p>
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                  </div>
                </div>
                <div className="col-sm-12">
                  <p className="p-customers">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center p-5">
            <button className="emg-button pt-2 pb-2 pl-5 pr-5">
              MAKE FEEDBACK
            </button>
          </div>
        </div>
        {/* Reviews end */}
        <div className="container p-5"></div>
      </React.Fragment>
    );
  }
}

export default Home;
