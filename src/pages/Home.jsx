import React from 'react'
import { useEffect, useState } from "react";
import PerformCard from '../components/PerformCardSmall'
import PerformThumbnail from '../assets/performDetail-thumbnail.jpg'
import { Link } from 'react-router-dom';
import fireImg from '../assets/home/home-image-fire.svg'
import handImg from '../assets/home/home-image-hand.svg'
import pinImg from '../assets/home/home-image-redpin.svg'
import banner1 from '../assets/home/home-banner1.png'
import banner2 from '../assets/home/home-banner2.png'
import banner3 from '../assets/home/home-banner3.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const performList = [
  {
    img: PerformThumbnail,
    date: "D-8",
    payment: "유료",
    title: "스너글 페스티벌 2023",
    location: "잠실종합운동장",
    scraped: false,
    tags: ["콘서트", "관심공연"],
  },
  {
    img: PerformThumbnail,
    date: "D-8",
    payment: "유료",
    title: "스너글 페스티벌 2023",
    location: "잠실종합운동장",
    scraped: false,
    tags: ["콘서트", "관심공연"],
  },
  {
    img: PerformThumbnail,
    date: "D-8",
    payment: "유료",
    title: "스너글 페스티벌 2023",
    location: "잠실종합운동장",
    scraped: false,
    tags: ["콘서트", "관심공연"],
  },
  {
    img: PerformThumbnail,
    date: "D-8",
    payment: "유료",
    title: "스너글 페스티벌 2023",
    location: "잠실종합운동장",
    scraped: false,
    tags: ["콘서트", "관심공연"],
  },
  {
    img: PerformThumbnail,
    date: "D-5",
    payment: "무료",
    title: "가을 캠프파이어",
    location: "한강 공원",
    scraped: true,
    tags: ["야외공연", "추천"],
  },
];

export default function Home() {
  const [performList, setPerformList] = useState([]);

  // useEffect(() => {
  //   // API 호출 및 데이터 받아오기
  //   fetch("API 주소")
  //     .then((response) => response.json())
  //     .then((data) => setPerformList(data))
  //     .catch((error) => console.error(error));
  // }, []);


  return (
    <div className={`w-full h-100vh bg-white pb-[70px]`}>
      {/* 배너 */}
      <Swiper
      className={`w-full h-[500px] bg-black`}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      >
        <div className={`w-full h-[500px]`}>
          <SwiperSlide>
            <p className="p-[16px] text-[28px] font-bold text-white z-10 absolute">SNUGGLE</p>
            <img src={banner1} style={{objectFit: 'cover', width: '100%', height: '100%'}}/>
          </SwiperSlide>
          <SwiperSlide>
            <p className="p-[16px] text-[28px] font-bold text-white z-10 absolute">SNUGGLE</p>
            <img src={banner2} style={{objectFit: 'cover', width: '100%', height: '100%'}}/>
          </SwiperSlide>
          <SwiperSlide>
            <p className="p-[16px] text-[28px] font-bold text-white z-10 absolute">SNUGGLE</p>
            <img src={banner3} style={{objectFit: 'cover', width: '100%', height: '100%'}}/>
          </SwiperSlide>
        </div>
      </Swiper>
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
          <Link to="/home/nearperform" className={`font-semibold text-zinc-300`}>모두보기</Link>
        </div>
        <p className={`text-zinc-400`}>가까운 지역의 공연들을 보여드립니다</p>
      </div>
      {/* 무대들 */}
      <div className={`w-100vh h-[150px] mx-[16px] mb-[16px]`}>
        <Swiper
          className={`w-100vh h-[150px]`}
          slidesPerView={2.4}
          spaceBetween={10}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <div className={`w-full h-fit`}>
            <SwiperSlide>
              <PerformCard img={PerformThumbnail} date={"D-8"} payment={"유료"} title={"스너글 페스티벌 2023"} location={"잠실종합운동장"} scraped={false}/>
            </SwiperSlide>
            <SwiperSlide>
              <PerformCard img={PerformThumbnail} date={"D-8"} payment={"유료"} title={"스너글 페스티벌 2023"} location={"잠실종합운동장"} scraped={false}/>
            </SwiperSlide>
            <SwiperSlide>
              <PerformCard img={PerformThumbnail} date={"D-8"} payment={"유료"} title={"스너글 페스티벌 2023"} location={"잠실종합운동장"} scraped={false}/>
            </SwiperSlide>
            <SwiperSlide>
              <PerformCard img={PerformThumbnail} date={"D-8"} payment={"유료"} title={"스너글 페스티벌 2023"} location={"잠실종합운동장"} scraped={false}/>
            </SwiperSlide>
          </div>
        </Swiper>
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
          <Link to="/home/newperform" className={`font-semibold text-zinc-300`}>모두보기</Link>
        </div>
        <p className={`text-zinc-400`}>가장 최근에 등록된 공연순으로 보여드립니다</p>
      </div>
      {/* 무대들 */}
      <div className={`w-100vh h-[150px] mx-[16px] mb-[16px] active:overflow-x-scroll`}>
          <div className={`w-full h-fit`}>
          {performList.map((perform, index) => (
            <div key={index} className="w-[200px] h-full flex-shrink-0 mr-4">
              <PerformCard
                img={perform.img}
                date={perform.date}
                payment={perform.payment}
                title={perform.title}
                location={perform.location}
                scraped={perform.scraped}
                tags={perform.tags}
              />
            </div>
          ))}
          </div>
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
          <Link to="/home/upcomingperform" className={`font-semibold text-zinc-300`}>모두보기</Link>
        </div>
        <p className={`text-zinc-400`}>곧 공연하는 공연순으로 보여드립니다</p>
      </div>
      {/* 무대들 */}
      <div className={`w-100vh h-[150px] mx-[16px] mb-[16px]`}>
        <Swiper
          className={`w-100vh h-[150px]`}
          slidesPerView={2.4}
          spaceBetween={10}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <div className={`w-full h-fit`}>
            <SwiperSlide>
              <PerformCard img={PerformThumbnail} date={"D-8"} payment={"유료"} title={"스너글 페스티벌 2023"} location={"잠실종합운동장"} scraped={false}/>
            </SwiperSlide>
            <SwiperSlide>
              <PerformCard img={PerformThumbnail} date={"D-8"} payment={"유료"} title={"스너글 페스티벌 2023"} location={"잠실종합운동장"} scraped={false}/>
            </SwiperSlide>
            <SwiperSlide>
              <PerformCard img={PerformThumbnail} date={"D-8"} payment={"유료"} title={"스너글 페스티벌 2023"} location={"잠실종합운동장"} scraped={false}/>
            </SwiperSlide>
            <SwiperSlide>
              <PerformCard img={PerformThumbnail} date={"D-8"} payment={"유료"} title={"스너글 페스티벌 2023"} location={"잠실종합운동장"} scraped={false}/>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    
    </div>
  )
}
