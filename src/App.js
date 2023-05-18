import './App.css';
import Login from './pages/Login';
import { useNavigate, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Users from './pages/components/Users';
import Orders from './pages/components/Orders';
import Usersniveluno from './pages/components/Usersniveluno'
import Usersniveldos from './pages/components/Usersniveldos'
import Usersniveltres from './pages/components/Usersniveltres'
import Appcarousel from './pages/Appcarousel';
function App() {

  const navigate = useNavigate()
  const goLogin = () => {
    navigate("/Login")
   }
  const goDashboard = () => {
   navigate("/Dashboard")
  }
  return (


    <div>
      <Appcarousel/> 
        <button onMouseOver={goLogin}>
          <Link to="/Login">Login </Link>
        </button>
        <button onMouseOver={goDashboard}>
          <Link to="/Dashboard">Dashboard</Link>  
        </button>
       
      <Routes>
        <Route exact path="/react-dummy" element={<Login />}></Route> 
        <Route path="/dashboard" element={<Dashboard />} >
          <Route path="users" element={<Users />}>
            <Route path='usersniveluno' element={<Usersniveluno />}></Route>
            <Route path='usersniveldos' element={<Usersniveldos />}></Route>
            <Route path='usersniveltres' element={<Usersniveltres />}></Route>
          </Route>
          <Route path="orders" element={<Orders />}></Route> 
        </Route>
      </Routes>
   </div>
  );
}

export default App;

/*
import './App.css';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Users from './pages/components/Users';
import Orders from './pages/components/Orders';

function App() {
  return (
    <BrowserRouter basename="/react-dummy">
      <nav>
        <Link to="/Login">Login </Link>
        <Link to="/Dashboard">Dashboard</Link>
      </nav>
      <Routes>
        <Route exact path="/react-dummy" element={<Login />}></Route> 
        <Route path="/dashboard" element={<Dashboard />} >
          <Route path="users" element={<Users />}></Route> 
          <Route path="orders" element={<Orders />}></Route> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
*/

/*

 const navigate = useNavigate()

    const goLogin = () => {
        navigate("/Login")
    }
    const goDashboard = () => {
        navigate("/Dashboard")
    }

<div>
            <button onMouseOver={goLogin}>
                <Link to="/Login">Login </Link>
              </button>
              <button onMouseOver={goDashboard}>
                <Link to="/Dashboard">Dashboard</Link>  
              </button>
            </div>
            */
           
/*
codigo 2
import './App.css';
import Login from './pages/Login';
import { useNavigate, BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Users from './pages/components/Users';
import Orders from './pages/components/Orders';
import Usersniveluno from './pages/components/Usersniveluno'
import Usersniveldos from './pages/components/Usersniveldos'
import Usersniveltres from './pages/components/Usersniveltres'
function App() {

  const navigate = useNavigate()
  const goLogin = () => {
    navigate("/Login")
   }
  const goDashboard = () => {
   navigate("/Dashboard")
  }
  return (
    <BrowserRouter basename="/react-dummy">

      <nav>
        <Link to="/Login">Login </Link>
        <Link to="/Dashboard">Dashboard</Link>
      </nav>
      <Routes>
        <Route exact path="/react-dummy" element={<Login />}></Route> 
        <Route path="/dashboard" element={<Dashboard />} >
          <Route path="users" element={<Users />}>
            <Route path='usersniveluno' element={<Usersniveluno />}></Route>
            <Route path='usersniveldos' element={<Usersniveldos />}></Route>
            <Route path='usersniveltres' element={<Usersniveltres />}></Route>
          </Route>
          <Route path="orders" element={<Orders />}></Route> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

*/