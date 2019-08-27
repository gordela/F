import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import auth from "../services/authService";

class ProjectFlex extends Component {
  render() {
    const { projects, onDelete } = this.props;
    const isAdmin = auth.isAdmin();

    return (
      <div className="row">
        {projects.map(project => (
          <div
            key={project._id}
            className="col-lg-3 col-md-4 col-sm-6 portfolio-item"
          >
            <div className="card h-100">
              <Link to={"/project/" + project._id}>
                <img
                  className="card-img-top"
                  src={project.shortImage}
                  alt={project.shortDesc}
                />
              </Link>
              <div className="card-body">
                <h4 className="card-title">
                  <a href="#">{project.title}</a>
                </h4>
                <p className="card-text">{project.shortDesc}</p>
                <p className="card-text">
                  <b>Duration:</b> {project.duration} Hours
                </p>
                <p className="card-text">
                  <b>Client:</b> {project.client}
                </p>
                {!isAdmin && (
                  <Button
                    onClick={() => onDelete(project)}
                    variant="btn emg-btn"
                    className="mt-auto card-btn btn btn-primary"
                  >
                    Make Feedback
                  </Button>
                )}

                {isAdmin && (
                  <React.Fragment>
                    <Link
                      to={"/project/" + project._id}
                      className="mt-auto card-btn btn btn-primary"
                    >
                      Edit
                    </Link>

                    <Button
                      onClick={() => onDelete(project)}
                      variant="btn card-btn btn-danger"
                      className="mt-auto"
                    >
                      Delete
                    </Button>
                    <br />
                  </React.Fragment>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ProjectFlex;
