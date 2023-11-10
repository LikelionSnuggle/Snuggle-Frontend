import React from 'react'
import PerformCard from '../components/PerformCard'
import PerformThumbnail from '../assets/performDetail/performDetail-thumbnail.jpg'
import { Link } from 'react-router-dom';
import fireImg from '../assets/home/home-image-fire.svg'
import handImg from '../assets/home/home-image-hand.svg'
import pinImg from '../assets/home/home-image-redpin.svg'


const backgroundStyle = {
  backgroundImage: `url(${PerformThumbnail})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  height: "460px",
  backgroundColor: "grey",
};

export default function Home() {
  return (
    <div className={`w-full h-100vh bg-white`}>
      {/* 배너 */}
      <div className={`w-full h-[460px] p-[16px] text-white`} style={backgroundStyle}>
        <p className="text-[28px] font-bold">SNUGGLE</p>
        <div className='flex flex-row gap-2 my-[8px]'>
          <div className={`rounded border-2 border-white w-fit h-fit px-[4px]`}>HOT</div>
          <div className={`rounded border-2 border-white w-fit h-fit px-[4px]`}>공연정보</div>
        </div>
        <div className='flex flex-col h-1/2 justify-center'>
          <p className={`font-bold text-4xl`}>사자처럼 페스티벌</p>
          <p className={`text-[16px] my-[2px]`}>이번주 가장 많이 조회한 공연 1위</p>
        </div>
      </div>
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
          <Link to="/nearperform" className={`font-semibold text-zinc-300`}>모두보기</Link>
        </div>
        <p className={`text-zinc-400`}>가까운 지역의 공연들을 보여드립니다</p>
      </div>
      {/* 무대들 */}
      <div className={`flex flex-row w-full h-fit mx-[16px]`}>
        <div className='w-[164px] h-[136px] mr-[16px]'>
          <PerformCard img={PerformThumbnail} date={"D-8"} payment={"유료"} title={"스너글 페스티벌 2023"} location={"잠실종합운동장"} scraped={false}/>
        </div>
        <div className='w-[164px] h-[136px] mr-[16px]'>
          <PerformCard img={PerformThumbnail} date={"D-8"} payment={"유료"} title={"스너글 페스티벌 2023"} location={"잠실종합운동장"} scraped={false}/>
        </div>
      </div>

      {/* 새로운 스테이지 소식 */}
      <div className='flex flex-col mx-[16px] mt-[16px] mb-[8px]'>
        <div className={`flex flex-row w-full h-fit justify-between items-center`}>
          <div className={`flex flex-row items-center`}>
            <p className={`font-semibold text-[22px] p-0 mr-1`}>새로운</p>
            <p className={`text-xl mr-1`}>스테이지</p>
            <p className={`text-xl mr-2`}>소식</p>
            <img src={pinImg}/>
          </div>
          <Link to="/newperform" className={`font-semibold text-zinc-300`}>모두보기</Link>
        </div>
        <p className={`text-zinc-400`}>가장 최근에 등록된 공연순으로 보여드립니다</p>
      </div>
  
      {/* 공연일이 임박한 스테이지 */}
      <div className='flex flex-col mx-[16px] mt-[16px] mb-[8px]'>
        <div className={`flex flex-row w-full h-fit justify-between items-center`}>
          <div className={`flex flex-row items-center`}>
            <p className={`font-semibold text-[22px] p-0 m-0`}>공연일</p>
            <p className={`text-xl p-0 mr-1`}>이</p>
            <p className={`font-semibold text-[22px] mr-1`}>임박한</p>
            <p className={`text-xl mr-2`}>스테이지</p>
            <img src={handImg}/>
          </div>
          <Link to="/upcomingperform" className={`font-semibold text-zinc-300`}>모두보기</Link>
        </div>
        <p className={`text-zinc-400`}>곧 공연하는 공연순으로 보여드립니다</p>
      </div>
    
    </div>
  )
}
