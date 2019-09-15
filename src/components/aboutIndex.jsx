import React, { Component } from "react";

class AboutIndex extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1 className="currentPageTitle mt-4 mb-3">About</h1>
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
              magni, aperiam vitae illum voluptatum aut sequi impedit non velit
              ab ea pariatur sint quidem corporis eveniet. Odit, temporibus
              reprehenderit dolorum!
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
        <h2 className="currentPageTitle mt-4 mb-3">Our Team</h2>
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
      </React.Fragment>
    );
  }
}

export default AboutIndex;
