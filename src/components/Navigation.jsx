import React from "react";
import { useLocation } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();
  const noBottomBar = ["/", "/signup", "/login", 
      "/perform/detail", "/home/newperform", "/home/nearperform", "/home/upcomingperform"];

  return (
    <>
      {!noBottomBar.includes(location.pathname) ? (
        <div className="fixed h-[70px] bg-red-900 w-full bottom-0 max-w-[480px] flex justify-center items-center z-50">
          sdfsd
        </div>
      ) : null}
    </>
  );
}
