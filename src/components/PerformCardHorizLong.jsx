import React, { useState } from "react";
import scrapIcon from "../assets/all-icon-scrap-gray.svg";
import scrapedIcon from "../assets/all-icon-scrap-orange-filled.svg";

export default function PerformCardHorizLong({
  id,
  img,
  date,
  title,
  location,
  scraped,
}) {
  const [isScraped, setIsScraped] = useState(scraped);
  const handleScrapIconClick = () => {
    setIsScraped((prev) => !prev);
  };

  return (
    <div
      className={`gap-2 flex flex-row w-11/12 h-[150px] bg-zinc-200 content-center items-center rounded-lg`}
      onClick={() => (window.location.href = "/perform/detail/" + id)}
    >
      <img src={img} className={"m-4 w-28 h-28"} alt="thumbnail" />

      <div className={`w-full flex flex-col gap-4`}>
        {/* 제목, 스크랩 */}
        <div className={`flex flex-row relative`}>
          <div className={"font-bold text-[20px]"}>{title}</div>
          <img
            className={`mx-2 p-0 absolute right-0 w-[28px]`}
            src={isScraped ? scrapedIcon : scrapIcon}
            onClick={handleScrapIconClick}
            alt="scrapIcon"
          />
        </div>
        {/* 날짜, 장소 */}
        <div className={`flex flex-row gap-2`}>
          <div className="flex flex-row w-fit h-fit px-[12px] py-[2px] bg-zinc-400 rounded-full gap-2 font-bold text-zinc-800">
            {date}
          </div>
          <div className="flex flex-row w-fit h-fit px-[12px] py-[2px] bg-signatureThin rounded-full gap-2 font-bold text-signature">
            {location}
          </div>
        </div>
      </div>
    </div>
  );
}
