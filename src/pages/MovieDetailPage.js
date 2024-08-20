import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CastList from '../components/CastList';
import { fetchMovieDetails, fetchMovieCast } from '../api/api';
import './MovieDetailPage.css';

function MovieDetailPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const loadMovieDetails = async () => {
      const movieData = await fetchMovieDetails(id);
      setMovie(movieData);
      const castData = await fetchMovieCast(id);
      setCast(castData.cast);
    };
    loadMovieDetails();
  }, [id]);

  return (
    <div className="movie-detail-page">
      {movie && (
        <div className="movie-detail-container">
          <div className="movie-detail-left">
            <div className="small-banner">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="movie-info">
                <h1>{movie.title}</h1>
                <p><strong>Rating:</strong> {movie.vote_average}</p>
                <p><strong>Duration:</strong> {movie.runtime} minutes</p>
                <p><strong>Genre:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
                <p><strong>Release Date:</strong> {movie.release_date}</p>
                <p>{movie.overview}</p>
              </div>
            </div>
          </div>
          <div className="movie-detail-right">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt={movie.title}
              className="large-banner"
            />
          </div>
        </div>
      )}
      <div className="cast-section">
        <h2>Cast</h2>
        <CastList cast={cast} />
      </div>
    </div>
  );
}

export default MovieDetailPage;
