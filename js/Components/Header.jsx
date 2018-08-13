import React, { Component } from "react";
import { string } from "prop-types";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 12px;
  padding-right: 16px;
  padding-bottom: 12px;
  padding-left: 16px;
  background-color: #fafafa;
  .nav__list {
    display: flex;
  }
  .nav__item {
    margin-right: 4px;
  }
  .nav__link {
    display: block;
    text-decoration: none;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-right: 10px;
    padding-left: 10px;
    color: #777;
  }
  .nav__link:hover,
  .nav__link:focus {
    color: #222;
  }
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.className = props.className || "";
  }
  render() {
    return (
      <HeaderWrapper className={`${this.className} header`}>
        <nav className="header__nav nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="/blog" className="nav__link">
                1
              </a>
            </li>
            <li className="nav__item">
              <a href="/blog" className="nav__link">
                2
              </a>
            </li>
            <li className="nav__item">
              <a href="/blog" className="nav__link">
                3
              </a>
            </li>
          </ul>
        </nav>
        <div className="header__left search">
          <label htmlFor="search-input"> Search post</label>
          <input type="text" className="search__input" id="search__input" />
        </div>
      </HeaderWrapper>
    );
  }
}
Header.propTypes = {
  className: string.isRequired
};
export default Header;
