import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import SavePerform from "./SavePerform";
import FolloweArtist from "./FollowArtist";

const Follow = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/follow/saved">저장한 공연</Link>
            </li>
            <li>
              <Link to="/follow/followed">팔로우한 아티스트</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/follow/saved">
            <SavePerform />
          </Route>
          <Route path="/follow/followed">
            <FolloweArtist />
          </Route>
          <Route path="/follow" exact>
            {/* 기본 페이지 설정 */}
            <h2>상단바에서 선택</h2>
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default Follow;
