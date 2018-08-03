import React, { Component } from 'react';
import ShowCard from './ShowCard';
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
            <article className="post">
                <h1 className="post__title">
                    <a href={this.state.link} className="post__link">{this.state.title}</a>
                </h1>
                <div className="post__text">{this.state.text}</div>
                <div className="post__picture">
                    <a href={this.state.link} className="post__link-picture">
                        <img src={this.state.img-src} alt={this.state.img-alt} className="post__img"/>
                    </a>
                </div>


            </article>
        );
    }
}

export default Search;
