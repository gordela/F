import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import auth from "../services/authService";

class CategoriesFlex extends Component {
  render() {
    const { categories, onDelete, projects } = this.props;
    const isAdmin = auth.isAdmin();
    return (
      <div class="fluid-container">
        <div class="row">
          {categories.map(project => (
            <div key={project._id} className="col-12 col-md-2  p-3">
              <Link
                className="lightbox categoryTitle"
                to={{
                  pathname: "/projects/category/" + project._id,
                  state: { projects }
                }}
              >
                <div
                  className="project-bg row justify-content-center align-items-center "
                  style={{
                    background: `linear-gradient(rgba(10, 87, 128, 0.4),rgba(10, 87, 128, 0.4)),url(${project.image})`
                  }}
                >
                  <span className=" text-center">{project.name}</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default CategoriesFlex;
