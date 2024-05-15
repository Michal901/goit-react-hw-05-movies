import PropTypes from 'prop-types';

import { useState } from 'react';

import { DataFetcher } from 'components/DataFetcher/DataFetcher';
import { MoviesList } from 'components/MoviesList/MoviesList';

import { API_KEY } from 'constants/API_KEY/ApiKey';

import styles from './Home.module.css';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  return (
    <div className={styles.home}>
      <DataFetcher
        url={`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`}
        setData={setMovies}
        dataType="results"
      />
      <h1>Trending Movies</h1>
      <ul className={styles.homeList}>
        <MoviesList movies={movies} />
      </ul>
    </div>
  );
};
Home.propTypes = {
  movies: PropTypes.array.isRequired,
};
