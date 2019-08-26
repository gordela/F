import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getCategories } from "../services/categoryService";
import { getProject, saveProject } from "../services/projectService";

class EditProject extends Form {
  state = {
    data: {
      title: "",
      client: "",
      duration: "",
      fbLink: "",
      twLink: "",
      longDesc: "",
      shortDesc: "",
      longImage: "",
      shortImage: "",
      categoryId: ""
    },
    categories: [],
    errors: {}
  };
  schema = {
    _id: Joi.string(),
    title: Joi.string()
      .required()
      .label("Title"),
    client: Joi.string()
      .required()
      .label("Client"),
    duration: Joi.number()
      .required()
      .min(0)
      .label("Duration"),
    shortImage: Joi.string().required(),
    longImage: Joi.string().required(),
    shortDesc: Joi.string().required(),
    longDesc: Joi.string().required(),
    twLink: Joi.string().required(),
    fbLink: Joi.string().required(),
    categoryId: Joi.string().required()
  };

  async populateStyles() {
    const { data: categories } = await getCategories();
    this.setState({ categories });
  }

  async populateShoe() {
    try {
      const shoeId = this.props.match.params.id;
      if (shoeId === "new") return;
      const { data: shoe } = await getProject(shoeId);
      this.setState({ data: this.mapToViewModel(shoe) });
    } catch (error) {
      if (error.response && error.response.status === 404)
        this.props.history.replace("/not-found");
    }
  }

  async componentDidMount() {
    await this.populateStyles();
    await this.populateShoe();
  }

  mapToViewModel(shoe) {
    return {
      _id: shoe._id,
      title: shoe.title,
      categoryId: shoe.category._id,
      client: shoe.client,
      shortImage: shoe.shortImage,
      longImage: shoe.longImage,
      shortDesc: shoe.shortDesc,
      longDesc: shoe.longDesc,
      duration: shoe.duration,
      fbLink: shoe.fbLink,
      twLink: shoe.twLink
    };
  }

  doSubmit = async () => {
    await saveProject(this.state.data);

    this.props.history.push("/projects");
  };

  render() {
    return (
      <div>
        <h1>Edit Project</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderInput("duration", "Duration", "number")}
          {this.renderInput("shortImage", "Picture One")}
          {this.renderInput("longImage", "Picture Two")}
          {this.renderInput("client", "Client")}
          {this.renderInput("shortDesc", "Short description")}
          {this.renderInput("longDesc", "Long description")}
          {this.renderSelect("categoryId", "Category", this.state.categories)}
          {this.renderButton("Submit")}
        </form>
      </div>
    );
  }
}

export default EditProject;
