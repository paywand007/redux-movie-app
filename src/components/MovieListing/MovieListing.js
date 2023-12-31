import React from 'react'
import { useSelector } from "react-redux";
import { getAllMovies , getAllShows } from "../../features/movies/movieSlice";
import MovieCard from '../MovieCard/MovieCard'
import './MovieListing.scss'
function MovieListing() {
  const movies=useSelector(getAllMovies)
  const shows=useSelector(getAllShows)
 
  let renderMovies='';
  renderMovies =
  movies.Response === "True" ? (
    movies.Search.map((movie, index) => (
      <MovieCard key={index} data={movie} />
    ))
  ) : (
    <div className="movies-error">
      <h3>{movies.Error}</h3>
    </div>
  );
  let renderShows='';
  renderShows =
  movies.Response === "True" ? (
    movies.Search.map((movie, index) => (
      <MovieCard key={index} data={movie} />
    ))
  ) : (
    <div className="movies-error">
      <h3>{movies.Error}</h3>
    </div>
  );
  return (
    <div className="movie-wrapper">
    <div className="movie-show">
      <h2>Movies</h2>
      <div className="movie-container">{renderMovies}</div>
    </div>
    <div className="movie-show">
      <h2>Shows</h2>
      <div className="movie-container">{renderShows}</div>
    </div>
    </div>
  )
}

export default MovieListing