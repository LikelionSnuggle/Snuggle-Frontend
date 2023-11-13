import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import Map from "./pages/Map";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PerformDetail from "./pages/PerformDetail";
import PerformPost from "./pages/PerformPost";
import Navigation from "./components/Navigation";
import NewPerform from "./pages/NewPerform";
import NearPerform from "./pages/NearPerform";
import UpcomingPerform from "./pages/UpcomingPerform";

function App() {
  return (
    <BrowserRouter>
      <div className="h-full w-full flex flex-col">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="map" element={<Map />} />
          <Route path="home" element={<Home />} />
          <Route path="home/newperform" element={<NewPerform />} />
          <Route path="home/nearperform" element={<NearPerform />} />
          <Route path="home/upcomingperform" element={<UpcomingPerform />} />
          <Route path="perform/detail" element={<PerformDetail />} />
          <Route path="perform/post" element={<PerformPost />} />
        </Routes>

        <Navigation />
      </div>
    </BrowserRouter>
  );
}

export default App;
