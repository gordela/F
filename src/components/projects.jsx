import React, { Component } from "react";
import { getProjects, deleteProject } from "../services/projectService";
import { getCategories } from "../services/categoryService";
import { paginate } from "../utils/paginate";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import { Link } from "react-router-dom";
import ProjectFlex from "./projectFlex";
import SearchBox from "./searchBox";
import { toast } from "react-toastify";
import Sort from "./common/sort";
import _ from "lodash";
import CategoriesFlex from "./CategoriesFlex";

class Projects extends Component {
  state = {
    projects: [],
    categories: [],
    branches: [],
    pageSize: 4,
    currentPage: 1,
    searchQuery: "",
    selectedStyle: null,
    sortColumn: { path: "title", order: "asc" }
  };

  handleDelete = async project => {
    const originalProjects = this.state.projects;
    const projects = originalProjects.filter(s => s._id !== project._id);
    this.setState({ projects });
    try {
      await deleteProject(project._id);
    } catch (error) {
      if (error.response && error.response.status === 404) {
        toast.error("This project has already been deleted");
        this.setState({ projects: originalProjects });
      }
    }
  };

  render() {
    const { length: count } = this.props.categories;
    const { categories, projects } = this.props;
    const { user } = this.props;
    let isAdmin = false;
    if (user) isAdmin = user.isAdmin;

    if (count === 0) return <p>There are no categories in the database</p>;
    return (
      <React.Fragment>
        <div className="container pt-5">
          <h1 className="currentPageTitle">PROJECTS</h1>
          <h5 className="color-emg pb-4">ROADS, HIGHWAYS, BRIDGES, TUNNELS</h5>
        </div>
        {isAdmin && (
          <React.Fragment>
            <Link
              style={{ marginBottom: "10px" }}
              className="btn btn-primary"
              to="/projects/new"
            >
              New Project
            </Link>
            <span> </span>
            <Link
              style={{ marginBottom: "10px" }}
              className="btn btn-primary"
              to="/category/new"
            >
              New Category
            </Link>
          </React.Fragment>
        )}
        <hr />
        <CategoriesFlex
          projects={projects}
          categories={categories}
          onDelete={this.handleDelete}
        />
      </React.Fragment>
    );
  }
}

export default Projects;
