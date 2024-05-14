import React, { useState } from 'react';
import { DataFetcher } from '../DataFetcher/DataFetcher';
import { useParams } from 'react-router-dom';
import { API_KEY } from 'constants/API_KEY/ApiKey';

export const Reviews = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();

  return (
    <div>
      <h1>Movie Reviews</h1>
      <DataFetcher
        url={`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`}
        setData={setMovieDetails}
      />
      {movieDetails && (
        <ul>
          {movieDetails.length > 0 ? (
            movieDetails.map(movie => (
              <li key={movie.id}>
                <h4>{movie.author}</h4>
                <p>{movie.content}</p>
              </li>
            ))
          ) : (
            <li>There are no reviews</li>
          )}
        </ul>
      )}
      {console.log(movieDetails)}
    </div>
  );
};
