import React from 'react';
import MovieList from '../components/MovieList';
import './Main.css';

class Main extends React.Component
{
    state = {
        movies:[]
    }

    componentDidMount()
    {
        fetch('https://www.omdbapi.com/?i=tt3896198&apikey=a088b214&s=terminator')
        .then(responce => responce.json())
        .then(data => this.setState({movies:data.Search}))
        console.log(this.state.movies);
    }

    render()
    {
        const {movies} = this.state;
        console.log(movies);
        return(
            <div className="main">
                <div className="wrap">
                    {
                        this.state.movies.length ? <MovieList movies={movies} /> : <h3>Loading data...</h3>
                    }                    
                </div>
            </div>
        )
    }
}

export default Main;