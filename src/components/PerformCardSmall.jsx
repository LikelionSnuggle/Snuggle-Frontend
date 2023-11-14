import React from "react";
import scrapIcon from "../assets/all-icon-scrap-gray.svg";
import locationIcon from "../assets/all-icon-location-gray.svg";

export default function PerformCard({
  img,
  tags,
  date,
  payment,
  title,
  location,
  scraped,
}) {
  const backgroundStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundColor: "grey",
  };

  return (
    <div
      className={`flex flex-col rounded-lg bg-zinc-200 w-full h-full`}
    >
      <div className={`w-full h-1/2 rounded-t-lg`} style={backgroundStyle}>
        <div className={`flex flex-row gap-1 m-[4px]`}>
          {tags && tags.length > 0 ? (
              tags.map((tag, index) => (
                <div
                  key={index}
                  className={`text-[8px] text-white border border-white rounded-lg w-fit h-fit px-[2px]`}
                >
                  <p>{tag}</p>
                </div>
              ))
            ) : (
              <div></div>
            )}
        </div> 
      </div>
      <div className={`w-full h-1/2 flex flex-row w-full`}>
        <div className="flex flex-col gap-1 h-full w-full content-center my-2 ml-2">
          <div className={`flex flex-row gap-1 w-full`}>
            <div
              className={`w-fit h-fit px-[4px] bg-zinc-300
                font-bold text-[8px] text-zinc-500`}
            >
              {date}
            </div>
            <div
              className={`w-fit h-fit px-[4px] bg-zinc-300
                font-bold text-[8px] text-zinc-500`}
            >
              {payment}
            </div>
          </div>
          <p className={`text-[12px] font-semibold`}>{title}</p>
          <div className="flex flex-row w-fit h-fit gap-1">
            <img src={locationIcon} alt="locationIcon" />
            <div className={`font-normal text-zinc-500 text-[8px]`}>
              {location}
            </div>
          </div>
        </div>
        <img src={scrapIcon} className="w-1/6 h-1/5 mt-2" alt="scrapIcon" />
      </div>
    </div>
  );
}
