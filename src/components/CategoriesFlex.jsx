import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import auth from "../services/authService";

class CategoriesFlex extends Component {
  render() {
    const { categories, onDelete, projects } = this.props;
    const isAdmin = auth.isAdmin();
    return (
      <div className="row">
        {categories.map(project => (
          <div key={project._id} className="col-md-6 col-lg-4">
            <div className="card border-0 transform-on-hover">
              <Link
                className="lightbox"
                to={{
                  pathname: "/projects/category/" + project._id,
                  state: { projects }
                }}
              >
                <img
                  src={project.image}
                  alt="Card Image"
                  className="card-img-top"
                />
              </Link>
              <div className="card-body">
                <h6>
                  <Link to={"/projects/category/" + project._id}>
                    {project.name}
                  </Link>
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default CategoriesFlex;
