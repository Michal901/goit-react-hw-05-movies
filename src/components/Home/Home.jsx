import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { API_KEY } from 'constants/API_KEY/ApiKey';

import styles from './Home.module.css';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
        );
        console.log(response);
        setTrendingMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <div className={styles.home}>
      <h1>Trending Movies</h1>
      <ul className={styles.homeList}>
        {trendingMovies.map(movie => (
          <Link to={`/movies/${movie.id}`} key={movie.id}>
            {movie.title || movie.name}
          </Link>
        ))}
      </ul>
    </div>
  );
};
