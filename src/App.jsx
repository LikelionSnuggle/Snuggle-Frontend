import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";
import Main from "./pages/Main";
import SignUp from "./pages/SignUp";
import Map from "./pages/Map";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Mypage from "./pages/Mypage";
import PerformDetail from "./pages/PerformDetail";
import PerformPost from "./pages/PerformPost";
import Navigation from "./components/Navigation";
import NewPerform from "./pages/NewPerform";
import NearPerform from "./pages/NearPerform";
import ArtistProfile from "./pages/ArtistProfile";
import UpcomingPerform from "./pages/UpcomingPerform";
import NoticePost from "./pages/NoticePost";
// import NewPerformList from "./pages/NewPerform";
import Follow from "./pages/Follow";
import PPostCollect from "./pages/PPostCollect";
import NPostCollect from "./pages/NPostCollect";
import Filter from "./pages/Filter";


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
          <Route path="profile" element={<Profile />}/>
          <Route path="mypage" element={<Mypage />}/>
          <Route path="home/newperform" element={<NewPerform />} />
          <Route path="home/nearperform" element={<NearPerform />} />
          <Route path="home/upcomingperform" element={<UpcomingPerform />} />
          <Route path="perform/detail/:id" element={<PerformDetail />} />
          <Route path="perform/post" element={<PerformPost />}/>
          <Route path="notice/post" element={<NoticePost />}/>
          <Route path="perform/post" element={<PerformPost />} />
          <Route path="profile" element={<ArtistProfile />} />
          <Route path="follow" element={<Follow />}/>
          <Route path="filter" element={<Filter />}/>
          <Route path="ppost/collect" element={<PPostCollect />}/>
          <Route path="npost/collect" element={<NPostCollect />}/>
          </Routes>

        <Navigation />
      </div>
    </BrowserRouter>
  );
}

export default App;
