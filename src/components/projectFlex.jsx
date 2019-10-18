import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import auth from "../services/authService";
import FontAwesome from "react-fontawesome";

class ProjectFlex extends Component {
  render() {
    const { projects, onDelete } = this.props;
    const isAdmin = auth.isAdmin();

    return (
      <div className="row">
        {projects.map(project => (
          <div key={project._id} className="card m-1">
            <div className="card-body project-body">
              <Link to={"/project/" + project._id}>
                <div className="project vh-50 d-flex column align-items-end">
                  <h5 className="card-title project-title-container pr-4 pl-4 pt-1 pb-2">
                    <span className="inner-shadow-emg ">{project.title}</span>
                  </h5>
                </div>
              </Link>
              <p className="card-text p-2">
                {project.shortDesc}
                <br />
                <span className="color-emg">Client: </span> {project.client}
                <br />
                <span className="color-emg">Size/Area: </span> ???
                <br />
                <span className="color-emg">
                  Number of employed people:{" "}
                </span>{" "}
                ???
                <br />
                <span className="color-emg">Duration: </span> {project.duration}
                <br />
                <span className="color-emg">Conducted works: </span> ???
                <br />
                <span className="color-emg">Partners: </span> ???
                <br />
                <span className="color-emg">
                  Total cost of the project:{" "}
                </span>{" "}
                ???
              </p>
            </div>
            <div className="card-footer text-center">
              <small className="text-muted row justify-content-between">
                <div>
                  <a href="#" className="card-link-emg color-emg ">
                    <FontAwesome className="fab fa-facebook-f"></FontAwesome>
                  </a>
                  <a href="#" className="card-link-emg color-emg">
                    <FontAwesome className="fab fa-twitter"></FontAwesome>
                  </a>
                </div>
                {!isAdmin && (
                  <Button
                    onClick={() => onDelete(project)}
                    variant="btn emg-btn"
                    className="emg-button p-1"
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
                <div className="color-emg m-2">01.20.2019</div>
              </small>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ProjectFlex;
