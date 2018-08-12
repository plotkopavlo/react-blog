import React from 'react';
import PostList from "./Components/PostList";
import TagsList from "./Components/TagsList";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const Landing = () => (
  <div className="wrapper">
    <Header className="blog__header" />
    <PostList className="blog__posts" />
    <TagsList className="blog__tags tags" />
    <Footer className="blog__footer" />
  </div>
);

export default Landing;
