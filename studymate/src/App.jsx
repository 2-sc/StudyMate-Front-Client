import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import StopWatch from './pages/stopwatch/StopWatch';
import Planner from './pages/planner/Planner';
import Log from './pages/log/Log';
import Layout from './styles/layout/Layout';
import EditProfile from './pages/editprofile/EditProfile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/stopwatch" element={<Layout component={<StopWatch />} />} />
      <Route path="/planner" element={<Layout component={<Planner />} />} />
      <Route path="/log" element={<Layout component={<Log />} />} />
      <Route path="/editprofile" element={<Layout component={<EditProfile />} />} />
    </Routes>
  );
}

export default App;
