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
              <Link to="dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="users">Users</Link>
            </li>
          </ul>
        </header>
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
