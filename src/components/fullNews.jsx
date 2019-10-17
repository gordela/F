import React, { Component } from "react";
import { getNew } from "../services/newsService";

class FullNews extends Component {
  state = { news: {} };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const { data } = await getNew(id);
    this.setState({ news: data });
  }

  render() {
    const { title, longDesc, longImage } = this.state.news;
    return (
      <React.Fragment>
        <div className="container pt-5">
          <h1 className="currentPageTitle ">NEWS & MEDIA</h1>
          <h5 className="color-emg pb-4">{title}</h5>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <p>{longDesc}</p>
            </div>
            <div className="col-6">
              <img src={longImage} alt={title} className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="container p-5"></div>
      </React.Fragment>
    );
  }
}

export default FullNews;
