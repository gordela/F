import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import auth from "../services/authService";

class NewsFlex extends Component {
  render() {
    const { newss, onDelete } = this.props;
    const isAdmin = auth.isAdmin();
    return (
      <div>
        <hr />
        {newss.map(news => (
          <div key={news._id} className="card mb-4">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <Link to={"/news/" + news._id}>
                    <img
                      className="img-fluid rounded"
                      src={news.shortImage}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="col-lg-6">
                  <h2 className="card-title">Post Title</h2>
                  <p className="card-text">{news.shortDesc}</p>

                  {isAdmin && (
                    <React.Fragment>
                      <Link
                        to={"/project/" + news._id}
                        className="mt-auto card-btn btn btn-primary"
                      >
                        Read More
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
            </div>
            <div className="card-footer text-muted">
              {Date(news.publishDate)}

              {!isAdmin && (
                <Link
                  to={"/news/" + news._id}
                  className="mt-auto card-btn btn btn-primary float-right"
                >
                  Read More
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default NewsFlex;
