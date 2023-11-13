import React from 'react'
import scrapIcon from '../assets/all-icon-scrap.svg'
import locationIcon from '../assets/all-icon-location-gray.svg'

export default function PerformCardBig(
  {img,
  date,
  payment,
  title,
  teamName,
  location,
  scraped,}
) {

  const backgroundStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundColor: "grey",
  };

  return (
    <div
      className={`flex flex-col rounded bg-zinc-200 w-full h-full`}
    >
      <div className={`w-full h-1/2 rounded-t`} style={backgroundStyle}>
        <img src={scrapIcon} className="w-fit h-1/3 p-0" alt="scrapIcon" />
      </div>
      <div className={`w-full h-1/2 flex flex-col`}>
        <p className={`text-[28px] font-semibold text-black`}>{title}</p>
        <p className={`text-[16px] font-normal text-zinc-600`}>{teamName}</p>
      </div>
    </div>
  )
}
