import axios from 'axios';

const API_KEY = 'c45a857c193f6302f2b5061c3b85e743';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchPopularMovies = (page) => {
  return axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`)
    .then(response => response.data);
};

export const fetchTopRatedMovies = (page) => {
  return axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`)
    .then(response => response.data);
};

export const fetchUpcomingMovies = (page) => {
  return axios.get(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`)
    .then(response => response.data);
};

export const fetchMovieDetails = (id) => {
  return axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`)
    .then(response => response.data);
};

export const fetchMovieCast = (id) => {
  return axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
    .then(response => response.data);
};

export const fetchSearchResults = (query, page) => {
  return axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`)
    .then(response => response.data);
};
