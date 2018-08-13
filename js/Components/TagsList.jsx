import React, { Component } from "react";
import { string } from "prop-types";


class TagsList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.className = props.className || '';
  }
  render() {
    return (
      <div className={`${this.className} tags`}>
        <ul className="tags__list">
          <li className="tags__item">smile</li>
          <li className="tags__item">hello</li>
          <li className="tags__item">array</li>
        </ul>
      </div>

    );
  }
}
TagsList.propTypes = {
  className: string.isRequired
};
export default TagsList;
