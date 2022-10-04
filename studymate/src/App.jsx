import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import StopWatch from "./pages/stopwatch/StopWatch";
import Planner from "./pages/planner/Planner";
import Log from "./pages/log/Log";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/stopwatch" element={<StopWatch />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/log" element={<Log />} />
      </Routes>
    </div>
  );
}

export default App;
