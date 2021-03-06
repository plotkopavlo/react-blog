import React, { Component } from "react";
import PropTypes, { string } from "prop-types";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      dateCreate: props.dateCreate || "Aug 8",
      timeRead: props.timeRead || "4 min read",
      image: {
        src: `/public/img/posters/${props.image.src}`,
        alt: props.image.alt
      }
    };
  }

  render() {
    return (
      <article className="post">
          <a href="" className="post__picture">
            <img
              src={this.state.image.src}
              alt={this.state.image.alt}
              width="200px"
              className="post__img"
            />
          </a>
        <h1 className="post__title">
          <a href={this.state.href}>{this.state.title}</a>
        </h1>
      <div className="post__details">
        <div className="post__timeCreate">{this.state.dateCreate}</div>
        <div className="post__timeCreate">{this.state.timeRead}</div>
      </div>
      </article>
    );
  }
}
Post.propTypes = {
  title: string.isRequired,
  image: PropTypes.shape({
    src: string.isRequired,
    alt: string.isRequired
  })
};

export default Post;
