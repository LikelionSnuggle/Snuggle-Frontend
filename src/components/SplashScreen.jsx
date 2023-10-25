import { useEffect, useState } from "react";
import splashImg from "../assets/splash/splash-background.png";

import "../css/splashTitle.css";

import { ReactComponent as SplashIconX } from "../assets/splash/splash-icon1.svg";
import { ReactComponent as SplashIconPlus } from "../assets/splash/splash-icon2.svg";

function SplashScreen() {
  const [isSplashImgLoaded, setSplashImgLoaded] = useState(false);

  useEffect(() => {
    preloadImg(splashImg)
      .then(() => {
        setSplashImgLoaded(true); // 이미지 로딩 성공
      })
      .catch((error) => {
        console.error("Failed to load image", error); // 이미지 로딩 실패
      });
  }, []);

  function preloadImg(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve(url);
      img.onerror = (error) => reject(error);
    });
  }

  const backgroundStyle = {
    backgroundImage: `url(${splashImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100vh",
    backgroundColor: "grey",
  };

  return (
    <>
      <div style={backgroundStyle} className="pt-[6%]">
        {isSplashImgLoaded ? (
          <>
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
      SNUGGLE
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
                  SNUGGLE
                </text>
                <text
                  text-anchor="middle"
                  x="100"
                  y="30"
                  className="text text-stroke text-stroke-2"
                  clip-path="url(#text1)"
                >
                  SNUGGLE
                </text>
                <defs>
                  <clipPath id="text1">
                    <text text-anchor="middle" x="100" y="30" className="text">
                      SNUGGLE
                    </text>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="absolute bottom-[80px] flex items-center w-full gap-[14px]">
              <SplashIconX height="66" className="animate-fadeInOutSlow" />
              <SplashIconX height="66" className="animate-fadeInOutNormal" />
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default SplashScreen;
