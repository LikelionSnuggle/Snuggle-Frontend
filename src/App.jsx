import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import Map from "./pages/Map";
import Home from "./pages/Home";
import PerformDetail from "./pages/PerformDetail";
import Navigation from "./pages/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="map" element={<Map />}/>
        <Route path="home" element={<Home />}/>
        <Route path="perform/detail" element={<PerformDetail />}/>
        <Route path="navigation" element={<Navigation />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
