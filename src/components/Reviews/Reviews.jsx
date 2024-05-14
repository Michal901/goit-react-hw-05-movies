import axios from 'axios';
import { API_KEY } from 'constants/API_KEY/ApiKey';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`
        );
        setMovieDetails(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ul>
        {movieDetails.length > 0 ? (
          movieDetails.map(movie => (
            <li key={movie.id}>
              <h4>{movie.author}</h4>
              <p>{movie.content}</p>
            </li>
          ))
        ) : (
          <li>There is no reviews</li>
        )}
      </ul>
    </>
  );
};
