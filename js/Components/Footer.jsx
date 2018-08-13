import React, { Component } from "react";
import { string } from "prop-types";
import styled from "styled-components";
import Header from "./Header";

const Wrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 12px;
  padding-right: 16px;
  padding-bottom: 12px;
  padding-left: 16px;
  background-color: #fafafa;
`;

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.className = props.className || "";
  }
  render() {
    return (
      <Wrapper className={`${this.className} footer`}>
        <ul className="footer__list">
          <li className="footer__item">Faccebok</li>
          <li className="footer__item">Twitter</li>
        </ul>
      </Wrapper>
    );
  }
}
Header.propTypes = {
  className: string.isRequired
};
export default Footer;
