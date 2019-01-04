import React from 'react';
import axios from 'axios';
import { MoviePoster } from './MoviePoster';

export class  ApiCall extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            title: 'Star Wars',
            movies: []};

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    removeSpaces(oldString) {
        const newString = oldString.replace(/\s/g, "_");
        return newString;
    }

    componentDidMount() {
        this.makeApiCall();
    }

    makeApiCall() {
        axios.get(`http://www.omdbapi.com/?s=${this.removeSpaces(this.state.title)}&type=movie&apikey=9842bc6f`)
            .then(res => {
                const movies = res.data.Search.map(obj => obj);
                this.setState({ movies: movies });
            })
            .catch(error => {
                console.log(error, 'Movie does not exist.');
            });
    }

    handleInputChange(e) {
        const title = e.target.value;
        this.setState({ title: title });
    }

    handleClick(e) {
        this.makeApiCall();
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <input onChange={this.handleInputChange} value={this.state.title}/>
                <button onClick={this.handleClick} />
                <ul>
                    {this.state.movies.map(movie => 
                        <li key={movie.imdbID}>
                            <p >{movie.Title}</p>
                            <MoviePoster link={movie.Poster} />
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}