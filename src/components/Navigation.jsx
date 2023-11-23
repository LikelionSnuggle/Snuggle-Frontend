import React from "react";
import { useLocation } from "react-router-dom";

export default function Navigation() {
  const location = useLocation(); // 현재 위치(경로)를 가져옵니다.

  // 항상 하단 바를 숨기고 싶은 경로들을 배열로 정의
  const noBottomBar = ["/", "/signup", "/login"];

  // 특정 패턴으로 시작하는 경로들을 위한 배열
  // 예를 들어, '/perform/detail/'로 시작하는 모든 경로를 여기에 포함시킴
  const noBottomBarPrefixes = [
    "/perform/detail/",
    "/anotherPath/",
    "/morePaths/",
  ];

  // 현재 경로가 noBottomBar 배열에 있거나 noBottomBarPrefixes 배열의 어떤 접두사로 시작하는지 검사함
  const shouldHideBottomBar =
    noBottomBar.includes(location.pathname) ||
    noBottomBarPrefixes.some((prefix) => location.pathname.startsWith(prefix));

  return (
    <>
      {!shouldHideBottomBar ? (
        // shouldHideBottomBar가 false일 경우, 즉 하단 바를 표시해야 하는 경우에만 하단 바를 렌더링
        <div className="fixed h-[70px] bg-red-900 w-full bottom-0 max-w-[480px] flex justify-center items-center z-50">
          {/* Navigation content */}
        </div>
      ) : null}
    </>
  );
}
