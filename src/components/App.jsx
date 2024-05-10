import { Routes, Route, Link } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast " element={<Team />} />
          <Route path="reviews " element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
