import React from 'react';
import MovieList from '../components/MovieList';
import Preloader from '../components/Preloader';
import Search from '../components/Search';
import './Main.css';

class Main extends React.Component
{
    state = {
        movies:[]
    }

    componentDidMount()
    {
        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=a088b214&s=terminator`)
        .then(response => response.json())
        .then(data => this.setState({movies:data.Search}))
        console.log(this.state.movies);
    }

    searchMovie = (str) =>
    {
        console.log('SearchMovieHandler:');
        console.log(str);
        this.setState({loading:true})
        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=a088b214&s=${str}`)
        .then(response => response.json())
        .then(data => this.setState({movies:data.Search}))
    }

    render()
    {
        const {movies} = this.state;
        console.log(movies);
        return(
            <div className="main">
                <div className="wrap">
                    <Search searchMovie={this.searchMovie} />                
                    {
                        //this.state.movies.length ? <MovieList movies={movies} /> : <h3>Loading data...</h3>
                        this.state.movies.length ? <MovieList movies={movies} /> : <Preloader/>
                    }                    
                </div>
            </div>
        )
    }
}

export default Main;