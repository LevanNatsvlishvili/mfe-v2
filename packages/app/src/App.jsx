import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Users from './pages/users';

function App() {
  return (
    <div>
      <BrowserRouter basename="/app">
        <header>
          <h1>App route</h1>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="users">Users</Link> {/* Link to 'users' instead of '/users' */}
            </li>
          </ul>
        </header>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} /> {/* This will render on '/app/' */}
          <Route path="users" element={<Users />} /> {/* This will render on '/app/users' */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
