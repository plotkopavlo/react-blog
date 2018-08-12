import React, { Component } from "react";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      text: props.text,
      image: {
        src: `/public/img/posters/${props.image.src}`,
        alt: props.image.alt
      }
    };
  }

  render() {
    return (
      <article className="post">
        <h1 className="post__title">
          <a href={this.state.href}>{this.state.title}</a>
        </h1>
        <div className="post__text">{this.state.text}</div>

        <div className="post__picture">
          <a href="">
            <img
              src={this.state.image.src}
              alt={this.state.image.alt}
              width="200px"
              className="post__img"
            />
          </a>
        </div>
      </article>
    );
  }
}

export default Post;
