import { useState, useEffect } from 'react';
import axios from 'axios';

import { API_KEY } from 'constants/API_KEY/ApiKey';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = () => {
      try {
        const response = axios.get(
          `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
        );
        setTrendingMovies(response.data.results);
        console.log(trendingMovies);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      <ul></ul>
    </div>
  );
};
