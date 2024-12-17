import Movie from "./Movie";
import './MovieList.css';

function MovieList(props)
{    
    console.log("MovieList");
    console.log(props.movies);
    console.log("===================");
    return(
        <div className="movies">
        {
            !props.movies ? <h2>Введите поисковый запрос</h2> : props.movies.map(m => {return <Movie key={m.imdbID}{...m}/>})
        }           
        </div>
    )
}
export default MovieList;