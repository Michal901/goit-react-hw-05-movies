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

// import { lazy, Suspense } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import { SuspenseFallback } from '../components/SuspenseFallback/SuspenseFallback';

// const Home = lazy(() => import('../pages/Home/Home'));
// const Movies = lazy(() => import('../pages/Movies/Movies'));
// const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
// const Cast = lazy(() => import('./Cast/Cast'));
// const Reviews = lazy(() => import('./Reviews/Reviews'));
// const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));

// export const App = () => {
//   return (
//     <div>
//       <Suspense fallback={<SuspenseFallback />}>
//         <Routes>
//           <Route path="/" element={<SharedLayout />}>
//             <Route index element={<Home />} />
//             <Route path="/movies" element={<Movies />} />
//             <Route path="/movies/:movieId" element={<MovieDetails />}>
//               <Route path="cast" element={<Cast />} />
//               <Route path="reviews" element={<Reviews />} />
//             </Route>
//             <Route path="*" element={<Home />} />
//           </Route>
//         </Routes>
//       </Suspense>
//     </div>
//   );
// };
