import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import App from 'App';
// import Home from 'home/App';
import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';

const Home = lazy(() => import('home/MFE'));
const Profile = lazy(() => import('profile/MFE'));
const App = lazy(() => import('app/MFE'));

function Bootstrap() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <header>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/app">App</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app" element={<App />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default Bootstrap;
