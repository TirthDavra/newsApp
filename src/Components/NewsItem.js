import React from 'react'

const NewsItem = (props) => {

    let { title, description, imageurl, newsUrl, author, date, source, } = props;
    return (
      <div className="my-3">
        <div className="card" >
          <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: '1' }}>
            {source}
          </span>
          <img src={imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted"> By {!author ? "Unknown" : author} on {new Date(date).toDateString()} </small></p>
            <a href={newsUrl} className="btn btn-sm btn-primary">Read more</a>
          </div>
        </div>
      </div>
    )
  
}

export default NewsItem
