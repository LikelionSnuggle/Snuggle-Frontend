import React from 'react'
import PerformCard from '../components/PerformCard'
import PerformThumbnail from '../assets/performDetail/performDetail-thumbnail.jpg'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className={`w-full h-100vh bg-white`}>
      {/* 배너 */}
      <div className={`w-full h-[460px]`}>
        <img className={`w-full h-full`} src={PerformThumbnail}/>
      </div>
      {/* 안산의 HOT 스테이지 */}
      <div className={`flex flex-row mt-[16px] px-[16px] w-full h-fit justify-between items-center`}>
        <p className={`font-semibold text-2xl`}>안산의 HOT 스테이지</p>
        <Link to="/nearperform" className={`font-semibold text-zinc-300`}>모두보기</Link>
      </div>
      {/* 무대들 */}
      <div className={`flex flex-row w-full h-fit mx-[16px] my-[16px]`}>
        <div className='w-[164px] h-[136px] mr-[16px]'>
          <PerformCard img={PerformThumbnail} date={"D-8"} payment={"유료"} title={"스너글 페스티벌 2023"} location={"잠실종합운동장"} scraped={false}/>
        </div>
        <div className='w-[164px] h-[136px] mr-[16px]'>
          <PerformCard img={PerformThumbnail} date={"D-8"} payment={"유료"} title={"스너글 페스티벌 2023"} location={"잠실종합운동장"} scraped={false}/>
        </div>
      </div>
      {/* 최근 소식 */}
      <div className={`flex flex-row mt-[16px] px-[16px] w-full h-fit justify-between items-center`}>
        <p className={`font-semibold text-2xl`}>최근 소식</p>
        <Link to="/newperform" className={`font-semibold text-zinc-300`}>모두보기</Link>
      </div>
      {/* 무대들 */}
      <div className={`flex flex-row w-full h-fit mx-[16px] my-[16px]`}>
        <div className='w-[164px] h-[136px] mr-[16px]'>
          <PerformCard img={PerformThumbnail} date={"D-8"} payment={"유료"} title={"스너글 페스티벌 2023"} location={"잠실종합운동장"} scraped={false}/>
        </div>
        <div className='w-[164px] h-[136px] mr-[16px]'>
          <PerformCard img={PerformThumbnail} date={"D-8"} payment={"유료"} title={"스너글 페스티벌 2023"} location={"잠실종합운동장"} scraped={false}/>
        </div>
      </div>
    </div>
  )
}
