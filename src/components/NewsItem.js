import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, publishedAt, source } = this.props;
    return (
      <div className="my-3">
        <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'50%', zIndex:1}}>
    {source}
  </span>
          <img
            src={
              !imageUrl
                ? "https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/eibb2yvzsycqlyqr_1631454153.jpeg"
                : imageUrl
            }
            className="card-img-top"
            alt=".."
          />
          <div className="card-body">
          <span className="badge bg-primary">New</span>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            
            <p className="card-footer text-success">By {!author?'Unknown':author} at {new Date(publishedAt).toGMTString()}</p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
