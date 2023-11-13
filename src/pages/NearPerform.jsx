import React from "react";
import { Link } from 'react-router-dom';
import PerformCard from '../components/PerformCard'
import PerformThumbnail from '../assets/performDetail-thumbnail.jpg'
import fireImg from '../assets/home/home-image-fire.svg'
import PerformCardBig from "../components/PerformCardBig";

export default function NearPerform() {
  return (
  <div className={`bg-white w-full h-full flex flex-col`}>
    {/* 안산의 HOT 스테이지 */}
    <div className='flex flex-col mx-[16px] mt-[16px] mb-[8px]'>
        <div className={`flex flex-row w-full h-fit justify-between items-center`}>
          <div className={`flex flex-row items-center`}>
            <p className={`font-semibold text-[22px] p-0 m-0`}>안산</p>
            <p className={`text-xl p-0 mr-2`}>의</p>
            <p className={`font-semibold text-[22px] mr-1`}>HOT</p>
            <p className={`text-xl mr-2`}>스테이지</p>
            <img src={fireImg}/>
          </div>
        </div>
        <p className={`text-zinc-400`}>가까운 지역의 공연들을 보여드립니다</p>
      </div>
    {/* 무대들 */}
    <div className={`flex flex-col m-[16px] w-100vh h-full`}>
      <div className={`h-[280px]`}>
        <PerformCardBig img={PerformThumbnail} date={"D-8"} payment={"유료"} title={"스너글 페스티벌 2023"} teamName={"멋쟁이 사자처럼"} location={"잠실종합운동장"} scraped={false}/>
      </div>
    </div>
  </div>
  )
}
