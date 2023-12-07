import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import thumbnail from "../assets/performDetail-thumbnail.jpg";
import scrapIcon from "../assets/all-icon-scrap-gray.svg";
import scrapedIcon from "../assets/all-icon-scrap-orange-filled.svg";
import locationIcon from "../assets/all-icon-location-orange.svg";
import calendarIcon from "../assets/all-icon-calendar.svg";
import linkIcon from "../assets/all-icon-link.svg";
import tagIcon from "../assets/all-icon-tag.svg";
import phoneIcon from "../assets/all-icon-phone.svg";
import nextIcon from "../assets/all-icon-next.svg";
import KakaoMap from "../components/KakaoMap";

const API_URL =
  "https://port-0-snuggle-backend-jvpb2mlof9h57p.sel5.cloudtype.app/";

export default function PerformDetail() {
  const navigate = useNavigate();

  // scrap
  const [isScraped, setIsScraped] = useState(false);
  // scrap 클릭이벤트
  const handleScrapIconClick = () => {
    setIsScraped((prev) => !prev);
  };

  // 공연 상세정보
  // eslint-disable-next-line
  const [performDetail, setPerformDetail] = useState(null);
  // 공연 상세정보 불러오기
  useEffect(() => {
    const data = async () => {
      try {
        const responsePerformDetail = await axios.get(
          API_URL + "api/concert/0"
        );

        console.log(responsePerformDetail);
        console.log(responsePerformDetail.data);

        setPerformDetail(responsePerformDetail.data);
      } catch (error) {
        console.error("데이터를 가져오는데 실패하였습니다.", error);
      }
    };
    data();
  }, []);

  return (
    <div className={`flex flex-col text-justify`}>
      <img className={"w-full h-[270px]"} src={thumbnail} alt="thumbnail" />

      {/* 남은 날짜, 유료/무료 여부 */}
      <div className={`flex flex-row gap-2 w-full p-[16px]`}>
        <div
          className={`w-fit h-fit px-[6px] py-[2px] bg-zinc-200
          font-semibold text-zinc-500`}
        >
          D-21
        </div>
        <div
          className={`w-fit h-fit px-[6px] py-[2px] bg-zinc-200
          font-semibold text-zinc-500`}
        >
          유료
        </div>
      </div>
      {/* title, scrap 버튼 */}
      <div className={"flex flex-row justify-between px-[16px] w-full"}>
        <p className={`text-black text-3xl font-bold`}>스너글 페스티벌 2023</p>
        <img
          className={`mx-2 p-0`}
          src={isScraped ? scrapedIcon : scrapIcon}
          onClick={handleScrapIconClick}
          alt="scrapIcon"
        />
      </div>
      <hr className={`my-4`} />
      {/* 장소, 날짜 */}
      <div className={`flex flex-row gap-2 w-full px-[16px]`}>
        <div className="flex flex-row w-fit h-fit px-[12px] py-[6px] bg-signatureThin rounded-full gap-2">
          <img src={locationIcon} alt="locationIcon" />
          <div className={`font-semibold text-signatureLight`}>
            잠실종합운동장
          </div>
        </div>
        <div className="flex flex-row w-fit h-fit px-[12px] py-[6px] bg-signatureThin rounded-full gap-2">
          <img src={calendarIcon} alt="calendarIcon" />
          <div className={`font-semibold text-signatureLight`}>
            23-09-27 18:00
          </div>
        </div>
      </div>
      {/* 공연 소개글 */}
      <p className={`w-full p-[22px] leading-loose font-medium`}>
        공연 소개글 국가유공자 상이군경 및 전몰군경의 유가족은 법률이 정하는
        바에 의하여 우선적으로 근로의 기회를 부여받는다.
      </p>
      {/* 인터파크 링크, 태그 */}
      <div className="flex flex-col gap-4">
        <div className={`flex flex-row w-full gap-4 px-[22px]`}>
          <img src={linkIcon} alt="linkIcon" />
          <p className={`font-semibold`}>스너글 페스티벌 2023</p>
        </div>
        <div className={`flex flex-row w-full gap-4 px-[22px]`}>
          <img src={tagIcon} alt="tagIcon" />
          <div className="flex flex-row gap-2">
            <div
              className={`w-fit h-fit px-[6px] py-[2px] bg-zinc-200 rounded
              font-medium text-black`}
            >
              어쿠스틱
            </div>
            <div
              className={`w-fit h-fit px-[6px] py-[2px] bg-zinc-200 rounded
              font-medium text-black`}
            >
              소규모
            </div>
            <div
              className={`w-fit h-fit px-[6px] py-[2px] bg-zinc-200 rounded
              font-medium text-black`}
            >
              릴랙스
            </div>
          </div>
        </div>
        {/* 카카오맵 */}
        <div className={`w-full h-[288px] my-[20px] relative`}>
          <KakaoMap height="288px" className={`absolute left-0 right-0`} />
        </div>
        {/* 페이지 */}
        <div
          className={`flex flex-row w-full h-fit px-[22px] cursor-pointer`}
          onClick={() => navigate("/artistprofile")}
        >
          <img
            className={`w-[90px] h-[90px]`}
            src={thumbnail}
            alt="thumbnail"
          />
          <div className={`flex flex-col px-[16px]`}>
            <div className={`flex flex-row justify-between`}>
              <p className={`font-bold my-2`}>멋쟁이 사자처럼</p>
              <img src={nextIcon} alt="nextIcon" />
            </div>
            <p className={`font-normal text-sm py-0`}>
              한양대학교 ERICA캠퍼스 실용음악과 15학번 한승우, 김예은, 16학번
              음상훈, 전고은 학번은 ...
            </p>
          </div>
        </div>
      </div>

      {/* 전화번호 */}
      <div
        className={`flex flex-row px-[16px] m-[22px] gap-4 w-full h-fit items-center`}
      >
        <p className={`w-[40px] font-semibold text-zinc-400`}>문의</p>
        <div className={`h-[32px] w-[4px] bg-zinc-300`} />
        <div className={`flex flex-row gap-4 w-full`}>
          <img
            className={`w-[20px] h-[20px]`}
            src={phoneIcon}
            alt="phoneIcon"
          />
          <p className={`font-semibold text-zinc-400`}>010 - 1234 - 6789</p>
        </div>
      </div>
    </div>
  );
}
