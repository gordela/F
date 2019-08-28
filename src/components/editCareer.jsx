import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getCareer, saveCareer } from "../services/careerService";

class EditCareer extends Form {
  state = {
    data: {
      title: "",
      endDate: "",
      description: ""
    },
    errors: {}
  };
  schema = {
    _id: Joi.string(),
    title: Joi.string()
      .required()
      .label("Title"),

    endDate: Joi.date()
      .required()

      .label("End Date"),
    description: Joi.string().required()
  };

  async populateShoe() {
    try {
      const shoeId = this.props.match.params.id;
      if (shoeId === "new") return;
      const { data: shoe } = await getCareer(shoeId);
      this.setState({ data: this.mapToViewModel(shoe) });
    } catch (error) {
      if (error.response && error.response.status === 404)
        this.props.history.replace("/not-found");
    }
  }

  async componentDidMount() {
    await this.populateShoe();
  }

  mapToViewModel(shoe) {
    return {
      _id: shoe._id,
      title: shoe.title,
      endDate: shoe.endDate,
      description: shoe.description
    };
  }

  doSubmit = async () => {
    await saveCareer(this.state.data);

    this.props.history.push("/career");
  };

  render() {
    return (
      <div>
        <h1>Edit Project</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}

          {this.renderInput("endDate", "End Date", "date")}
          {this.renderInput("description", "Description")}
          {this.renderButton("Submit")}
        </form>
      </div>
    );
  }
}

export default EditCareer;
