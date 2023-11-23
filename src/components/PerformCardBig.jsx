import React, {useState} from 'react'
import scrapIcon from '../assets/all-icon-scrap-white.svg'
import scrapedIcon from "../assets/all-icon-scrap-orange-filled.svg"
import locationIcon from '../assets/all-icon-location-white.svg'

export default function PerformCardBig({
  id,
  img,
  date,
  payment,
  title,
  teamName,
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

  const [isScraped, setIsScraped] = useState(scraped);
  const handleScrapIconClick = (event) => {
    event.stopPropagation(); 
    setIsScraped((prev) => !prev); 
  }

  return (
    <div className={`flex flex-col rounded-lg bg-zinc-200 w-full h-[288px]`} onClick={() => window.location.href = "/perform/detail/"+id}>
      <div className={`w-full h-1/2 rounded-t-lg relative`} style={backgroundStyle}>
        <img 
        src={isScraped ? scrapedIcon : scrapIcon}
        onClick={handleScrapIconClick}
        className="w-fit h-1/3 p-0 absolute right-6 top-6" 
        alt="scrapIcon" />
        <div className={`flex flex-row absolute bottom-2 left-4 w-fit h-fit gap-1`}>
          <img 
          src={locationIcon} 
          className={`w-6 h-6`}
          alt="locationIcon"/>
          <p className={`text-white text-[18px] font-semibold`}>{location}</p>
        </div>
      </div>
      <div className={`w-full h-1/2 flex flex-col p-[20px] gap-1`}>
        <div className={`flex flex-row gap-2`}>
          <div className={`text-zinc-500 text-[16px] font-semibold bg-zinc-400 w-fit h-fit px-[4px]`}>{date}</div>
          <div className={`text-zinc-500 text-[16px] font-semibold bg-zinc-400 w-fit h-fit px-[4px]`}>{payment}</div>
        </div>
        <p className={`text-[30px] font-bold text-black`}>{title}</p>
        <p className={`text-[18px] font-normal text-zinc-600`}>{teamName}</p>
      </div>
    </div>
  )
}
