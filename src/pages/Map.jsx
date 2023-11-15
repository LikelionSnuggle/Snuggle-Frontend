import React from "react";
// import { useEffect, useState } from "react";
import KakaoMap from "../components/KakaoMap";
import PerformThumbnail from '../assets/performDetail-thumbnail.jpg'
import PerformCardHorizLong from "../components/PerformCardHorizLong";

export default function Map() {
  const performList = [
    {
      id:0,
      img: PerformThumbnail,
      date: "D-8",
      payment: "유료",
      title: "스너글 페스티벌 2023",
      location: "잠실종합운동장",
      scraped: false,
      tags: ["콘서트", "관심공연"],
      teamName : "멋쟁이 사자처럼"
    },
    {
      id:1,
      img: PerformThumbnail,
      date: "D-8",
      payment: "유료",
      title: "스너글 페스티벌 2023",
      location: "잠실종합운동장",
      scraped: false,
      tags: ["콘서트", "관심공연"],
      teamName : "멋쟁이 사자처럼"
    },
    {
      id:2,
      img: PerformThumbnail,
      date: "D-5",
      payment: "무료",
      title: "가을 캠프파이어",
      location: "한강 공원",
      scraped: true,
      tags: ["야외공연", "추천"],
      teamName : "멋쟁이 사자처럼"
    },
    {
      id:3,
      img: PerformThumbnail,
      date: "D-5",
      payment: "무료",
      title: "가을 캠프파이어",
      location: "한강 공원",
      scraped: true,
      tags: ["야외공연", "추천"],
      teamName : "멋쟁이 사자처럼"
    },
    {
      id:4,
      img: PerformThumbnail,
      date: "D-5",
      payment: "무료",
      title: "가을 캠프파이어",
      location: "한강 공원",
      scraped: true,
      tags: ["야외공연", "추천"],
      teamName : "멋쟁이 사자처럼"
    },
    {
      id:5,
      img: PerformThumbnail,
      date: "D-5",
      payment: "무료",
      title: "가을 캠프파이어",
      location: "한강 공원",
      scraped: true,
      tags: ["야외공연", "추천"],
      teamName : "멋쟁이 사자처럼"
    },
  ];
  return (
    <div className={`w-full h-full relative pb-[70px]`}>
      <KakaoMap height="50rem" widht="100rem"/>
      <div className={`absolute bottom-0 z-10 w-full h-[270px] bg-white content-center`}> 
        <PerformCardHorizLong 
          id={"0"} 
          img={PerformThumbnail} 
          date={"D-8"} 
          payment={"유료"} 
          title={"스너글 페스티벌 2023"} 
          location={"잠실종합운동장"} 
          scraped={true}
        />
      </div>
    </div>
  );
}
