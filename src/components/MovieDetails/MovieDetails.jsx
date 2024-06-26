import PropTypes from 'prop-types';

import { useState } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { API_KEY } from 'constants/API_KEY/ApiKey';
import { DataFetcher } from 'components/DataFetcher/DataFetcher';
import styles from './MovieDetails.module.css';
import { FaArrowLeft } from 'react-icons/fa';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <>
      <DataFetcher
        url={`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`}
        setData={setMovieDetails}
        dataType="data"
      />
      {movieDetails ? (
        <div className={styles.movieDetails}>
          <Link className={styles.backBtn} to={backLinkHref}>
            <FaArrowLeft />
            Back to home
          </Link>
          <div className={styles.containerr}>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
                alt={movieDetails.title}
              />
            </div>
            <div className={styles.wrapper}>
              <h2>{movieDetails.title}</h2>
              <p>
                User score:{' '}
                <strong>
                  {`${Math.floor(movieDetails.vote_average * 10)} %`}
                </strong>
              </p>
              <p className={styles.movieDescription}>{movieDetails.overview}</p>
            </div>
          </div>

          <div className={styles.infoCont}>
            <p>Additional information:</p>
            <div className={styles.infoWrapper}>
              <Link to={`/movies/${movieId}/cast`}>Cast</Link>
              <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
            </div>
          </div>

          <Outlet />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};
MovieDetails.propTypes = {
  movieId: PropTypes.string.isRequired,
};
