import React from "react";
import KakaoMap from "../components/KakaoMap";
import PerformThumbnail from "../assets/performDetail-thumbnail.jpg";
import PerformCardHorizLong from "../components/PerformCardHorizLong";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const { kakao } = window;

export default function Map() {
  const positions = [
    {
      title: "한양대 에리카",
      latlng: new kakao.maps.LatLng(37.296437931384084, 126.83517446295409),
    },
    {
      title: "학생회관",
      latlng: new kakao.maps.LatLng(37.29747361269484, 126.83480846961646),
    },
    {
      title: "1공학관",
      latlng: new kakao.maps.LatLng(37.29761244503008, 126.83746427147501),
    },
    {
      title: "클러스터",
      latlng: new kakao.maps.LatLng(37.29639123114575, 126.83888515754965),
    },
  ];
  // const performList = [
  //   {
  //     id:0,
  //     img: PerformThumbnail,
  //     date: "D-8",
  //     payment: "유료",
  //     title: "스너글 페스티벌 2023",
  //     location: "잠실종합운동장",
  //     scraped: false,
  //     tags: ["콘서트", "관심공연"],
  //     teamName : "멋쟁이 사자처럼"
  //   },
  //   {
  //     id:1,
  //     img: PerformThumbnail,
  //     date: "D-8",
  //     payment: "유료",
  //     title: "스너글 페스티벌 2023",
  //     location: "잠실종합운동장",
  //     scraped: false,
  //     tags: ["콘서트", "관심공연"],
  //     teamName : "멋쟁이 사자처럼"
  //   },
  //   {
  //     id:2,
  //     img: PerformThumbnail,
  //     date: "D-5",
  //     payment: "무료",
  //     title: "가을 캠프파이어",
  //     location: "한강 공원",
  //     scraped: true,
  //     tags: ["야외공연", "추천"],
  //     teamName : "멋쟁이 사자처럼"
  //   },
  //   {
  //     id:3,
  //     img: PerformThumbnail,
  //     date: "D-5",
  //     payment: "무료",
  //     title: "가을 캠프파이어",
  //     location: "한강 공원",
  //     scraped: true,
  //     tags: ["야외공연", "추천"],
  //     teamName : "멋쟁이 사자처럼"
  //   },
  //   {
  //     id:4,
  //     img: PerformThumbnail,
  //     date: "D-5",
  //     payment: "무료",
  //     title: "가을 캠프파이어",
  //     location: "한강 공원",
  //     scraped: true,
  //     tags: ["야외공연", "추천"],
  //     teamName : "멋쟁이 사자처럼"
  //   },
  //   {
  //     id:5,
  //     img: PerformThumbnail,
  //     date: "D-5",
  //     payment: "무료",
  //     title: "가을 캠프파이어",
  //     location: "한강 공원",
  //     scraped: true,
  //     tags: ["야외공연", "추천"],
  //     teamName : "멋쟁이 사자처럼"
  //   },
  // ];
  return (
    <div className={`w-full h-full relative pb-[70px]`}>
      <KakaoMap height="50rem" width="fit" placesPositionList={positions} />
      <div
        className={`absolute bottom-0 z-10 w-full h-[120px] bg-white px-[12px]`}
      >
        <Swiper
          className={`w-full h-[200px] bg-white mt-10`}
          slidesPerView={1.1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className={`w-full h-fit`}>
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
          </SwiperSlide>
          <SwiperSlide>
            <div className={`w-full h-fit`}>
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
          </SwiperSlide>
          <SwiperSlide>
            <div className={`w-full h-fit`}>
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
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
