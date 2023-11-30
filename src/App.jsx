import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import Map from "./pages/Map";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Mypage from "./pages/Mypage";
import PerformDetail from "./pages/PerformDetail";
import PerformPost from "./pages/PerformPost";
import NoticePost from "./pages/NoticePost";
import Navigation from "./pages/Navigation";
import NewPerformList from "./pages/NewPerform";
import NewPerform from "./pages/NewPerform";
import NearPerform from "./pages/NearPerform";
import Follow from "./pages/Follow";
import PPostCollect from "./pages/PPostCollect";
import NPostCollect from "./pages/NPostCollect";
import Filter from "./pages/Filter";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="map" element={<Map />}/>
        <Route path="home" element={<Home />}/>
        <Route path="profile" element={<Profile />}/>
        <Route path="mypage" element={<Mypage />}/>
        <Route path="newperform" element={<NewPerform />}/>
        <Route path="nearperform" element={<NearPerform />}/>
        <Route path="perform/detail" element={<PerformDetail />}/>
        <Route path="perform/post" element={<PerformPost />}/>
        <Route path="notice/post" element={<NoticePost />}/>
        <Route path="navigation" element={<Navigation />}/>
        <Route path="follow" element={<Follow />}/>
        <Route path="filter" element={<Filter />}/>
        <Route path="ppost/collect" element={<PPostCollect />}/>
        <Route path="npost/collect" element={<NPostCollect />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
