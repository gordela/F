import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import auth from "../services/authService";
import careerPlus from "../res/plus.png";
import Moment from "react-moment";

class Career extends Component {
  state = {};
  render() {
    const { careers, onDelete } = this.props;
    const isAdmin = auth.isAdmin();
    return (
      <React.Fragment>
        <div className="thumbnail"></div>
        <div className="container">
          <h1 className="currentPageTitle  ">Career</h1>
          <h5 className="color-emg pb-4">WORKS WITH US</h5>
          <h5>OUR PRINCIPLES</h5>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio,
            accusantium aut a est quidem exercitationem voluptates ipsam
            perferendis impedit officiis laboriosam distinctio in! Ea veniam
            nobis mollitia nam itaque! Voluptas. Delectus aliquid, dolor id ad
            nisi temporibus pariatur quod fugit aut quo iusto in mollitia,
            accusamus ducimus expedita quae doloremque velit recusandae eligendi
            esse modi eos? Quas obcaecati repudiandae eos? Perferendis
            consectetur unde et quod quisquam magnam necessitatibus earum
            reprehenderit dicta at perspiciatis, ipsum sequi fugiat numquam
            aspernatur beatae nobis quidem culpa totam voluptatibus! Porro esse
            officiis ex dignissimos nulla!
          </p>
          {isAdmin && (
            <Link
              style={{ marginBottom: "10px" }}
              className="btn btn-primary"
              to="/career/new"
            >
              New Career
            </Link>
          )}
        </div>
        <div className="fluid-container highlight p-5">
          <div className="container">
            <div
              className="mb-4 accordion"
              id="accordion"
              role="tablist"
              aria-multiselectable="true"
            >
              {careers &&
                careers.map(career => (
                  <div className="card" key={career._id}>
                    <div
                      className="card-header"
                      role="tab"
                      id={"heading" + career._id}
                    >
                      <h2 className="mb-0 row justify-content-between">
                        <div className="col-sm-6">
                          <button
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href={"#collapse" + career._id}
                            aria-expanded="false"
                            aria-controls={"collapse" + career._id}
                            className="btn btn-link career-tab text-dark"
                          >
                            <img src={careerPlus} alt="Career plus image" />
                            {" " + career.title}
                          </button>

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
                        <p className="career-date m-2">
                          <Moment format="D MMM YYYY" withTitle>
                            {career.published}
                          </Moment>
                        </p>
                        <p className="career-date m-2">
                          <Moment format="D MMM YYYY" withTitle>
                            {career.endDate}
                          </Moment>
                        </p>
                      </h2>
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
        </div>
      </React.Fragment>
    );
  }
}

export default Career;
