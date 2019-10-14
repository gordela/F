import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import auth from "../services/authService";
import FontAwesome from "react-fontawesome";
import Moment from "react-moment";

class NewsFlex extends Component {
  render() {
    const { newss, onDelete } = this.props;
    const isAdmin = auth.isAdmin();
    return (
      <div className="fluid-container">
        <div className="card-deck">
          {newss.map(news => (
            <div
              key={news._id}
              className="card card-news m-2"
              style={{
                borderRadius: 0,
                height: "50vh",
                background:
                  "linear-gradient(rgba(10, 87, 128, 0.4), rgba(10, 87, 128, 0.4)),url(" +
                  news.shortImage +
                  ")"
              }}
            >
              <div className="card-body d-flex flex-column justify-content-end">
                <div className="row">
                  <h5 className="card-title">
                    <span className="inner-shadow-emg  white-emg">
                      {news.title}
                    </span>
                  </h5>
                  <p className="card-text white-emg">
                    {news.shortDesc} Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Ab in sunt ratione! Eius atque
                    necessitatibus temporibus? Fuga repellendus delectus
                    sapiente quis beatae similique animi vitae ut. Odit
                    assumenda veritatis magnam.
                  </p>

                  {isAdmin && (
                    <React.Fragment>
                      <Link
                        to={"/news/" + news._id}
                        className="mt-auto card-btn btn btn-primary"
                      >
                        Edit
                      </Link>

                      <Button
                        onClick={() => onDelete(news)}
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
              <div className="card-footer">
                <small className="text-muted row justify-content-between">
                  <div>
                    <a href="#" className="card-link white-emg">
                      <FontAwesome className="fab fa-facebook-f"></FontAwesome>
                    </a>
                    <a href="#" className="card-link white-emg">
                      <FontAwesome className="fab fa-twitter"></FontAwesome>
                    </a>
                  </div>
                  <span class="color-white">
                    <Moment format="DD MM YYYY" withTitle>
                      {news.publishDate}
                    </Moment>
                  </span>
                  {!isAdmin && (
                    <Link
                      className="card-link white-emg"
                      to={"/news/" + news._id}
                    >
                      Read More
                    </Link>
                  )}
                </small>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default NewsFlex;
