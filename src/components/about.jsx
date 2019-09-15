import React, { Component } from "react";
import NavBar from "./navBar";

class About extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="fluid-container">
          <img src="http://emg.ge/wp-content/themes/emg/images/header-bg.jpg"></img>
        </div>
        <div className="container">
          {/* Page Heading/Breadcrumbs */}
          {/* NAVBAR */}
          <div className="submenu-main hide-small">
            <div className="widthControl">
              <ul className="submenu-items clearfix">
                <li className=" menu-item menu-item-type-post_type menu-item-object-page">
                  <a
                    href="http://emg.ge/%e1%83%a9%e1%83%95%e1%83%94%e1%83%9c-%e1%83%a8%e1%83%94%e1%83%a1%e1%83%90%e1%83%ae%e1%83%94%e1%83%91/governence/"
                    data-text="სტრუქტურა"
                  >
                    Governance
                  </a>
                </li>
                <li className=" menu-item menu-item-type-post_type menu-item-object-page">
                  <a
                    href="http://emg.ge/%e1%83%a9%e1%83%95%e1%83%94%e1%83%9c-%e1%83%a8%e1%83%94%e1%83%a1%e1%83%90%e1%83%ae%e1%83%94%e1%83%91/%e1%83%a1%e1%83%a2%e1%83%a0%e1%83%90%e1%83%a2%e1%83%94%e1%83%92%e1%83%98%e1%83%a3%e1%83%9a%e1%83%98-%e1%83%ae%e1%83%94%e1%83%93%e1%83%95%e1%83%90/"
                    data-text="სტრატეგიული ხედვა"
                  >
                    Strategic Vision
                  </a>
                </li>
                <li className=" menu-item menu-item-type-post_type menu-item-object-page">
                  <a
                    href="http://emg.ge/%e1%83%a9%e1%83%95%e1%83%94%e1%83%9c-%e1%83%a8%e1%83%94%e1%83%a1%e1%83%90%e1%83%ae%e1%83%94%e1%83%91/quality-and-permits/"
                    data-text="ხარისხი და ნებართვა"
                  >
                    Quality and permits
                  </a>
                </li>
                <li className=" menu-item menu-item-type-post_type menu-item-object-page">
                  <a
                    href="http://emg.ge/%e1%83%a9%e1%83%95%e1%83%94%e1%83%9c-%e1%83%a8%e1%83%94%e1%83%a1%e1%83%90%e1%83%ae%e1%83%94%e1%83%91/%e1%83%9b%e1%83%93%e1%83%94%e1%83%91%e1%83%90%e1%83%a0%e1%83%94%e1%83%9d%e1%83%91%e1%83%90/"
                    data-text="ფილიალები"
                  >
                    Training
                  </a>
                </li>
                <li className=" menu-item menu-item-type-post_type menu-item-object-page">
                  <a
                    href="http://emg.ge/%e1%83%a9%e1%83%95%e1%83%94%e1%83%9c-%e1%83%a8%e1%83%94%e1%83%a1%e1%83%90%e1%83%ae%e1%83%94%e1%83%91/%e1%83%a2%e1%83%a0%e1%83%94%e1%83%9c%e1%83%98%e1%83%9c%e1%83%92%e1%83%98/"
                    data-text="ტრენინგი"
                  >
                    Partners
                  </a>
                </li>
                <li className=" menu-item menu-item-type-post_type menu-item-object-page">
                  <a
                    href="http://emg.ge/%e1%83%a9%e1%83%95%e1%83%94%e1%83%9c-%e1%83%a8%e1%83%94%e1%83%a1%e1%83%90%e1%83%ae%e1%83%94%e1%83%91/%e1%83%9e%e1%83%90%e1%83%a0%e1%83%a2%e1%83%9c%e1%83%98%e1%83%9d%e1%83%a0%e1%83%94%e1%83%91%e1%83%98/"
                    data-text="პარტნიორები"
                  >
                    Branches
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* NAVBAR */}
          <h1 className="mt-4 mb-3">
            About
            <small>Subheading</small>
          </h1>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active">About</li>
          </ol>
          {/* Intro Content */}
          <div className="row">
            <div className="col-lg-6">
              <img
                className="img-fluid rounded mb-4"
                src="http://placehold.it/750x450"
                alt=""
              />
            </div>
            <div className="col-lg-6">
              <h2>About Modern Business</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
                voluptate nihil eum consectetur similique? Consectetur, quod,
                incidunt, harum nisi dolores delectus reprehenderit voluptatem
                perferendis dicta dolorem non blanditiis ex fugiat.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe,
                magni, aperiam vitae illum voluptatum aut sequi impedit non
                velit ab ea pariatur sint quidem corporis eveniet. Odit,
                temporibus reprehenderit dolorum!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
                consequuntur, modi mollitia corporis ipsa voluptate corrupti eum
                ratione ex ea praesentium quibusdam? Aut, in eum facere corrupti
                necessitatibus perspiciatis quis?
              </p>
            </div>
          </div>
          {/* /.row */}
          {/* Team Members */}
          <h2>Our Team</h2>
          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="card h-100 text-center">
                <img
                  className="card-img-top"
                  src="http://placehold.it/750x450"
                  alt=""
                />
                <div className="card-body">
                  <h4 className="card-title">Team Member</h4>
                  <h6 className="card-subtitle mb-2 text-muted">Position</h6>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Possimus aut mollitia eum ipsum fugiat odio officiis odit.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="#">name@example.com</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card h-100 text-center">
                <img
                  className="card-img-top"
                  src="http://placehold.it/750x450"
                  alt=""
                />
                <div className="card-body">
                  <h4 className="card-title">Team Member</h4>
                  <h6 className="card-subtitle mb-2 text-muted">Position</h6>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Possimus aut mollitia eum ipsum fugiat odio officiis odit.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="#">name@example.com</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-4">
              <div className="card h-100 text-center">
                <img
                  className="card-img-top"
                  src="http://placehold.it/750x450"
                  alt=""
                />
                <div className="card-body">
                  <h4 className="card-title">Team Member</h4>
                  <h6 className="card-subtitle mb-2 text-muted">Position</h6>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Possimus aut mollitia eum ipsum fugiat odio officiis odit.
                  </p>
                </div>
                <div className="card-footer">
                  <a href="#">name@example.com</a>
                </div>
              </div>
            </div>
          </div>
          {/* /.row */}
          {/* Our Customers */}
          <h2>Our Customers</h2>
          <div className="row">
            <div className="col-lg-2 col-sm-4 mb-4">
              <img
                className="img-fluid"
                src="http://placehold.it/500x300"
                alt=""
              />
            </div>
            <div className="col-lg-2 col-sm-4 mb-4">
              <img
                className="img-fluid"
                src="http://placehold.it/500x300"
                alt=""
              />
            </div>
            <div className="col-lg-2 col-sm-4 mb-4">
              <img
                className="img-fluid"
                src="http://placehold.it/500x300"
                alt=""
              />
            </div>
            <div className="col-lg-2 col-sm-4 mb-4">
              <img
                className="img-fluid"
                src="http://placehold.it/500x300"
                alt=""
              />
            </div>
            <div className="col-lg-2 col-sm-4 mb-4">
              <img
                className="img-fluid"
                src="http://placehold.it/500x300"
                alt=""
              />
            </div>
            <div className="col-lg-2 col-sm-4 mb-4">
              <img
                className="img-fluid"
                src="http://placehold.it/500x300"
                alt=""
              />
            </div>
          </div>
          {/* /.row */}
        </div>
      </React.Fragment>
    );
  }
}

export default About;
