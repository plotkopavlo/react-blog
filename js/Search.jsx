import React, { Component } from "react";
import ShowCard from "./ShowCard";
import preload from "../data.json";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }

  handleSearchTermChange(event) {
    this.setState({ searchTerm: event.target.value });
  }
  render() {
    return (
      <div className="search">
        <header>
          <h1>svideo</h1>
          <input
            onChange={this.handleSearchTermChange}
            value={this.state.searchTerm}
            type="text"
            placeholder="Search"
          />
        </header>
        <div>
          {preload.shows
            .filter(
              show =>
                `${show.title} ${show.description}`
                  .toUpperCase()
                  .indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map(show => (
              <ShowCard key={show.imdbID} {...show} />
            ))}
        </div>
      </div>
    );
  }
}

export default Search;
