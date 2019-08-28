import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import auth from "../services/authService";

class Career extends Component {
  state = {};
  render() {
    const { careers, onDelete } = this.props;
    const isAdmin = auth.isAdmin();
    return (
      <div className="container">
        <h1 className="mt-4 mb-3"></h1>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="index.html">Home</a>
          </li>
          <li className="breadcrumb-item active">{this.constructor.name}</li>
        </ol>
        {isAdmin && (
          <Link
            style={{ marginBottom: "10px" }}
            className="btn btn-primary"
            to="/career/new"
          >
            New Project
          </Link>
        )}
        <div
          className="mb-4"
          id="accordion"
          role="tablist"
          aria-multiselectable="true"
        >
          {careers &&
            careers.map(career => (
              <div className="card">
                <div
                  className="card-header"
                  role="tab"
                  id={"heading" + career._id}
                >
                  <div class="container">
                    <div class="row">
                      <div class="col-sm-6">
                        <a
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href={"#collapse" + career._id}
                          aria-expanded="false"
                          aria-controls={"collapse" + career._id}
                          className="collapsed"
                        >
                          {career.title}
                        </a>
                        {isAdmin && (
                          <React.Fragment>
                            <Link
                              to={"/career/" + career._id}
                              className="mt-auto card-btn btn btn-primary"
                            >
                              Edit
                            </Link>
                            <Button
                              onClick={() => onDelete(career)}
                              variant="btn card-btn btn-danger"
                              className="mt-auto"
                            >
                              Delete
                            </Button>
                          </React.Fragment>
                        )}
                      </div>
                      <div class="col-sm-3">{career.published}</div>
                      <div class="col-sm-3">{career.endDate}</div>
                    </div>
                  </div>
                </div>
                <div
                  id={"collapse" + career._id}
                  className="collapse"
                  role="tabpanel"
                  aria-labelledby={"heading" + career._id}
                >
                  <div className="card-body">{career.description}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default Career;
