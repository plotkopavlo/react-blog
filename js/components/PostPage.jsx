import React, { Component } from 'react';
import PostList from './PostList';

import preload from '../data.json';

class Search extends Component {
    state = {
        searchTerm: ''
    };
    handleSearchTermChange = event => {
        this.setState({ searchTerm: event.target.value });
    };
    render() {
        return (
            <div className="post-page">
                <header>
                    <h1>Blog</h1>

                </header>
                <div>

            </div>
        );
    }
}

export default Search;
