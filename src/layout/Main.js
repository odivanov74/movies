import React from 'react';
import MovieList from '../components/MovieList';
import Preloader from '../components/Preloader';
import Search from '../components/Search';
import './Main.css';

class Main extends React.Component
{
    state = {
        movies:[],
        loading: true,
        total:0,
        lastSearch:"Terminator",
        currentPage:1,
        filter:"all"
    }

    componentDidMount()
    {       
        this.setState({loading:true}); 
        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=a088b214&s=terminator`)
        .then(response => response.json())        
        .then(data => this.setState({movies:data.Search, loading:false, total: data.totalResults}));
        !this.state.loading ? console.log(this.state.movies) : console.log("loading...");
        //console.log(this.state.movies);
    }

    searchMovie = (str, type='all', page) =>
    { 
        this.setState({loading:true});
        fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=a088b214&s=${str}${type !== 'all' ? `&type=${type}` : ``}${`&page=${page}`}` )
        .then(response => response.json())        
        .then(data => {           
            this.setState({lastSearch:str, currentPage: page, filter: type, movies:data.Search, loading:false, total: data.totalResults});
        })
        !this.state.loading ? console.log(this.state.movies) : console.log("loading...");
        console.log("main");
        console.log(this.state.lastSearch);
        console.log(page);
        console.log(this.state.total);        
        
    }

    render()
    {        
        const {movies} = this.state;
        //!this.state.loading ? console.log(movies) : console.log("loading...");
        if(!this.state.loading)
        {
            return(
                <div className="main">
                    <div className="wrap">
                        <Search searchMovie={this.searchMovie} totalItems = {this.state.total} lastSearch = {this.state.lastSearch} currentPage = {this.state.currentPage} filter = {this.state.filter}/> 
                        <MovieList movies={movies} />                                         
                    </div>
                </div>
            )
        }
        else
        {
            return(
                <div className="main">
                    <div className="wrap">
                        <Preloader/>                                           
                    </div>
                </div>
            )
        }
        
    }
}

export default Main;