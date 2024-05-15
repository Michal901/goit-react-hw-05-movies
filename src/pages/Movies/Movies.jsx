import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DataFetcher } from 'components/DataFetcher/DataFetcher';
import { API_KEY } from 'constants/API_KEY/ApiKey';
import styles from './Movies.module.css';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [searching, setSearching] = useState(false);

  const handleSearch = () => {
    setSearching(true);

    setTimeout(() => {
      setSearching(false);
    }, 500);
  };

  return (
    <div className={styles.moviesWrapper}>
      {searching && (
        <DataFetcher
          url={`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchParams.get(
            'query'
          )}`}
          dataType="results"
          setData={setMovies}
        />
      )}
      <input
        onChange={e => {
          setSearchParams({ query: e.target.value });
        }}
        type="text"
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        <MoviesList movies={movies} />
      </ul>
    </div>
  );
};
