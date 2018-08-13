import React from "react";
import styled from "styled-components";
import PostList from "./Components/PostList";
import TagsList from "./Components/TagsList";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  grid-row-gap: 10px;

  @media only screen and (min-width: 768px) {
    grid-template-columns: 5% 1fr 200px 5%;
    grid-template-rows: 60px auto 100px;
    grid-row-gap: 30px;
    grid-template-areas:
      "header header header header  "
      ". content sidebar ."
      "footer footer footer footer";
    .blog__header {
      grid-area: header;
    }
    .blog__tags {
      grid-area: sidebar;
    }
    .blog__posts {
      grid-area: content;
    }
    .blog__footer {
      grid-area: footer;
    }
  }
`;

const Landing = () => (
  <Wrapper className="wrapper">
    <Header className="blog__header" />
    <TagsList className="blog__tags" />
    <PostList className="blog__posts" />
    <Footer className="blog__footer" />
  </Wrapper>
);

export default Landing;
