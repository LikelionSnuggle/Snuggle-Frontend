import React from 'react'
import scrapIcon from '../assets/all-icon-scrap.svg'
import locationIcon from '../assets/all-icon-location-gray.svg'


export default function PerformCard({img, date, payment, title, location, scraped}) {
  return (
    <div className={`flex flex-col rounded bg-zinc-200 w-full h-full font-['IBM-Plex-Sans']`}>
      <img className={`w-full h-1/2 rounded-t`} src={img}/>
      <div className={`w-full h-1/2 flex flex-row w-full `}>
        <div className='flex flex-col gap-1 h-full w-full content-center my-2 ml-2'>
            <div className={`flex flex-row gap-1 w-full`}>
                <div className={`w-fit h-fit px-[4px] bg-zinc-300
                font-bold text-[8px] text-zinc-500`}>{date}</div>
                <div className={`w-fit h-fit px-[4px] bg-zinc-300
                font-bold text-[8px] text-zinc-500`}>{payment}</div>
            </div>
            <p className={`text-[12px] font-semibold`}>{title}</p>
            <div className='flex flex-row w-fit h-fit gap-1'>
                <img src={locationIcon}/>
                <div className={`font-normal text-zinc-500 text-[8px]`}>{location}</div>
            </div>
        </div>
        <img src={scrapIcon} className='w-1/6 h-1/5 mt-2'/>
      </div>
    </div>
  )
}
