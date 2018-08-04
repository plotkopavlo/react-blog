import React, { Component } from "react";
import Post from "./Post";
//  import preload from "../../data.json";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {}  ;

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }

  handleSearchTermChange(event) {
    this.state={}
    console.log(event);
  }
  render() {
    return (
      <section className="post-list">
        <h1 className="post-list__title">Blog List</h1>

        <Post />
        <Post />
      </section>
    );
  }
}

export default PostList;
