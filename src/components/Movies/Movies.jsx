import { API_KEY } from 'constants/API_KEY/ApiKey';
import styles from './Movies.module.css';
import { useState } from 'react';
import axios from 'axios';
import { Link, useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchParams.get(
          'query'
        )}`
      );

      setMovies(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = () => {
    fetchMovies();
  };

  return (
    <div className={styles.moviesWrapper}>
      <input
        onChange={e => {
          setSearchParams({ query: e.target.value });
        }}
        type="text"
      />
      <button onClick={handleSearch}>Search</button>{' '}
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/${movie.id}`}>{movie.title || movie.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
