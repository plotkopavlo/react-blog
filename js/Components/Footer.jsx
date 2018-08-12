import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ul className="tags__list">
        <li className="tags__item">Faccebok</li>
        <li className="tags__item">Twitter</li>
      </ul>
    );
  }
}

export default Footer;
