import { API_KEY } from 'constants/API_KEY/ApiKey';
import styles from './Movies.module.css';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Movies = () => {
  const [movieSearch, setMovieSearch] = useState('');
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie
?api_key=${API_KEY}&query=${movieSearch}`
      );

      setMovies(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.moviesWrapper}>
      <input
        onChange={e => {
          setMovieSearch(e.target.value);
        }}
        type="text"
      />
      <button onClick={fetchMovies}>Search</button>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link>{movie.title || movie.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
