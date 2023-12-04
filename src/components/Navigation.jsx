import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import homeIconGray from "../assets/all-icon-navigation-home-gray.svg";
import editIconGray from "../assets/all-icon-navigation-edit-gray.svg";
import locationIconGray from "../assets/all-icon-navigation-location-gray.svg";
import scrapIconGray from "../assets/all-icon-navigation-scrap-gray.svg";
import myIconGray from "../assets/all-icon-navigation-my-gray.svg";
import homeIconOrange from "../assets/all-icon-navigation-home-orange.svg";
import editIconOrange from "../assets/all-icon-navigation-edit-orange.svg";
import locationIconOrange from "../assets/all-icon-navigation-location-orange.svg";
import scrapIconOrange from "../assets/all-icon-navigation-scrap-orange.svg";
import myIconOrange from "../assets/all-icon-navigation-my-orange.svg";

export default function Navigation() {
  const location = useLocation(); // 현재 위치(경로)를 가져옵니다.
  const navigate = useNavigate();
  const [selectedIcon, setSelectedIcon] = useState("home");

  //
  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
    if (icon === "home") {
      navigate("/home");
    } else if (icon === "edit") {
      navigate("/edit");
    } else if (icon === "map") {
      navigate("/map");
    } else if (icon === "scrap") {
      navigate("/scrap");
    } else if (icon === "mypage") {
      navigate("/mypage");
    }
  };

  // 뒤로가기 이벤트가 발생했을 때, 이전 경로에 해당하는 버튼을 활성화시킴
  useEffect(() => {
    window.onpopstate = () => {
      const prePath = window.location.pathname;
      if (prePath === "/home") {
        setSelectedIcon("home");
      } else if (prePath === "/edit") {
        setSelectedIcon("edit");
      } else if (prePath === "/map") {
        setSelectedIcon("map");
      } else if (prePath === "/scrap") {
        setSelectedIcon("scrap");
      } else if (prePath === "/mypage") {
        setSelectedIcon("mypage");
      }
    };
  }, []);

  // 항상 하단 바를 숨기고 싶은 경로들을 배열로 정의
  const noBottomBar = [
    "/",
    "/signup",
    "/login",
    "/perform/detail",
    "/home/newperform",
    "/home/nearperform",
    "/home/upcomingperform",
  ];

  // 특정 패턴으로 시작하는 경로들을 위한 배열
  // 예를 들어, '/perform/detail/'로 시작하는 모든 경로를 여기에 포함시킴
  const noBottomBarPrefixes = ["/perform/detail/"];

  // 현재 경로가 noBottomBar 배열에 있거나 noBottomBarPrefixes 배열의 어떤 접두사로 시작하는지 검사함
  const shouldHideBottomBar =
    noBottomBar.includes(location.pathname) ||
    noBottomBarPrefixes.some((prefix) => location.pathname.startsWith(prefix));

  return (
    <>
      {!shouldHideBottomBar ? (
        // shouldHideBottomBar가 false일 경우, 즉 하단 바를 표시해야 하는 경우에만 하단 바를 렌더링
        <div className="fixed h-[70px] bg-white w-full bottom-0 max-w-[480px] flex justify-center items-center z-50">
          <img
            alt="homeIcon"
            className={`w-1/5 h-[32px] ${
              selectedIcon === "home" ? "selected" : ""
            }`}
            src={selectedIcon === "home" ? homeIconOrange : homeIconGray}
            onClick={() => handleIconClick("home")}
          />
          <img
            alt="editIcon"
            className={`w-1/5 h-[32px] ${
              selectedIcon === "edit" ? "selected" : ""
            }`}
            src={selectedIcon === "edit" ? editIconOrange : editIconGray}
            onClick={() => handleIconClick("edit")}
          />
          <img
            alt="mapIcon"
            className={`w-1/5 h-[40px] ${
              selectedIcon === "map" ? "selected" : ""
            }`}
            src={selectedIcon === "map" ? locationIconOrange : locationIconGray}
            onClick={() => handleIconClick("map")}
          />
          <img
            alt="scrapIcon"
            className={`w-1/5 h-[32px] ${
              selectedIcon === "scrap" ? "selected" : ""
            }`}
            src={selectedIcon === "scrap" ? scrapIconOrange : scrapIconGray}
            onClick={() => handleIconClick("scrap")}
          />
          <img
            alt="mypageIcon"
            className={`w-1/5 h-[34px] ${
              selectedIcon === "my" ? "selected" : ""
            }`}
            src={selectedIcon === "mypage" ? myIconOrange : myIconGray}
            onClick={() => handleIconClick("mypage")}
          />
        </div>
      ) : null}
    </>
  );
}
