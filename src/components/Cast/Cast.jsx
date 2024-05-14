import axios from 'axios';
import { API_KEY } from 'constants/API_KEY/ApiKey';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
        );
        setMovieDetails(response.data.cast);
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
        {movieDetails.map(movie => (
          <li key={movie.id}>
            <p>{movie.name}</p>
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.profile_path}`}
              alt={movie.name}
            />
            <div>
              <p>Character:</p>
              <p>{movie.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
