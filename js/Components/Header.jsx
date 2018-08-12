import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <header className="header">
        <div className="header__right">
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="/" className="nav__link">
                  1
                </a>
              </li>
              <li className="nav__item">
                <a href="/" className="nav__link">
                  2
                </a>
              </li>
              <li className="nav__item">
                <a href="/" className="nav__link">
                  3
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header__left search">
          <label htmlFor="search-input"> Search post</label>
          <input type="text" className="search__input" id="search__input" />
        </div>
      </header>
    );
  }
}

export default Header;
