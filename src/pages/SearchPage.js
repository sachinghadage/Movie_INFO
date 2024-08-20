import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination';
import { fetchSearchResults } from '../api/api';

function SearchPage() {
  const query = new URLSearchParams(useLocation().search).get('query');
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const loadMovies = async () => {
      const data = await fetchSearchResults(query, page);
      setMovies(data.results);
    };
    loadMovies();
  }, [query, page]);

  return (
    <div>
      <h1>Search Results for "{query}"</h1>
      <div className="movie-list">
        {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </div>
      <Pagination currentPage={page} totalPages={10} onPageChange={setPage} />
    </div>
  );
}

export default SearchPage;
