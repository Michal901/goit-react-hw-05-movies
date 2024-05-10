import { useState, useEffect } from 'react';
import axios from 'axios';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState('');

  return (
    <div>
      <h1>Trending Movies</h1>
      <ul></ul>
    </div>
  );
};
