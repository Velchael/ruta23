import './App.css';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Users from './pages/components/Users';
import Orders from './pages/components/Orders';

function App() {
  return (
    <BrowserRouter basename='/react-dummy'>
       <nav>
         <Link to="/Login">Login </Link>
         <Link to="/Dashboard">Dashboard</Link>
       </nav>
      <Routes>
        <Route path="/react-dummy" element={<Login />} />
        <Route path="/dashboard/" element={<Dashboard />} >
          <Route path="users" element={<Users />} />
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
