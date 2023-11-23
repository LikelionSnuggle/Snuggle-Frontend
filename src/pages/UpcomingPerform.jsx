import React from 'react'
import { useEffect } from "react";
import handImg from '../assets/home/home-image-hand.svg'
import PerformThumbnail from '../assets/performDetail-thumbnail.jpg'
import PerformCardBig from '../components/PerformCardBig';


export default function UpcomingPerform() {
  const performList = [
    {
      id:"0",
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
      id:"1",
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
      id:"2",
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
      id:"3",
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
      id:"4",
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
      id:"5",
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


  useEffect(() => {
    window.scrollTo(0, 0); // 페이지 로딩 시 스크롤을 맨 위로 이동
  }, []);

  return (
    <div className={`bg-white w-full h-full mb-[16px] flex flex-col overscroll-none`}>
      {/* 공연일이 임박한 스테이지 */}
      <div className='flex flex-col mx-[16px] mt-[16px]'>
        <div className={`flex flex-row w-full h-fit justify-between items-center`}>
          <div className={`flex flex-row items-center`}>
            <p className={`font-semibold text-[22px] p-0 m-0`}>공연일</p>
            <p className={`text-xl p-0 mr-1`}>이</p>
            <p className={`font-semibold text-[22px] mr-1`}>임박한</p>
            <p className={`text-xl mr-2`}>스테이지</p>
            <img src={handImg} alt="handImg"/>
          </div>
        </div>
        <p className={`text-zinc-400`}>곧 공연하는 공연순으로 보여드립니다</p>
      </div>
      {/* 무대들 */}
      <div className={`flex flex-col m-[16px] w-100vh h-full`}>
        {performList.map((perform, index) => (
            <div key={index} className={`h-[288px] mb-4`}>
              <PerformCardBig
                id={perform.id}
                img={perform.img}
                date={perform.date}
                payment={perform.payment}
                title={perform.title}
                teamName={perform.teamName}
                location={perform.location}
                scraped={perform.scraped}
              />
            </div>
          ))}
      </div>
    </div>
  )
}
