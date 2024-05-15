import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

export const MoviesList = ({ movies }) => {
  return (
    <>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title || movie.name}</Link>
        </li>
      ))}
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
};
