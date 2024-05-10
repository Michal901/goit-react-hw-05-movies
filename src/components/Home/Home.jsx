import { useState, useEffect } from 'react';
import axios from 'axios';

import { API_KEY } from 'constants/API_KEY/ApiKey';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
        );

        setTrendingMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    console.log(trendingMovies);
    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>{movie.title || movie.name}</li>
        ))}
      </ul>
    </div>
  );
};
