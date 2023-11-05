import React from "react";
import { useState, useEffect } from "react";
import SplashScreen from "../components/SplashScreen";
import mainBackground from "../assets/main-background.png";
import RowButton from "../components/RowButton";

function Main() {
  const [splash, setSplash] = useState(true);

  // useEffect(() => {
  //   const lastSplashTime = localStorage.getItem("lastSplashTime");

  //   // 현재 시간과 마지막 스플래시 화면 표시 시간을 비교합니다.
  //   const currentTime = new Date();
  //   if (lastSplashTime) {
  //     const nextSplashTime = new Date(JSON.parse(lastSplashTime));
  //     nextSplashTime.setDate(nextSplashTime.getDate() + 1); // 마지막으로 스플래시 화면이 표시된 후 하루가 지났는지 확인합니다.

  //     if (currentTime >= nextSplashTime) {
  //       setSplash(true); // 하루가 지났으면 스플래시 화면을 다시 표시합니다.
  //     }
  //   } else {
  //     setSplash(true); // 스플래시 화면을 처음 표시하는 경우입니다.
  //   }
  // }, []);

  useEffect(() => {
    // if (splash) {
    // 현재 시간을 로컬 스토리지에 저장하여 다음에 스플래시 화면을 표시할 시간을 계산하는 데 사용합니다.
    // const currentTime = new Date();
    // localStorage.setItem("lastSplashTime", JSON.stringify(currentTime));

    // 일정 시간이 지난 후에 스플래시 화면을 숨기는 로직
    const timeout = setTimeout(() => {
      setSplash(false);
    }, 5500);

    return () => clearTimeout(timeout);
    // }
    // }, [splash]);
  }, []);

  const backgroundStyle = {
    backgroundImage: `url(${mainBackground})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100vh",
    backgroundColor: "grey",
  };

  return (
    <div className="h-full">
      {splash ? (
        <SplashScreen />
      ) : (
        <div
          style={backgroundStyle}
          className="flex flex-col items-center justify-around px-[20px] pb-8"
        >
          <div />
          <div className="flex flex-col items-center gap-3 mb-8">
            <p className="text-white text-[32px] font-bold">SNUGGLE</p>
            <p className="text-white text-[18px]">너를 위한 스테이지그라운드</p>
          </div>
          <div className="flex flex-col items-center gap-4 w-full">
            <RowButton text="로그인" />
            <RowButton
              text="회원가입"
              backgroundColor="bg-white"
              fontColor="text-signature"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;
