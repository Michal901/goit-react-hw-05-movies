import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { API_KEY } from 'constants/API_KEY/ApiKey';
import axios from 'axios';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
        );
        setMovieDetails(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <div>
      {movieDetails ? (
        <div>
          <h2>{movieDetails.title}</h2>
          <p>User score: {`${Math.floor(movieDetails.vote_average * 10)} %`}</p>
          <p>{movieDetails.overview}</p>
          {/* Wyświetl inne szczegóły filmu */}
          <div>
            <p>Additional information:</p>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </div>
          <Outlet />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
