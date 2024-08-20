import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination';
import { fetchPopularMovies } from '../api/api';

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchPopularMovies(page);
      setMovies(data.results);
    };
    loadMovies();
  }, [page]);

  return (
    <div>
      <h1>Popular Movies</h1>
      <div className="movie-list">
        {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </div>
      <Pagination currentPage={page} totalPages={10} onPageChange={setPage} />
    </div>
  );
}

export default HomePage;
