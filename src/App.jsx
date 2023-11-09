import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import Map from "./pages/Map";
<<<<<<< HEAD
import Login from "./pages/Login";
=======
import Home from "./pages/Home";
import PerformDetail from "./pages/PerformDetail";
import Navigation from "./pages/Navigation";
>>>>>>> 3cb33c353d27b66a76c682e1f045e02539012264

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="signup" element={<SignUp />} />
<<<<<<< HEAD
        <Route path="login" element={<Login />} />
        <Route path="map" element={<Map />} />
=======
        <Route path="map" element={<Map />}/>
        <Route path="home" element={<Home />}/>
        <Route path="perform/detail" element={<PerformDetail />}/>
        <Route path="navigation" element={<Navigation />}/>
>>>>>>> 3cb33c353d27b66a76c682e1f045e02539012264
      </Routes>
    </BrowserRouter>
  );
}

export default App;
