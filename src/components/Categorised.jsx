import React, { Component } from "react";
import {
  deleteProject,
  getProjectsCategorised
} from "../services/projectService";
import { getCategory } from "../services/categoryService";
import { paginate } from "../utils/paginate";
import Pagination from "./common/pagination";
import { Link } from "react-router-dom";
import ProjectFlex from "./projectFlex";
import { toast } from "react-toastify";
import _ from "lodash";

class Categorised extends Component {
  state = {
    projects: [],
    categories: [],
    pageSize: 8,
    currentPage: 1,
    searchQuery: "",
    selectedStyle: null,
    sortColumn: { path: "title", order: "asc" }
  };

  async componentDidMount() {
    let { projects } = this.props.location.state;
    console.log(projects);
    projects = projects.filter(
      obj => obj.category._id == this.props.match.params.id
    );

    const { category } = projects[0] || {};
    this.setState({ projects, category });
  }

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

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleStyleSelect = style => {
    this.setState({ selectedStyle: style, searchQuery: "", currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  handleSearch = query => {
    this.setState({ searchQuery: query, selectedStyle: null, currentPage: 1 });
  };

  renderSortIcon = column => {
    const { sortColumn } = this.state;

    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc") return <i className="fa fa-sort-asc" />;
    return <i className="fa fa-sort-desc" />;
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      projects: allProjects,
      selectedStyle,
      sortColumn,
      searchQuery,
      category
    } = this.state;
    let filtered = allProjects;

    if (searchQuery)
      filtered = allProjects.filter(s =>
        s.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedStyle && selectedStyle._id)
      filtered = allProjects.filter(m => m.style._id === selectedStyle._id);

    const sorted = _.orderBy(filtered, [sortColumn.path], sortColumn.order);

    const projects = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, data: projects };
  };

  render() {
    const { length: count } = this.state.projects;
    const {
      pageSize,
      currentPage,
      sortColumn,
      searchQuery,
      category
    } = this.state;
    const { user } = this.props;
    let isAdmin = false;
    if (user) isAdmin = user.isAdmin;

    if (count === 0)
      return <p className="pt-8">There are no projects in the database</p>;
    const { totalCount, data: projects } = this.getPagedData();

    return (
      <React.Fragment>
        <div className="container pt-5">
          <h1 className="currentPageTitle">PROJECTS</h1>
          <h5 className="color-emg pb-4">{category.name}</h5>
        </div>
        <div className="fluid-container">
          {isAdmin && (
            <Link
              style={{ marginBottom: "10px" }}
              className="btn btn-primary"
              to="/projects/new"
            >
              New Project
            </Link>
          )}

          {/* <SearchBox value={searchQuery} onChange={this.handleSearch} /> */}
          <ProjectFlex
            count={this.props.count}
            onRenewBag={this.props.onRenewBag}
            projects={projects}
            onDelete={this.handleDelete}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>
        <div className="container p-5"></div>
      </React.Fragment>
    );
  }
}

export default Categorised;
