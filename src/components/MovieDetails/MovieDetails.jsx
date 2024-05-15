import { useState } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { API_KEY } from 'constants/API_KEY/ApiKey';
import { DataFetcher } from 'components/DataFetcher/DataFetcher';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <div>
      <DataFetcher
        url={`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`}
        setData={setMovieDetails}
        dataType="data"
      />
      {movieDetails ? (
        <div>
          <Link to={backLinkHref}>Back to home</Link>
          <h2>{movieDetails.title}</h2>
          <p>User score: {`${Math.floor(movieDetails.vote_average * 10)} %`}</p>
          <p>{movieDetails.overview}</p>
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
