import React, { Component } from "react";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }

  handleSearchTermChange(event) {
    this.state = {};
    console.log(event);
  }
  render() {
    return (
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item"><a href="/" className="nav__link">1</a></li>
          <li className="nav__item"><a href="/" className="nav__link">2</a></li>
          <li className="nav__item"><a href="/" className="nav__link">3</a></li>
        </ul>
      </nav>
    );
  }
}

export default PostList;
