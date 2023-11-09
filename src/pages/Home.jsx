import React from 'react'
import PerformCard from '../components/PerformCard'
import PerformThumbnail from '../assets/performDetail/performDetail-thumbnail.jpg'

export default function Home() {
  return (
    <div className='w-full h-full'>
      <div className='w-[164px] h-[136px]'>
        <PerformCard tagFontSize='8px' titleFontSize='12px' locationFontSize='8px' 
        img={PerformThumbnail} date={"D-8"} payment={"유료"} title={"스너글 페스티벌 2023"} location={"잠실종합운동장"} scraped={false}/>
      </div>
    </div>
  )
}
