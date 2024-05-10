import styles from './Movies.module.css';
import { useState } from 'react';

export const Movies = () => {
  const [movieSearch, setMovieSearch] = useState('');

  console.log(movieSearch);

  return (
    <div className={styles.moviesWrapper}>
      <input
        onChange={e => {
          setMovieSearch(e.target.value);
        }}
        type="text"
      />
      <button>Search</button>
    </div>
  );
};
