import React, { Component } from "react";
import { getProject } from "../services/projectService";

class FullProject extends Component {
  state = { project: {} };
  async componentDidMount() {
    const { id } = this.props.match.params;
    const { data } = await getProject(id);
    this.setState({ project: data });
  }
  render() {
    const { title, longDesc, longImage } = this.state.project;
    return (
      <React.Fragment>
        <div className="container pt-5">
          <h1 className="currentPageTitle ">Projects</h1>
          <h5 className="color-emg pb-4">{title}</h5>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <p>{longDesc}</p>
            </div>
            <div className="col-12 col-md-6">
              <img src={longImage} alt={title} className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="container p-5"></div>

        <div className="fluid-container highlight p-5">
          <div className="d-flex justify-content-center">
            <h1 className="p-5">WHAT CUSTOMERS SAY</h1>
          </div>
          <div className="container card-deck reviews-slick">
            <div className="card card-emg-dark">
              <div className="row no-gutters">
                <div className="col-sm-4">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Valeriy_Konovalyuk_3x4.jpg"
                    className="card-img rounded-circle"
                    alt="..."
                  />
                </div>
                <div className="col-sm-8">
                  <div className="card-body">
                    <h5 className="card-title">NAME SURNAME</h5>
                    <p className="p-customers">COMPANY NAME</p>
                    <p className="p-customers">
                      <small className="text-muted">POSITION</small>
                    </p>
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                  </div>
                </div>
                <div className="col-sm-12">
                  <p className="p-customers">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              </div>
            </div>

            <div className="card card-emg-dark">
              <div className="row no-gutters">
                <div className="col-sm-4">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Valeriy_Konovalyuk_3x4.jpg"
                    className="card-img rounded-circle"
                    alt="..."
                  />
                </div>
                <div className="col-sm-8">
                  <div className="card-body">
                    <h5 className="card-title">NAME SURNAME</h5>
                    <p className="p-customers">COMPANY NAME</p>
                    <p className="p-customers">
                      <small className="text-muted">POSITION</small>
                    </p>
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                  </div>
                </div>
                <div className="col-sm-12">
                  <p className="p-customers">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              </div>
            </div>
            <div className="card card-emg-dark">
              <div className="row no-gutters">
                <div className="col-sm-4">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Valeriy_Konovalyuk_3x4.jpg"
                    className="card-img rounded-circle"
                    alt="..."
                  />
                </div>
                <div className="col-sm-8">
                  <div className="card-body">
                    <h5 className="card-title">NAME SURNAME</h5>
                    <p className="p-customers">COMPANY NAME</p>
                    <p className="p-customers">
                      <small className="text-muted">POSITION</small>
                    </p>
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star checked" />
                    <span className="fa fa-star" />
                    <span className="fa fa-star" />
                  </div>
                </div>
                <div className="col-sm-12">
                  <p className="p-customers">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container p-5"></div>
      </React.Fragment>
    );
  }
}

export default FullProject;
