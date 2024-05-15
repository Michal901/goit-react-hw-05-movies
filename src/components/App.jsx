import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Movies } from '../pages/Movies/Movies';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { SharedLayout } from './SharedLayout/SharedLayout';

// const Home = lazy(() => import('../components/Home/Home'));
// const Movies = lazy(() => import('../components/Movies/Movies'));
// const MovieDetails = lazy(() =>
//   import('../components/MovieDetails/MovieDetails')
// );
// const Cast = lazy(() => import('../components/Cast/Cast'));
// const Reviews = lazy(() => import('../components/Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};
