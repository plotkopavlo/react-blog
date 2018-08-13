import React, { Component } from "react";
import { string } from "prop-types";
import styled from "styled-components";
import Post from "./Post";
import preload from "../../data-blog.json";

const Wrapper = styled.section`
  .posts__list {
    display: grid;
    margin-left: auto;
    margin-right: auto;
    grid-gap: 30px 10px;
    @media only screen and (min-width: 768px) and (max-width: 992px) {
      grid-template-columns: 1fr 1fr;
    }
    @media only screen and (min-width: 992px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.className = props.className || "";

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }

  handleSearchTermChange(event) {
    this.state = {};
    console.log(event);
  }
  render() {
    return (
      <Wrapper className={`${this.className} posts`}>
        <h1 className="posts__title">Blog List</h1>
        <ul className="posts__list">
          {preload.posts.map(post => (
            <li className="posts__item">
              <Post className="posts__post" {...post} />
            </li>
          ))}
        </ul>
      </Wrapper>
    );
  }
}

PostList.propTypes = {
  className: string.isRequired
};
export default PostList;
