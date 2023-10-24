import React from "react";
import { useEffect, useState } from "react";
import { GlobalColors } from "../styles/Styles";
import "../css/splashTitle.css";

import backgroundImage from "../assets/splash/splash-background.png";
import { ReactComponent as SplashIconX } from "../assets/splash/splash-icon1.svg";
import { ReactComponent as SplashIconPlus } from "../assets/splash/splash-icon2.svg";

function Main() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100vh",
  };

  return (
    <div className="h-full">
      <div style={backgroundStyle} className="pt-[6%]">
        <div className="flex justify-end items-center mr-[-28px]">
          <SplashIconX
            height="66"
            className="mr-[-14px] animate-fadeInOutSlow"
          />
          <SplashIconPlus
            height="32"
            className="mr-[-14px] animate-fadeInOutNormal"
          />
          <SplashIconX height="66" className="animate-fadeInOutFast" />
        </div>
        {/* <p className="w-full text-center text-white font-bold text-[32px] mt-[60px]">
          SNUGLE
        </p> */}
        <div className="flex justify-center w-full mt-[44px]">
          <svg className="intro go" viewBox="0 0 200 86">
            <text
              text-anchor="middle"
              x="100"
              y="30"
              className="text text-stroke"
              clip-path="url(#text1)"
            >
              SNUGLE
            </text>
            <text
              text-anchor="middle"
              x="100"
              y="30"
              className="text text-stroke text-stroke-2"
              clip-path="url(#text1)"
            >
              SNUGLE
            </text>
            <defs>
              <clipPath id="text1">
                <text text-anchor="middle" x="100" y="30" className="text">
                  SNUGLE
                </text>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-[80px] flex items-center w-full gap-[14px]">
          <SplashIconX height="66" className="animate-fadeInOutSlow" />
          <SplashIconX height="66" className="animate-fadeInOutNormal" />
        </div>
      </div>
      {/* <div
        className="absolute bottom-0 h-[67px] w-full max-w-[480px]"
        style={{ backgroundColor: GlobalColors.white }}
      ></div> */}
    </div>
  );
}

export default Main;
