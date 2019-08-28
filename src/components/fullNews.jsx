import React, { Component } from "react";

class FullNews extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        {/* Page Heading/Breadcrumbs */}
        <h1 className="mt-4 mb-3">
          Post Title
          <small>
            by
            <a href="#">Start Bootstrap</a>
          </small>
        </h1>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="index.html">Home</a>
          </li>
          <li className="breadcrumb-item active">Blog Home 2</li>
        </ol>
        <div className="row">
          {/* Post Content Column */}
          <div className="col-lg-8">
            {/* Preview Image */}
            <img
              className="img-fluid rounded"
              src="http://placehold.it/900x300"
              alt=""
            />
            <hr />
            {/* Date/Time */}
            <p>Posted on January 1, 2017 at 12:00 PM</p>
            <hr />
            {/* Post Content */}
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus,
              vero, obcaecati, aut, error quam sapiente nemo saepe quibusdam sit
              excepturi nam quia corporis eligendi eos magni recusandae laborum
              minus inventore?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut,
              tenetur natus doloremque laborum quos iste ipsum rerum obcaecati
              impedit odit illo dolorum ab tempora nihil dicta earum fugiat.
              Temporibus, voluptatibus.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos,
              doloribus, dolorem iusto blanditiis unde eius illum consequuntur
              neque dicta incidunt ullam ea hic porro optio ratione repellat
              perspiciatis. Enim, iure!
            </p>
            <blockquote className="blockquote">
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <footer className="blockquote-footer">
                Someone famous in
                <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error,
              nostrum, aliquid, animi, ut quas placeat totam sunt tempora
              commodi nihil ullam alias modi dicta saepe minima ab quo
              voluptatem obcaecati?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
              dolor quis. Sunt, ut, explicabo, aliquam tenetur ratione tempore
              quidem voluptates cupiditate voluptas illo saepe quaerat numquam
              recusandae? Qui, necessitatibus, est!
            </p>
            <hr />
          </div>
          {/* Sidebar Widgets Column */}
          <div className="col-md-4">
            {/* Search Widget */}
            <div className="card mb-4">
              <h5 className="card-header">Search</h5>
              <div className="card-body">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search for..."
                  />
                  <span className="input-group-btn">
                    <button className="btn btn-secondary" type="button">
                      Go!
                    </button>
                  </span>
                </div>
              </div>
            </div>
            {/* Categories Widget */}
            <div className="card my-4">
              <h5 className="card-header">Categories</h5>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6">
                    <ul className="list-unstyled mb-0">
                      <li>
                        <a href="#">Web Design</a>
                      </li>
                      <li>
                        <a href="#">HTML</a>
                      </li>
                      <li>
                        <a href="#">Freebies</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul className="list-unstyled mb-0">
                      <li>
                        <a href="#">JavaScript</a>
                      </li>
                      <li>
                        <a href="#">CSS</a>
                      </li>
                      <li>
                        <a href="#">Tutorials</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Side Widget */}
            <div className="card my-4">
              <h5 className="card-header">Side Widget</h5>
              <div className="card-body">
                You can put anything you want inside of these side widgets. They
                are easy to use, and feature the new Bootstrap 4 card
                containers!
              </div>
            </div>
          </div>
        </div>
        {/* /.row */}
      </div>
    );
  }
}

export default FullNews;
