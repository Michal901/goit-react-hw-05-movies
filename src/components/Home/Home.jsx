import { Link } from 'react-router-dom';
import { useState } from 'react';

import { API_KEY } from 'constants/API_KEY/ApiKey';

import styles from './Home.module.css';
import { DataFetcher } from 'components/DataFetcher/DataFetcher';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  return (
    <div className={styles.home}>
      <DataFetcher
        url={`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`}
        setData={setTrendingMovies}
        dataType="results"
      />
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
