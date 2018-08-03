import React, { Component } from 'react';
import Post from './Post';
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
            <div className="post-list">
                <ul className="post-list__list">
                    {preload.posts

                        .map(post => <Post key={post.id} {...post}/>)}
                </ul>
            </div>
        );
    }
}

export default Search;
